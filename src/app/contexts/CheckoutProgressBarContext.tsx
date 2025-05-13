"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface checkoutProgressBarContextProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const checkoutProgressBarContext = createContext<
  checkoutProgressBarContextProps | undefined
>(undefined);

export default function CheckoutProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState<number>(0);
  return (
    <checkoutProgressBarContext.Provider value={{ step, setStep }}>
      {children}
    </checkoutProgressBarContext.Provider>
  );
}
