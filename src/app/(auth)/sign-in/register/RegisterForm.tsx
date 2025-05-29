"use client";

import { RegisterInputs } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../../../../../prisma/createUser";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    registerUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-6 border"
    >
      <h1 className="heading">Register</h1>
      <section className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          placeholder="example@email.com"
          type="email"
          className="input-field1"
          {...register("email", {
            required: true,
          })}
        />
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          placeholder="John"
          className="input-field1"
          {...register("firstName", {
            required: true,
          })}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          placeholder="Doe"
          className="input-field1"
          {...register("lastName", {
            required: true,
          })}
        />
      </section>

      <span className="text-sm">
        When you create an account, you agree to our Terms of use.
      </span>
      <button type="submit" className="btn1">
        Register
      </button>
    </form>
  );
}
