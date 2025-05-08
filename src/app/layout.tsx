import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <WishlistProvider>
        <html lang="en">
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </WishlistProvider>
    </CartProvider>
  );
}
