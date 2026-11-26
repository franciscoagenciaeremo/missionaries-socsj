"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeBlock({
  title,
  text,
  placeholder,
  buttonLabel,
  successMessage,
  errorMessage,
  locale,
  houseSlug,
}: {
  title: string;
  text: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
  locale: string;
  houseSlug: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT;

    if (!endpoint) {
      console.warn(
        "NEXT_PUBLIC_SUBSCRIBE_ENDPOINT no está configurada — ver README.md"
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, idioma: locale, casa: houseSlug }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="subscribe-block"
      className="scroll-mt-20 bg-ssj-blue px-6 py-20 text-ssj-white"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-md text-sm text-ssj-white/80 sm:text-base">
          {text}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor="subscribe-email" className="sr-only">
            {placeholder}
          </label>
          <Input
            id="subscribe-email"
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-ssj-white text-ssj-black"
          />
          <Button
            type="submit"
            variant="gold"
            disabled={status === "loading"}
            className="shrink-0"
          >
            {status === "loading" ? "…" : buttonLabel}
          </Button>
        </form>
        <div aria-live="polite" className="min-h-[1.25rem] text-sm">
          {status === "success" && (
            <span className="text-ssj-blue-light">{successMessage}</span>
          )}
          {status === "error" && (
            <span className="text-red-300">{errorMessage}</span>
          )}
        </div>
      </div>
    </section>
  );
}
