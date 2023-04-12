# ELEVATEX📈💰
Welcome to our startup platform - an online community for entrepreneurs, investors, and mentors to connect and collaborate. Our platform aims to empower startups by providing a comprehensive set of tools and resources to help them grow and succeed. 
Whether you are an early-stage startup looking for funding, a seasoned entrepreneur seeking mentorship, or an investor searching for the next big idea, our platform has something to offer for everyone. With our user-friendly interface and advanced features, we strive to make the startup journey easier and more rewarding for everyone involved.

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Workflow of Our Platform
Our platform provides an easy and efficient way for entrepreneurs and investors to connect with each other. Here is a detailed workflow of how our platform works:

### Sign Up Process
To register in the application, you need to provide the following information:

Email
Password
Or you can sign up with google authentication

Once you provide this information, it's time to specify your category. There are two categories:

Shark
Investor

### Registration for Startup 
Founder will have to answer some question to get his startup registered on our platform

When a user submits a new startup, a Firebase Function is triggered that adds the startup data to our Firebase Firestore database.

### Login Process
To log in to your account, you need to enter your email and password. The database works to reach your account if it exists in our system.
When a user logs in, a Firebase Function is called that verifies their credentials and returns a token that is used to authenticate subsequent requests.

### Posts Page
Our platform has a posts page where startup can share their ideas and details about their startup. The more details provided from the startup, the better. Investors can browse through these posts and connect with the Pitchers whose ideas they find interesting.

A user can search for startups with a specific tag, a Firebase Function is called that queries the Firestore database and retrieves the relevant data.

We are constantly working on improving our platform to make it more user-friendly and efficient. In the future, we plan to add new features such as using machine learning models to predict the growth of each registered startup, video call rooms to connect investors and startups, and introducing a subscription model for registering on our platform.

## UPCOMING FEATURES

## Predicting startup growth with Machine Learning
We are currently working on integrating a machine learning model that can predict the growth of each registered startup on our platform. This will provide valuable insights to both the startups and investors, enabling them to make better informed decisions. Our machine learning model will take into account a variety of factors such as past performance, market trends, and competition to make accurate growth predictions.

To achieve this, we are utilizing the services of Google Cloud to build and deploy our machine learning model. Google Cloud provides us with a secure, scalable, and highly available infrastructure to train and deploy our model.

## Video call room to connect investors and startups
In order to facilitate communication between investors and startups, we are planning to introduce a video call room feature. This feature will allow registered startups to connect with interested investors and pitch their ideas in a more personal and interactive manner. Investors can also use this feature to ask questions and get more information about the startup they are interested in.

To ensure a seamless experience for our users, we are utilizing the services of AMD to provide high-performance video encoding and decoding capabilities. This will enable us to deliver high-quality video and audio streams to our users, regardless of their device or network speed.

## Introducing a subscription model for registering on our platform
To sustain and grow our platform, we are planning to introduce a subscription model for registering on our platform. This will allow us to generate revenue to cover our operating costs and invest in further development of the platform.

To ensure a secure and reliable subscription process, we are utilizing the services of Google Cloud for payment processing and user authentication. Google Cloud provides us with a highly secure and scalable infrastructure to process payments and authenticate users, ensuring a seamless and secure subscription experience for our users.