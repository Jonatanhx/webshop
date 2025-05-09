import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";
import { NavDropdownProvider } from "./contexts/NavDropdownContext";
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
        <NavDropdownProvider>
          <html lang="en">
            <body>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </NavDropdownProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
