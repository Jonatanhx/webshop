import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

interface CartTotalProps {
  total: number | undefined;
}

export default function CartTotal({ total }: CartTotalProps) {
  const shippingFee = 25;
  return (
    <div className="flex flex-1">
      <div className="flex flex-col gap-8 flex-0 p-4 bg-neutral-200">
        {total && (
          <div>
            <div className="border-b py-4">
              <p className="text-md">Subtotal: ${total}.00</p>
              <p className="text-md">Delivery: ${shippingFee}.00</p>
            </div>
            <p className="text-md font-semibold pt-2">
              Total: ${total + shippingFee}.00
            </p>
            <p className="text-neutral-700 text-sm">
              Including $13.00 in taxes
            </p>
          </div>
        )}
        <form className="flex gap-3">
          <input
            className="flex border p-3 rounded-xl bg-white"
            placeholder="Discount code or gift card"
          />
          <button className="px-4 border rounded-xl text-white bg-neutral-600 hover:bg-neutral-600/70 hover:cursor-pointer duration-300">
            Apply
          </button>
        </form>

        <Link href="/checkout" className="btn1">
          Go to checkout
        </Link>

        <div className="flex flex-col gap-1">
          <p className="text-neutral-700">We accept</p>
          <ul className="relative flex items-center gap-3">
            <li>
              <Icon icon="logos:mastercard" className="size-8" />
            </li>
            <li>
              <Icon icon="logos:visa" className="size-11" />
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
    </div>
  );
}
