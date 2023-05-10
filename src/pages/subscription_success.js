import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function subscription_success() {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <div>
      <Head>
        <title>Thank you for subscribing!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>{session_id}</h3>
      </div>
    </div>
  );
}

export default subscription_success;
