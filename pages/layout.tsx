import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import {Caudex} from "next/font/google";



const caudex = Caudex({
    weight: "400",
    variable: "--font-caudex",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Valentina Werr</title>
                <meta name="description" content="This is the Website of Valentina Werr"/>
                <link rel="icon" href="/icons/TinaIcon/faviconW.ico"/>
            </Head>
            <Header />
            <div className="grow">{children}</div>
            <Footer />
        </div>
    );
}
