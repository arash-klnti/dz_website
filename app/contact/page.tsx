"use client";
import { useState } from "react";
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ✅ capture the form element BEFORE any await
    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    try {
      setLoading(true);
      const res = await fetch("/api/contact", { method: "POST", body: form });
      const data = await res.json().catch(() => ({ ok: false }));
      setStatus(data.ok ? "Thanks! We'll be in touch." : "Something went wrong.");
      formEl.reset(); // ✅ safe now
    } catch (err) {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section">
      <div className="container grid gap-6 max-w-2xl">
        <h1 className="h1">Contact</h1>
        <form onSubmit={onSubmit} className="card grid gap-4" data-gramm="false">
          {/* Honeypot anti-bot (optional) */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <input name="name" placeholder="Name" className="border p-3 rounded-xl" required />
          <input type="email" name="email" placeholder="Email" className="border p-3 rounded-xl" required />
          <input name="org" placeholder="Organization" className="border p-3 rounded-xl" />
          <select name="interest" className="border p-3 rounded-xl">
            <option value="demo">Request a demo</option>
            <option value="pilot">Join EMS pilot</option>
            <option value="partnership">Partnership</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message" placeholder="How can we help?" className="border p-3 rounded-xl min-h-[120px]" required />
          <button className="btn w-fit" disabled={loading} aria-busy={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {status && <p className="text-slate-600">{status}</p>}
          <p className="text-xs text-slate-500">Please don’t include PHI or sensitive patient info.</p>
        </form>
      </div>
    </div>
  );
}
