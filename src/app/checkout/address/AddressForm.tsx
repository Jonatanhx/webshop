"use client";

import { AddressInputs } from "@/types";
import { getCookieByName } from "@/utils/helperFunctions";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AddressSubmitButton from "./AddressSubmitButton";

export default function AddressForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddressInputs>();

  useEffect(() => {
    console.log(getCookieByName("addressForm"));
  }, []);

  const onSubmit: SubmitHandler<AddressInputs> = (data) => {
    const jsonData = JSON.stringify(data);
    document.cookie = `addressForm=${jsonData};`;
    console.log(data);
    return data;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-4 w-full"
    >
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
          className="input-field1"
          placeholder="First name"
          {...register("firstName", { required: true })}
        />
        <input
          type="text"
          className="input-field1"
          placeholder="Last name"
          {...register("lastName", { required: true })}
        />
      </div>
      <input
        type="text"
        className="input-field1"
        placeholder="Street & house number"
        {...register("address1", { required: true })}
      />
      <input
        type="text"
        className="input-field1"
        placeholder="Apartment, suite, etc. (optional)"
        {...register("address2", { required: false })}
      />
      <input
        type="text"
        className="input-field1"
        placeholder="Postal code"
        {...register("postalCode", { required: true })}
      />
      <input
        type="text"
        className="input-field1"
        placeholder="City"
        {...register("city", { required: true })}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Contact details</h2>
        <input
          type="email"
          className="input-field1"
          placeholder="Email"
          {...register("contactDetails.email", { required: true })}
        />
        <input
          type="text"
          className="input-field1"
          placeholder="Phone"
          {...register("contactDetails.phoneNumber", { required: true })}
        />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <label>Save this information for next time</label>
      </div>
      <AddressSubmitButton />
    </form>
  );
}
