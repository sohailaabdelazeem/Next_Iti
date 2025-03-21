import Navigation from "@/components/Navigation";
import "./globals.css";
import Logo from "@/components/Logo";
import {Josefin_Sans} from 'next/font/google'
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata={
  title:"Home",
  description:"Ecommerce Website"
};
const josefin=Josefin_Sans({subsets:["latin"],weight:"400"})
console.log(josefin);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider> 
        <body className={josefin.className}>
          <nav>
            <Navigation />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}

