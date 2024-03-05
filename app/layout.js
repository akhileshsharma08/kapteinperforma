import { Inter } from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "./Context/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quotation.Kaptein.in",
  description: "Quotation.Kaptein.in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
        {children}
        </MyContextProvider>
        </body>
    </html>
  );
}
