"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong");
      }
    } catch {
      setStatus("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-white text-2xl font-bold">
        Send a message
      </h3>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message..."
        rows={5}
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <Button
        variant="primary"
        className="w-full"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send message"}
      </Button>

      {status && (
        <p className="text-white text-sm">{status}</p>
      )}
    </div>
  );
}