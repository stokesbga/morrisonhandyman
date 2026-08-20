"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields, humans don't
    if (data.company) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brass bg-cream p-10 text-center">
        <h3 className="font-display text-3xl font-semibold text-pine">
          Request received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed">
          Thank you for reaching out — Drew will be in touch shortly. Need an
          answer sooner? Call{" "}
          <a
            href="tel:+16035141814"
            className="font-semibold text-brass-deep underline-offset-4 hover:underline"
          >
            (603) 514-1814
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldCls =
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-pine placeholder:text-pine/30 focus:border-brass focus:outline-none focus:ring-0 transition-colors";
  const labelCls = "eyebrow block text-pine/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name <span className="text-brass">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={fieldCls}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <span className="text-brass">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            className={fieldCls}
            placeholder="(603) 555-0100"
          />
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={200}
            autoComplete="email"
            className={fieldCls}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="town" className={labelCls}>
            Town / City
          </label>
          <input
            id="town"
            name="town"
            maxLength={120}
            autoComplete="address-level2"
            className={fieldCls}
            placeholder="e.g. Manchester, NH"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>
          Nature of the project
        </label>
        <select
          id="service"
          name="service"
          className={`${fieldCls} cursor-pointer`}
          defaultValue=""
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          About the project <span className="text-brass">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={4000}
          className={`${fieldCls} resize-y`}
          placeholder="Describe the work — what needs doing, rough timeline, anything else Drew should know."
        />
      </div>

      {/* Honeypot field — hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="border border-red-300 bg-red-50 px-5 py-3.5 text-sm font-semibold text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="eyebrow border border-pine bg-pine px-10 py-4 text-ivory transition hover:border-brass hover:bg-brass disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
