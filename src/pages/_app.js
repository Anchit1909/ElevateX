import "@/styles/globals.css";
import { Poppins, Inter } from "next/font/google";
import cx from "classnames";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
 
  return (
    <SessionProvider session={session}>
      <main className={cx(poppins.variable, inter.variable)}>
        <Toaster />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
