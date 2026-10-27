"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.phone || !formData.requirement) {
      setStatus("error");
      setErrorMessage(
        isTe
          ? "దయచేసి మీ పేరు, ఫోన్ నంబర్ మరియు ప్రాజెక్ట్ అవసరాన్ని నమోదు చేయండి."
          : "Please fill in your name, phone number, and project requirement."
      );
      return;
    }

    setStatus("loading");

    try {
      const combinedRequirement = formData.company
        ? `[Company/Unit: ${formData.company}] ${formData.requirement}`
        : formData.requirement;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requirement: combinedRequirement,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          requirement: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        isTe
          ? "సమర్పణ విఫలమైంది. దయచేసి మాకు నేరుగా కాల్ చేయండి."
          : "Failed to submit request. Please call us directly."
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto" suppressHydrationWarning>
      {status === "success" && (
        <div className="mb-8 p-4 bg-emerald-50/80 border border-emerald-200/90 rounded-xl flex items-start gap-3 text-emerald-800 text-sm animate-fade-in shadow-xs">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
          <div>
            <p className="font-bold mb-0.5">
              {isTe ? "విజయవంతంగా సమర్పించబడింది!" : "Thank You!"}
            </p>
            <p className="text-xs text-emerald-700">
              {isTe
                ? "మీ అవసరాల వివరాలు అందాయి. త్వరలోనే మా నిపుణుల బృందం మిమ్మల్ని సంప్రదిస్తుంది."
                : "Your message has been received. Our industrial advisory team will be in touch shortly."}
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-8 p-4 bg-rose-50/80 border border-rose-200/90 rounded-xl flex items-start gap-3 text-rose-800 text-sm animate-fade-in shadow-xs">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" />
          <div>
            <p className="font-bold mb-0.5">{isTe ? "లోపం" : "Submission Note"}</p>
            <p className="text-xs text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7" suppressHydrationWarning>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Field 1: Your Name* */}
        <div className="space-y-1 text-left">
          <label className="block text-[12px] sm:text-[13px] font-semibold text-[#0F281E]">
            {isTe ? "మీ పేరు*" : "Your Name*"}
          </label>
          <input
            type="text"
            name="name"
            required
            suppressHydrationWarning
            value={formData.name}
            onChange={handleChange}
            placeholder={isTe ? "మీ పూర్తి పేరు నమోదు చేయండి" : "Who's reaching out?"}
            className="w-full bg-transparent border-0 border-b border-[#0F281E]/20 focus:border-[#FF5500] focus:ring-0 outline-none text-[#0F281E] text-sm py-2 px-0 placeholder-[#6A7870]/70 transition-colors"
          />
        </div>

        {/* Field 2: Email* */}
        <div className="space-y-1 text-left">
          <label className="block text-[12px] sm:text-[13px] font-semibold text-[#0F281E]">
            {isTe ? "ఈమెయిల్*" : "Email*"}
          </label>
          <input
            type="email"
            name="email"
            suppressHydrationWarning
            value={formData.email}
            onChange={handleChange}
            placeholder={isTe ? "మీ ఈమెయిల్ చిరునామా" : "Where can we reach you?"}
            className="w-full bg-transparent border-0 border-b border-[#0F281E]/20 focus:border-[#FF5500] focus:ring-0 outline-none text-[#0F281E] text-sm py-2 px-0 placeholder-[#6A7870]/70 transition-colors"
          />
        </div>

        {/* Field 3: Phone Number* */}
        <div className="space-y-1 text-left">
          <label className="block text-[12px] sm:text-[13px] font-semibold text-[#0F281E]">
            {isTe ? "ఫోన్ నంబర్*" : "Phone Number*"}
          </label>
          <input
            type="tel"
            name="phone"
            required
            suppressHydrationWarning
            value={formData.phone}
            onChange={handleChange}
            placeholder={isTe ? "మీ మొబైల్ నంబర్" : "Best number to call you on?"}
            className="w-full bg-transparent border-0 border-b border-[#0F281E]/20 focus:border-[#FF5500] focus:ring-0 outline-none text-[#0F281E] text-sm py-2 px-0 placeholder-[#6A7870]/70 transition-colors"
          />
        </div>

        {/* Field 4: Company / Industrial Unit */}
        <div className="space-y-1 text-left">
          <label className="block text-[12px] sm:text-[13px] font-semibold text-[#0F281E]">
            {isTe ? "సంస్థ / పారిశ్రామిక విభాగం" : "Company / Industrial Unit"}
          </label>
          <input
            type="text"
            name="company"
            suppressHydrationWarning
            value={formData.company}
            onChange={handleChange}
            placeholder={isTe ? "మీ వ్యాపారం లేదా పరిశ్రమ పేరు?" : "Your business or industrial organization?"}
            className="w-full bg-transparent border-0 border-b border-[#0F281E]/20 focus:border-[#FF5500] focus:ring-0 outline-none text-[#0F281E] text-sm py-2 px-0 placeholder-[#6A7870]/70 transition-colors"
          />
        </div>

        {/* Field 5: Tell Us More */}
        <div className="space-y-1 text-left">
          <label className="block text-[12px] sm:text-[13px] font-semibold text-[#0F281E]">
            {isTe ? "మరిన్ని వివరాలు" : "Tell Us More"}
          </label>
          <textarea
            name="requirement"
            rows={2}
            required
            suppressHydrationWarning
            value={formData.requirement}
            onChange={handleChange}
            placeholder={
              isTe
                ? "మీ ప్రాజెక్ట్, మెషినరీ లేదా ప్లాంట్ అవసరాలు ఏమిటి?"
                : "What project, machinery, or plant requirements would you like to discuss?"
            }
            className="w-full bg-transparent border-0 border-b border-[#0F281E]/20 focus:border-[#FF5500] focus:ring-0 outline-none text-[#0F281E] text-sm py-2 px-0 placeholder-[#6A7870]/70 resize-none transition-colors"
          />
        </div>

        {/* Centered Pill Button */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <button
            type="submit"
            suppressHydrationWarning
            disabled={status === "loading"}
            className="px-10 py-3.5 bg-[#0F281E] hover:bg-[#FF5500] text-white text-xs sm:text-[13px] font-medium tracking-wide rounded-full shadow-md hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{isTe ? "సమర్పిస్తోంది..." : "Sending..."}</span>
              </>
            ) : (
              <span>{isTe ? "సందేశం పంపండి" : "Send Message"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
