import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

const siteFont=Exo_2({
  weight:"400",
  style:"normal",
  subsets:["latin"]
})



export const metadata = {
  title: "Checker",
  description: "Developed by mazaharul islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${siteFont.className}  antialiased bg-gray-100 ` }
      >
   <Header/>
      {children}
    <Toaster/>
      </body>
    </html>
  );
}
