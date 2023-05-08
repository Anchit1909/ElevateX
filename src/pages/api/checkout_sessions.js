import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    const item = req.body.item;
    console.log(item);

    //This is the shape in which stripe expects the data to be
    // const transformedItems = {
    //   price_data: {
    //     currency: "inr",
    //     product_data: {
    //       name: "anchit",
    //     },
    //     unit_amount: 100,
    //   },
    //   quantity: 1,
    // };

    try {
      // Create Checkout Sessions from body params
      const params = {
        payment_method_types: ["card"],
        // shipping_address_collection: {
        //   allowed_countries: ["US", "CA", "GB"],
        // },
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1N5XpzSFhWqgkmNLt9ozxa9I",
            quantity: 1,
          },
        ],
        payment_intent_data: {},
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
        // metadata: {
        //   images: JSON.stringify(items.map((item) => item.image[0].asset.url)),
        // },
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
