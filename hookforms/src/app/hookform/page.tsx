"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const { register, handleSubmit, formState, watch } = useForm();
  const password = watch("password");
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className=" bg-gray-300 p-24 w-[350px] m-20 rounded-md shadow">
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              minLength: 10,
            })}
            className=" p-2 rounded-md"
            type="email"
            name="email"
            id="email"
          />
          {formState.errors.email && (
            <p className="text-red-500">{formState?.errors?.email?.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <p className="text-red-500"></p>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password should at least be 10 characters",
              },
              validate: (data: string) => {
                const passwordRegex =
                  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=!]).{8,}$/;

                if (!passwordRegex.test(data)) {
                  return "Password should contain at least one number, one special character, one uppercase and one lowercase character";
                }
                console.log(data);
              },
            })}
            className=" p-2 rounded-md"
            type="text"
            name="password"
            id="password"
          />
          {formState?.errors?.password?.message}
        </div>

        <div>
          <label htmlFor="password">Confirm Password</label>
          <p className="text-red-500"></p>

          <input
            {...register("confirmpassword", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password should at least be 10 characters",
              },
              validate: (data: string) => {
                if (data !== password) {
                  return "Password Do not match";
                }
              },
            })}
            className=" p-2 rounded-md"
            type="text"
            name="confirmpassword"
            id="confirmpassword"
          />

          <p className="text-red-500">
            {formState?.errors?.confirmpassword?.message}
          </p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
