"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema: any = z.object({
  email: z.coerce
    .string()
    .email("Email is not valid")
    .min(10, "Min length should be 10"),
  password: z.string().min(10),
});

export default function Page() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          className="border"
          {...register("email")}
          type="text"
        />
        <p>{formState?.errors?.email?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
