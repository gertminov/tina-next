import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body className="h-screen w-screen flex flex-col items-center ">
            <Header/>
            <div className="grow w-full flex place-content-center ">
                {children}
            </div>
            <Footer/>
        </body>
        </html>
    )
}
