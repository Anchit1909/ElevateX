import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function success() {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <div>
      <Head>
        <title>Thank you! - Aurius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>{session_id}</p>
      </div>
    </div>
  );
}

export default success;
