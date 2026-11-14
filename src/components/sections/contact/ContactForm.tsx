import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, MessageSquare, Send } from "lucide-react";

const statusText = {
  idle: "Send Message",
  sending: "Sending...",
  sent: "Message Sent!",
  error: "Failed to Send!",
};

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current || status === "sending") return;

    setStatus("sending");

    emailjs
      .sendForm("service_hwv3jwp", "template_st92e0s", form.current, {
        publicKey: "8DuZ1q8MdbS-oL5yr",
      })
      .then(
        () => {
          setStatus("sent");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-cardClass border border-borderClass rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="relative">
          <User size={18} className="text-subtextClass absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            name="name"
            required
            aria-label="Your Name"
            placeholder="Your Name"
            className="w-full bg-bgClass border border-borderClass rounded-xl pl-10 pr-4 py-3 text-sm text-textClass placeholder:text-subtextClass focus:outline-none focus:border-primaryClass transition-colors"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail size={18} className="text-subtextClass absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            name="email"
            required
            aria-label="Your Email"
            placeholder="Your Email"
            className="w-full bg-bgClass border border-borderClass rounded-xl pl-10 pr-4 py-3 text-sm text-textClass placeholder:text-subtextClass focus:outline-none focus:border-primaryClass transition-colors"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="relative">
        <MessageSquare size={18} className="text-subtextClass absolute left-3.5 top-3.5 pointer-events-none" />
        <textarea
          name="message"
          required
          rows={4}
          aria-label="Your Message"
          placeholder="Your Message..."
          className="w-full bg-bgClass border border-borderClass rounded-xl pl-10 pr-4 py-3 text-sm text-textClass placeholder:text-subtextClass focus:outline-none focus:border-primaryClass transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`px-6 py-2.5 rounded-xl font-bold text-sm text-black active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-full md:w-fit mt-2 ${
          status === "sent"
            ? "bg-emerald-500"
            : status === "error"
            ? "bg-red-500 text-white"
            : "bg-primaryClass hover:bg-hoverClass"
        } ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        <span>{statusText[status]}</span>
        {status === "idle" && <Send size={16} />}
      </button>
    </form>
  );
}

export default ContactForm;
