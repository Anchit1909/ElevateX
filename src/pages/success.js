import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";

function success() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { session_id } = router.query;
  // async function rr() {
  //   const response = await getSession();
  //   console.log(response);
  // }
  // if (status === "authenticated") {
  //   return <p>Signed in user token {session}</p>;
  // }

  return (
    <div>
      <Head>
        <title>Thank you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <p>Order no. {session_id}</p>
        <h1>
          Thanks for your order. You will receive your confirmation in your
          email.
        </h1>
        {/* <div style={{ width: "400px", margin: "30px auto" }}>
          {session_id ? (
            <>
              <h2>Hey there</h2>
              <p>Start of your event</p>
              <DateTimePicker onChange={setStart} value={start} />
              <p>End of your event</p>
              <DateTimePicker onChange={setEnd} value={end} />
              <p>Event name</p>
              <input
                type="text"
                onChange={(e) => setEventName(e.target.value)}
              />
              <p>Event description</p>
              <input
                type="text"
                onChange={(e) => setEventDescription(e.target.value)}
              />
              <hr />
              <button onClick={() => rr()}>Create Calendar Event</button>
              <p></p>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          ) : (
            <>
              <button onClick={() => googleSignIn()}>
                Sign In With Google
              </button>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default success;
