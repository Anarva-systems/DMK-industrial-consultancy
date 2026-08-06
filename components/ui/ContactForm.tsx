"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const formT = t.contactSection.form;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    honeypot: "", // Anti-spam hidden field
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
      setErrorMessage("Please fill in your name, phone number, and project requirement.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-[#FF5500]": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || formT.errorMsg);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(formT.errorMsg);
    }
  };

  return (
    <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xl relative overflow-hidden" suppressHydrationWarning>
      {/* Top Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#FFF0E8] flex items-center justify-center text-[#FF5500] flex-shrink-0">
          <Send className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-black text-black tracking-tight" suppressHydrationWarning>
            {formT.title}
          </h3>
          <p className="text-xs text-gray-500 font-normal">We will get back to you shortly.</p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-700 text-sm animate-fade-in" suppressHydrationWarning>
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
          <div>
            <p className="font-bold text-emerald-800 mb-1">Submission Successful!</p>
            <p>{formT.successMsg}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-700 text-sm animate-fade-in" suppressHydrationWarning>
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" />
          <div>
            <p className="font-bold text-rose-800 mb-1">Error</p>
            <p>{errorMessage || formT.errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          suppressHydrationWarning
        />

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" suppressHydrationWarning>
            {formT.nameLabel} <span className="text-[#FF5500]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={formT.namePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#FF5500] bg-slate-50/50 placeholder-gray-400 transition-colors"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" suppressHydrationWarning>
            {formT.phoneLabel} <span className="text-[#FF5500]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={formT.phonePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#FF5500] bg-slate-50/50 placeholder-gray-400 transition-colors"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" suppressHydrationWarning>
            {formT.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={formT.emailPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#FF5500] bg-slate-50/50 placeholder-gray-400 transition-colors"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" suppressHydrationWarning>
            {formT.requirementLabel} <span className="text-[#FF5500]">*</span>
          </label>
          <textarea
            name="requirement"
            rows={3}
            required
            value={formData.requirement}
            onChange={handleChange}
            placeholder={formT.requirementPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#FF5500] bg-slate-50/50 placeholder-gray-400 resize-none transition-colors"
            suppressHydrationWarning
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 px-6 bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
          suppressHydrationWarning
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{formT.submitting}</span>
            </>
          ) : (
            <>
              <span>{formT.submitBtn}</span>
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5 font-normal" suppressHydrationWarning>
          <span>🔒</span> <span>{formT.privacyText}</span>
        </p>
      </form>
    </div>
  );
};
