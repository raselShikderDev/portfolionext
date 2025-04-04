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
  title: "Rasel Shikder | Portfolio",
  description: "Innovative Solutions, Seamless Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${Outfit.variable} ${Ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darktheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
