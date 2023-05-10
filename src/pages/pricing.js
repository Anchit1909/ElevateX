import Head from "next/head";
import React from "react";
import getStripe from "@/utils/get-stripejs";
import { fetchPostJSON } from "@/utils/api-helpers";

function pricing() {
  const item = ["Subscription Plan", 799];
  const createSubscriptionSession = async () => {
    // setLoading(true);
    const checkoutSession = await fetchPostJSON(
      "/api/subscription_sessions",
      item
    );
    //Internal server error
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }
    // Redirect to checkout
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);

    // setLoading(false);
  };
  return (
    <div>
      <Head>
        <title>Pricing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button
          className="border-2 px-2 rounded-md text-xl font-inter font-bold border-[#7268E2] text-[#7268E2]"
          onClick={createSubscriptionSession}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default pricing;
