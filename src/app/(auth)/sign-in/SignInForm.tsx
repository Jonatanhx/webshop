"use client";
import { signInCredentialsUser } from "@/utils/serverFunctions";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

export default function SignInForm() {
  const { register, handleSubmit } = useForm<{ email: string }>();
  const router = useRouter();

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    const user = await signInCredentialsUser(data);
    if (user) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 min-w-[30%]"
    >
      <input
        className="input-field1"
        placeholder="Email address"
        {...register("email", {
          required: true,
        })}
        type="email"
      />
      <div className="flex flex-col gap-3">
        <button className="btn1" type="submit">
          Continue
        </button>
        <span className="hover:underline underline-offset-6 hover:cursor-pointer text-sm self-start">
          Forgotten your password?
        </span>
      </div>
    </form>
  );
}
