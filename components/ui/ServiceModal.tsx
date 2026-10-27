"use client";

import React from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDetails: string;
  onConsult: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  fullDetails,
  onConsult,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-navy-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden">
        {/* Decorative Orange Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/20 rounded-full">
            <span>SERVICE DETAILS</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {title}
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed font-normal">
            {description}
          </p>

          <div className="p-4 bg-navy-850 rounded-xl border border-white/5 space-y-3">
            <h4 className="text-sm font-semibold text-[#FF5500] tracking-wider uppercase">
              Key Service Features & Value Delivered
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {fullDetails}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#FF5500] hover:bg-[#E04B00] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
