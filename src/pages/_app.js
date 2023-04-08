import "@/styles/globals.css";
import { Poppins, Inter } from "@next/font/google";
import cx from "classnames";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={cx(poppins.variable, inter.variable)}>
      <Component {...pageProps} />;
    </main>
  );
}
