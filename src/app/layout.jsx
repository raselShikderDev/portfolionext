import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const Outfit = OutfitFont({
  subsets: ["latin"], 
  weight:["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"], weight:["400",]
});

export const metadata = {
  title: "Rasel Shikder | Portfolio",
  description: "Innovative Solutions, Seamless Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.variable} ${Ovo.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
