"use client";

import Link from "next/link";

export default function AddressForm() {
  return (
    <form className="flex flex-col gap-4 my-4 w-full">
      <div className="flex items-center justify-center input-field2 relative min-h-[2.4rem] p-4">
        <select className="absolute w-[98%] h-[100%] px-2">
          <option value="">---</option>
          <option value="sweden">Sweden</option>
          <option value="sweden">Norway</option>
          <option value="sweden">Finland</option>
          <option value="sweden">Denmark</option>
          <option value="sweden">Germany</option>
          <option value="sweden">France</option>
          <option value="sweden">United Kingdom</option>
          <option value="sweden">Ireland</option>
          <option value="sweden">Scotland</option>
          <option value="sweden">Estonia</option>
          <option value="sweden">Lithuania</option>
          <option value="sweden">Latvia</option>
          <option value="sweden">Russia</option>
        </select>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          required
          placeholder="First name"
          className="input-field1"
        />
        <input
          type="text"
          className="input-field1"
          required
          placeholder="Last name"
        />
      </div>
      <input
        type="text"
        required
        placeholder="Street & house number"
        className="input-field1"
      />
      <input
        type="text"
        required
        className="input-field1"
        placeholder="Apartment, suite, etc. (optional)"
      />
      <input
        type="text"
        required
        placeholder="Postal code"
        className="input-field1"
      />
      <input type="text" required placeholder="City" className="input-field1" />
      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">Contact details</span>
        <input
          type="email"
          required
          placeholder="Email"
          className="input-field1"
        />
        <input
          type="text"
          required
          placeholder="Phone"
          className="input-field1"
        />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <label>Save this information for next time</label>
      </div>
      <Link href="/checkout/payment">
        <button className="btn1 w-full" type="submit">
          Save
        </button>
      </Link>
    </form>
  );
}
