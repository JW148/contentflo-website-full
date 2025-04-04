/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use client";

import { Spinner } from "@/components/ui/spinner";
import { useRef, useEffect } from "react";
import { register } from "@/actions/actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./cta-button";
import { ArrowRight } from "lucide-react";

export function CTAForm() {
  const ref = useRef(null);

  const [state, dispatch] = useActionState(register, {
    isError: null,
    response: null,
  });

  useEffect(() => {
    console.log(state);
    if (state.isError === false)
      toast.success(state.response, {
        icon: "🎉",
        style: {
          borderRadius: "10px",
          marginTop: "60px",
          background: "#333",
          color: "#fff",
        },
      });
    if (state.isError === true)
      toast.error(state.response, {
        style: {
          borderRadius: "10px",
          background: "#333",
          marginTop: "60px",
          color: "#fff",
        },
      });
  }, [state]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form
        className="flex w-full flex-col items-center max-w-96 mx-auto mt-4"
        action={(formData) => {
          dispatch(formData);
          ref.current?.reset();
        }}
        ref={ref}
      >
        <input
          className="flex h-10 w-full rounded-md border border-muted  bg-zinc-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-hidden  disabled:cursor-not-allowed disabled:opacity-50 text-zinc-300"
          type="text"
          name="name"
          placeholder="Your Name"
          pattern="\S(.*\S)?"
          autoComplete="off"
        />
        {/* field below is for spam protection only */}
        <input
          className="hidden"
          type="text"
          id="confirmEmail"
          name="confirmEmail"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="flex h-10 mt-3 w-full rounded-md border border-muted bg-zinc-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-hidden  disabled:cursor-not-allowed disabled:opacity-50 text-zinc-300"
          type="text"
          name="email"
          placeholder="Your Email Address"
        />
        <SubmitBtn />
      </form>
    </>
  );
}

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Spinner className="flex mt-4 w-full" />
      ) : (
        <Button
          className="flex my-4 rounded-md font-medium  w-full text-sm text-zinc-300 bg-[#1B1B1E]  "
          type="submit"
          rightIcon={<ArrowRight size={20} />}
        >
          Join Waitlist
        </Button>
      )}
    </>
  );
}
