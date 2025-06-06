import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

interface CartTotalProps {
  total: number | undefined;
}

export default function CartTotal({ total }: CartTotalProps) {
  const shippingFee = 25;
  return (
    <div className="flex flex-col gap-8 flex-0 p-4 bg-neutral-200">
      {total && (
        <div>
          <div className="border-b py-4">
            <span className="text-md">Subtotal: ${total}.00</span>
            <p className="text-md">Delivery: ${shippingFee}.00</p>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-semibold pt-2">
              Total: ${total + shippingFee}.00
            </span>
            <span className="text-neutral-700 text-sm">
              Including $13.00 in taxes
            </span>
          </div>
        </div>
      )}
      <form className="flex gap-3">
        <input
          className="flex flex-1 border p-3 rounded-xl bg-white"
          placeholder="Discount code or gift card"
        />
        <button className="px-4 border rounded-xl text-white bg-neutral-600 hover:bg-neutral-600/70 hover:cursor-pointer duration-300">
          Apply
        </button>
      </form>

      <Link href="/checkout/address" className="btn1">
        Go to checkout
      </Link>

      <div className="flex flex-col gap-1">
        <span className="text-neutral-700">We accept</span>
        <ul className="relative flex items-center gap-3">
          <li>
            <Icon icon="logos:mastercard" className="size-8" />
          </li>
          <li>
            <Icon icon="logos:visa" className="size-11" />
          </li>
          <li>
            <Icon icon="logos:paypal" className="size-8" />
          </li>
          <li className="relative">
            <Image
              alt="swish icon"
              src="/swishIcon.svg"
              width={25}
              height={25}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
