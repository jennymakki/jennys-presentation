import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <div className="space-y-5">
      <h3 className="text-white text-2xl font-bold">
        Send a message
      </h3>

      <input
        placeholder="Your name"
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <input
        placeholder="Your email"
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <textarea
        placeholder="Your message..."
        rows={5}
        className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
      />

      <Button variant="primary" className="w-full">
        Send message
      </Button>
    </div>
  );
}