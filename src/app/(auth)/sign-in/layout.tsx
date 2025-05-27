import { CartProvider } from "@/app/(main)/contexts/CartContext";
import CheckoutProgressBarProvider from "@/app/(main)/contexts/CheckoutProgressBarContext";
import { NavDropdownProvider } from "@/app/(main)/contexts/NavDropdownContext";
import { WishlistProvider } from "@/app/(main)/contexts/WishlistContext";
import "./../../globals.css";

export default function SignInLayout({
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
              <body>{children}</body>
            </html>
          </NavDropdownProvider>
        </CheckoutProgressBarProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
