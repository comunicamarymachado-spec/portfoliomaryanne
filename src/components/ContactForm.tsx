"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-ocean)] px-4 py-3 text-sm text-ink placeholder:text-[var(--color-ink-faint)] transition-colors focus:border-[var(--color-tide-light)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Falha de conexão. Tente novamente em instantes.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-4 text-left"
      noValidate
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-ink-secondary)]">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-ink-secondary)]">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-ink-secondary)]">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-fit rounded-full bg-copper px-6 py-3 text-sm font-medium text-ocean transition-colors hover:bg-[#d99669] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
        {status === "success" && (
          <p className="text-[var(--color-tide-light)]">
            Mensagem enviada! Retorno em breve.
          </p>
        )}
        {status === "error" && (
          <p className="text-copper">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
