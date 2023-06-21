import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { getError } from "@/utils/error";;
import {toast} from 'react-toastify';
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";


function LoginScreen() {

    const {data: session} = useSession();

    const router = useRouter();
    const {redirect} = router.query;

    useEffect (() => {
if (session?. user) {
    router.push(redirect || '/');
}
    }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if(result.error) {
       toast.error(result.error);
      }
    } catch (err) {
        toast.error(getError(err));
    }
  };

  return (
    <div>
      <Layout title="Login">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="mb-4 text-xl">Login</h1>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full"
              autoFocus
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full"
              autoFocus
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "Password is more than 5 characters",
                },
              })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button className="primary-button">Login</button>
          </div>
          <div className="mb-4">
            Don&apos;t have an accoun? &nbsp;{" "}
            <Link href="/register">Register</Link>
          </div>
        </form>
      </Layout>
    </div>
  );
}

export default LoginScreen;
