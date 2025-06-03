import "./../globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";
import CheckoutProgressBarProvider from "./contexts/CheckoutProgressBarContext";
import { NavDropdownProvider } from "./contexts/NavDropdownContext";
import { WishlistProvider } from "./contexts/WishlistContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <WishlistProvider>
        <CheckoutProgressBarProvider>
          <NavDropdownProvider>
            <html lang="en">
              <body>
                <div id="hamburger-menu-root" />
                <Header />
                {children}
                <Footer />
              </body>
            </html>
          </NavDropdownProvider>
        </CheckoutProgressBarProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
