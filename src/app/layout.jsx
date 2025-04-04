import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Rasel Shikder",
  description: "Innovative Solutions, Seamless Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden ">
      <body
        className={`${Outfit.variable} ${Ovo.variable} antialiased leading-8 dark:bg-darktheme dark:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
