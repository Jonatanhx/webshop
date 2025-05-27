"use client";

import { AddressInputs, ContactDetails } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddressForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string | undefined>(undefined);
  const [postalCode, setPostalCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: "",
    phoneNumber: "",
  });
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm<AddressInputs>();

  useEffect(() => {
    const previousInputs = sessionStorage.getItem("addressFormData");
    if (previousInputs) {
      const parsedInputs: AddressInputs = JSON.parse(previousInputs);
      setFirstName(parsedInputs.firstName);
      setLastName(parsedInputs.lastName);
      setAddress1(parsedInputs.address1);
      setAddress2(parsedInputs.address2);
      setPostalCode(parsedInputs.postalCode);
      setCity(parsedInputs.city);
      setContactDetails(parsedInputs.contactDetails);
      setCountry(parsedInputs.country);

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
    console.log(data);
    router.push("/checkout/payment");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-4 w-full"
    >
      <div className="flex items-center justify-center input-field2 relative min-h-[2.4rem] p-4">
        <select
          value={country}
          {...register("country", {
            required: true,
            onChange: (e) => {
              setCountry(e.target.value);
            },
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
      <div className="flex gap-2">
        <input
          value={firstName}
          type="text"
          className="input-field1"
          placeholder="First name"
          {...register("firstName", {
            required: true,
            onChange: (e) => {
              setFirstName(e.target.value);
            },
          })}
        />
        <input
          value={lastName}
          type="text"
          className="input-field1"
          placeholder="Last name"
          {...register("lastName", {
            required: true,
            onChange: (e) => {
              setLastName(e.target.value);
            },
          })}
        />
      </div>
      <input
        value={address1}
        type="text"
        className="input-field1"
        placeholder="Street & house number"
        {...register("address1", {
          required: true,
          onChange: (e) => {
            setAddress1(e.target.value);
          },
        })}
      />
      <input
        value={address2}
        type="text"
        className="input-field1"
        placeholder="Apartment, suite, etc. (optional)"
        {...register("address2", {
          required: false,
          onChange: (e) => {
            setAddress2(e.target.value);
          },
        })}
      />
      <input
        value={postalCode}
        type="text"
        className="input-field1"
        placeholder="Postal code"
        {...register("postalCode", {
          required: true,
          onChange: (e) => {
            setPostalCode(e.target.value);
          },
        })}
      />
      <input
        value={city}
        type="text"
        className="input-field1"
        placeholder="City"
        {...register("city", {
          required: true,
          onChange: (e) => {
            setCity(e.target.value);
          },
        })}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Contact details</h2>
        <input
          value={contactDetails.email}
          type="email"
          className="input-field1"
          placeholder="Email"
          {...register("contactDetails.email", {
            required: true,
            onChange: (e) => {
              setContactDetails((contactDetails) => ({
                ...contactDetails,
                email: e.target.value,
              }));
            },
          })}
        />
        <input
          value={contactDetails.phoneNumber}
          type="text"
          className="input-field1"
          placeholder="Phone"
          {...register("contactDetails.phoneNumber", {
            required: true,
            onChange: (e) => {
              setContactDetails((contactDetails) => ({
                ...contactDetails,
                phoneNumber: e.target.value,
              }));
            },
          })}
        />
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
