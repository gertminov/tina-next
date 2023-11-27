import "../app/globals.css";
import type { AppProps } from "next/app";
import { Caudex } from "next/font/google";
import RootLayout from "./layout";

const caudex = Caudex({
    weight: "400",
    variable: "--font-caudex",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${caudex.variable}`}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </main>
    );
}
