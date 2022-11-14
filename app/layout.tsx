import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Caudex} from "@next/font/google"

const caudex = Caudex({weight:"400", variable: "--font-caudex", subsets: ["latin"]})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={caudex.variable}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body className="flex flex-col min-h-screen">
            <Header/>
            <div className="grow flex ">
                {children}
            </div>
            <Footer/>
        </body>
        </html>
    )
}
