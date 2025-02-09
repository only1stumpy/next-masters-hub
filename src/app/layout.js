import { Manrope } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const generalSans = localFont({
  src: './GeneralSans-Medium.woff2',
  variable: "--font-general-sans",
  subsets: ["latin"],
});
const fortusNova = localFont({
  src: './CFFortusnovaDemo-Bold.otf',
  variable: "--font-fortusnova",
  subsets: ["latin"],
});

export const metadata = {
  title: "Masters Hub",
  description: "Done by only1stumpy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${generalSans.variable} ${fortusNova.variable} antialiased `}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
