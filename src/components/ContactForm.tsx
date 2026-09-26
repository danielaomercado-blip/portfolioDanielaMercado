"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { CONTACTO_COPY } from "@/lib/site-copy";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error ?? "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("No se pudo conectar con el servidor.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="card"
        >
          <div className="card-title">¡Gracias por escribir!</div>
          <p className="card-body">Te voy a responder a la brevedad.</p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" required className="input" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" required className="input" rows={5} />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="text-sm"
            style={{ color: "#e07a7a" }}
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <button type="submit" className="btn btn-primary self-start" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : CONTACTO_COPY.submitLabel}
      </button>
    </form>
  );
}
