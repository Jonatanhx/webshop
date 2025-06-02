"use client";

import { AddressInputs } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddressForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddressInputs>();

  useEffect(() => {
    const previousInputs = sessionStorage.getItem("addressFormData");
    if (previousInputs) {
      const parsedInputs: AddressInputs = JSON.parse(previousInputs);

      setValue("firstName", parsedInputs.firstName);
      setValue("lastName", parsedInputs.lastName);
      setValue("address1", parsedInputs.address1);
      setValue("address2", parsedInputs.address2);
      setValue("postalCode", parsedInputs.postalCode);
      setValue("city", parsedInputs.city);
      setValue("country", parsedInputs.country);
      setValue("contactDetails.email", parsedInputs.contactDetails.email);
      setValue(
        "contactDetails.phoneNumber",
        parsedInputs.contactDetails.phoneNumber
      );
    }
  }, []);

  const onSubmit: SubmitHandler<AddressInputs> = (data) => {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem("addressFormData", jsonData);
    router.push("/checkout/payment");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-4 w-[80vw] md:w-full"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center input-field2 relative h-[3rem] p-4">
          <select
            {...register("country", {
              required: true,
            })}
            className="absolute w-[98%] h-[100%] px-2"
          >
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

        {errors.country && (
          <span className="text-red-500">Select a country</span>
        )}
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <input
            type="text"
            className={`${
              errors.firstName ? "input-field1-error" : "input-field1 "
            }`}
            placeholder="First name"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && (
            <span className="text-red-500">Enter a first name</span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <input
            type="text"
            className={`${
              errors.lastName ? "input-field1-error" : "input-field1 "
            }`}
            placeholder="Last name"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName && (
            <span className="text-red-500">Enter a last name</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className={`${
            errors.address1 ? "input-field1-error" : "input-field1 "
          }`}
          placeholder="Street & house number"
          {...register("address1", {
            required: true,
          })}
        />
        {errors.address1 && (
          <span className="text-red-500">Enter a address</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="input-field1"
          placeholder="Apartment, suite, etc. (optional)"
          {...register("address2", {
            required: false,
          })}
        />
        <input
          type="text"
          className={`${
            errors.postalCode ? "input-field1-error" : "input-field1 "
          }`}
          placeholder="Postal code"
          {...register("postalCode", {
            required: true,
          })}
        />
        {errors.postalCode && (
          <span className="text-red-500">Enter a ZIP / postal code</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className={`${errors.city ? "input-field1-error" : "input-field1 "}`}
          placeholder="City"
          {...register("city", {
            required: true,
          })}
        />
        {errors.city && <span className="text-red-500">Enter a city</span>}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Contact details</h2>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            className={`${
              errors.contactDetails?.email
                ? "input-field1-error"
                : "input-field1 "
            }`}
            placeholder="Email"
            {...register("contactDetails.email", {
              required: true,
            })}
          />
          {errors.contactDetails?.email && (
            <span className="text-red-500">Enter a email</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className={`${
              errors.contactDetails?.phoneNumber
                ? "input-field1-error"
                : "input-field1 "
            }`}
            placeholder="Phone"
            {...register("contactDetails.phoneNumber", {
              required: true,
            })}
          />
          {errors.contactDetails?.phoneNumber && (
            <span className="text-red-500">Enter a phone number</span>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <label>Save this information for next time</label>
      </div>
      <button className="btn1 w-full" type="submit">
        Save
      </button>
    </form>
  );
}
