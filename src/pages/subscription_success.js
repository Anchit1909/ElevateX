import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../../firebase";
import { getSession } from "next-auth/react";

function subscription_success({ user }) {
  const router = useRouter();
  const { session_id } = router.query;
  let requiredDocId;
  const db = getFirestore(app);
  async function updateData() {
    const updatedData = {
      subscribed: true,
    };
    const docRef = doc(db, "users", requiredDocId);
    await updateDoc(docRef, updatedData);
  }

  async function getUserStatus() {
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      requiredDocId = doc.id;
    });
    await updateData();
  }

  // .then((docRef) => {
  //   console.log(
  //     "A New Document Field has been added to an existing document"
  //   );
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  useEffect(() => {
    getUserStatus();
  }, []);

  // console.log(user);
  return (
    <div>
      <Head>
        <title>Thank you for subscribing!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>{session_id}</h3>
        <button onClick={getUserStatus}>Hey</button>
      </div>
    </div>
  );
}

export default subscription_success;
//server side rendering
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
