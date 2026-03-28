"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Send, Wrench } from "lucide-react";
import { company } from "@/data/company";

/* ── Types ──────────────────────────────────────────────────── */

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface BotMsg {
  id: string;
  role: "bot";
  text: string;
  options?: Option[];
}
interface UserMsg {
  id: string;
  role: "user";
  text: string;
}
type Msg = BotMsg | UserMsg;

interface Option {
  label: string;
  value: string;
}

interface SessionState {
  step: Step;
  service?: string;
  urgency?: string;
  property?: string;
  description?: string;
  name?: string;
  phone?: string;
  email?: string;
  messages: Msg[];
}

const STORAGE_KEY = "khs-lead-collector";

/* ── Helpers ─────────────────────────────────────────────────── */

let _msgId = 0;
const uid = () => `m-${Date.now()}-${++_msgId}`;

function loadSession(): SessionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(state: SessionState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

/* ── Component ───────────────────────────────────────────────── */

export default function LeadCollector() {
  const prefersReduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [formStep, setFormStep] = useState<"description" | "contact" | null>(null);

  // Contact form fields
  const [descVal, setDescVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const sessionRef = useRef<SessionState>({
    step: 1,
    messages: [],
  });
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Show "Need help?" badge on first load
  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 1000);
    const hideTimer = setTimeout(() => setShowBadge(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Click outside to close on desktop
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        window.innerWidth >= 640
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Scroll to bottom
  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    });
  }, [prefersReduced]);

  // Persist & sync
  const sync = useCallback((partial: Partial<SessionState>) => {
    Object.assign(sessionRef.current, partial);
    if (partial.messages) setMessages([...partial.messages]);
    saveSession(sessionRef.current);
  }, []);

  // Add bot message with typing delay
  const addBotMsg = useCallback(
    (msg: Omit<BotMsg, "id" | "role">, delay = 400) => {
      setTyping(true);
      typingTimer.current = setTimeout(() => {
        setTyping(false);
        const full: BotMsg = { ...msg, id: uid(), role: "bot" };
        const updated = [...sessionRef.current.messages, full];
        sync({ messages: updated });
      }, prefersReduced ? 50 : delay);
    },
    [sync, prefersReduced]
  );

  // Add user message
  const addUserMsg = useCallback(
    (text: string) => {
      const msg: UserMsg = { id: uid(), role: "user", text };
      const updated = [...sessionRef.current.messages, msg];
      sync({ messages: updated });
    },
    [sync]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  // Auto-scroll on message change
  useEffect(() => {
    scrollBottom();
  }, [messages, typing, scrollBottom]);

  // Init on first open
  const initRef = useRef(false);
  useEffect(() => {
    if (!open || initRef.current) return;
    initRef.current = true;

    const saved = loadSession();
    if (saved && saved.messages.length > 0) {
      sessionRef.current = saved;
      requestAnimationFrame(() => setMessages([...saved.messages]));
      // Restore form state based on step
      if (saved.step === 4) setFormStep("description");
      if (saved.step === 5) setFormStep("contact");
      return;
    }

    requestAnimationFrame(() => {
      addBotMsg(
        {
          text: "Hey! What can we help you with today?",
          options: [
            { label: "General Repairs", value: "General Repairs" },
            { label: "Plumbing", value: "Plumbing" },
            { label: "Ceiling Fan & Lighting", value: "Ceiling Fan & Lighting" },
            { label: "Insulation", value: "Insulation" },
            { label: "Bathroom Remodel", value: "Bathroom Remodel" },
            { label: "Home Improvements", value: "Home Improvements" },
            { label: "Something Else", value: "Something Else" },
          ],
        },
        500
      );
    });
  }, [open, addBotMsg]);

  /* ── Step handlers ──────────────────────────────────────────── */

  const handleStep1 = useCallback(
    (value: string) => {
      addUserMsg(value);
      sync({ step: 2, service: value });
      addBotMsg({
        text: "Got it! How soon do you need this done?",
        options: [
          { label: "ASAP", value: "ASAP" },
          { label: "This week", value: "This week" },
          { label: "This month", value: "This month" },
          { label: "Just getting quotes", value: "Just getting quotes" },
        ],
      });
    },
    [addBotMsg, addUserMsg, sync]
  );

  const handleStep2 = useCallback(
    (value: string) => {
      addUserMsg(value);
      sync({ step: 3, urgency: value });
      addBotMsg({
        text: "What type of property?",
        options: [
          { label: "House", value: "House" },
          { label: "Apartment / Condo", value: "Apartment / Condo" },
          { label: "Commercial", value: "Commercial" },
          { label: "Other", value: "Other" },
        ],
      });
    },
    [addBotMsg, addUserMsg, sync]
  );

  const handleStep3 = useCallback(
    (value: string) => {
      addUserMsg(value);
      sync({ step: 4, property: value });
      addBotMsg({
        text: "Tell us a bit more about what you need done.",
      });
      setFormStep("description");
    },
    [addBotMsg, addUserMsg, sync]
  );

  const handleDescriptionSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const val = descVal.trim();
      if (!val) return;
      setDescVal("");
      setFormStep(null);
      addUserMsg(val);
      sync({ step: 5, description: val });

      addBotMsg({
        text: "Last step \u2014 how can we reach you?",
      });
      setTimeout(() => setFormStep("contact"), prefersReduced ? 100 : 500);
    },
    [descVal, addBotMsg, addUserMsg, sync, prefersReduced]
  );

  const handleContactSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const name = nameVal.trim();
      const phone = phoneVal.trim();
      if (!name || !phone) return;

      const email = emailVal.trim();
      setFormStep(null);
      addUserMsg(`${name} \u2022 ${phone}${email ? ` \u2022 ${email}` : ""}`);
      sync({ step: 6, name, phone, email: email || undefined });

      const s = sessionRef.current;

      // POST to formAction
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      if (email) formData.append("email", email);
      formData.append("service", s.service ?? "");
      formData.append("urgency", s.urgency ?? "");
      formData.append("property", s.property ?? "");
      formData.append("description", s.description ?? "");
      formData.append(
        "message",
        `Lead Collector \u2014 Service: ${s.service}, Urgency: ${s.urgency}, Property: ${s.property}, Details: ${s.description}`
      );

      fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }).catch(() => {});

      addBotMsg({
        text: `We got it! Someone from our team will reach out within 24 hours. If it\u2019s urgent, call us at ${company.phone}.`,
      });

      // Reset fields
      setNameVal("");
      setPhoneVal("");
      setEmailVal("");
    },
    [nameVal, phoneVal, emailVal, addBotMsg, addUserMsg, sync]
  );

  /* ── Option click router ────────────────────────────────────── */

  const handleOption = useCallback(
    (value: string) => {
      const s = sessionRef.current;
      if (s.step === 1) return handleStep1(value);
      if (s.step === 2) return handleStep2(value);
      if (s.step === 3) return handleStep3(value);
    },
    [handleStep1, handleStep2, handleStep3]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleReset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    sessionRef.current = { step: 1, messages: [] };
    setMessages([]);
    setFormStep(null);
    setDescVal("");
    setNameVal("");
    setPhoneVal("");
    setEmailVal("");
    initRef.current = false;
    setTimeout(() => {
      initRef.current = false;
      setOpen(true);
      addBotMsg({
        text: "Hey! What can we help you with today?",
        options: [
          { label: "General Repairs", value: "General Repairs" },
          { label: "Plumbing", value: "Plumbing" },
          { label: "Ceiling Fan & Lighting", value: "Ceiling Fan & Lighting" },
          { label: "Insulation", value: "Insulation" },
          { label: "Bathroom Remodel", value: "Bathroom Remodel" },
          { label: "Home Improvements", value: "Home Improvements" },
          { label: "Something Else", value: "Something Else" },
        ],
      });
    }, 100);
  }, [addBotMsg]);

  /* ── Animation config ───────────────────────────────────────── */

  const dur = prefersReduced ? 0 : 0.3;

  /* ── Render ─────────────────────────────────────────────────── */

  return (
    <>
      {/* Floating bubble */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            onClick={() => setOpen(true)}
            className="fixed bottom-22 right-6 lg:bottom-6 lg:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 shadow-lg shadow-teal-500/30 hover:bg-teal-600 transition-colors cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              boxShadow: [
                "0 4px 20px rgba(20,184,166,0.3), 0 0 0 0px rgba(20,184,166,0.15)",
                "0 6px 28px rgba(20,184,166,0.4), 0 0 0 8px rgba(20,184,166,0.04)",
                "0 4px 20px rgba(20,184,166,0.3), 0 0 0 0px rgba(20,184,166,0.15)",
              ],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: dur, type: "spring", stiffness: 300, damping: 20 },
              opacity: { duration: dur },
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open lead collector chat"
          >
            <Wrench className="h-6 w-6 text-white" />

            {/* "Need help?" badge */}
            <AnimatePresence>
              {showBadge && (
                <motion.span
                  initial={{ opacity: 0, x: 8, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -top-2 -left-20 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-md border border-slate-200"
                >
                  Need help?
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            ref={panelRef}
            className="fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl
              bottom-0 right-0 left-0 h-[75dvh] max-h-[560px] rounded-t-2xl
              sm:left-auto sm:bottom-24 sm:right-6 sm:h-[540px] sm:w-[380px] sm:rounded-2xl"
            style={{
              boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(20,184,166,0.08)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: dur }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between px-5 py-3.5 bg-teal-500">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Wrench className="h-5 w-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-300 border-2 border-teal-500" />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-white">
                    {company.shortName}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/70">
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
                aria-label="Minimize chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 bg-slate-50"
            >
              <div className="flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: dur * 0.8 }}
                      className={
                        msg.role === "user"
                          ? "flex justify-end"
                          : "flex justify-start"
                      }
                    >
                      {msg.role === "user" ? (
                        <div className="max-w-[80%] rounded-2xl rounded-br-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm">
                          {msg.text}
                        </div>
                      ) : (
                        <div className="flex max-w-[90%] flex-col gap-2.5">
                          <div className="rounded-2xl rounded-bl-md bg-teal-500 px-4 py-2.5 text-sm leading-relaxed text-white shadow-sm">
                            {msg.text}
                          </div>

                          {/* Option buttons */}
                          {msg.options && msg.options.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {msg.options.map((opt) => (
                                <button
                                  key={opt.value}
                                  onClick={() => handleOption(opt.value)}
                                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 active:scale-[0.97] cursor-pointer shadow-sm"
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                  {typing && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-teal-500 px-4 py-3 shadow-sm">
                        <span className="lead-typing-dot" style={{ animationDelay: "0ms" }} />
                        <span className="lead-typing-dot" style={{ animationDelay: "150ms" }} />
                        <span className="lead-typing-dot" style={{ animationDelay: "300ms" }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Description input (Step 4) */}
            {formStep === "description" && (
              <motion.form
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleDescriptionSubmit}
                className="flex shrink-0 items-center gap-2 border-t border-slate-200 bg-white px-4 py-3"
              >
                <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition-colors focus-within:border-teal-400">
                  <input
                    type="text"
                    value={descVal}
                    onChange={(e) => setDescVal(e.target.value)}
                    placeholder="Describe the job..."
                    className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white transition-all hover:bg-teal-600 active:scale-95 cursor-pointer"
                    aria-label="Send description"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </motion.form>
            )}

            {/* Contact form (Step 5) */}
            {formStep === "contact" && (
              <motion.form
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleContactSubmit}
                className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 space-y-2.5"
              >
                <input
                  type="text"
                  value={nameVal}
                  onChange={(e) => setNameVal(e.target.value)}
                  placeholder="Your name *"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-teal-400"
                  autoFocus
                />
                <input
                  type="tel"
                  value={phoneVal}
                  onChange={(e) => setPhoneVal(e.target.value)}
                  placeholder="Phone number *"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-teal-400"
                />
                <input
                  type="email"
                  value={emailVal}
                  onChange={(e) => setEmailVal(e.target.value)}
                  placeholder="Email (optional)"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-teal-400"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-teal-500 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-600 active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  SEND REQUEST
                </button>
              </motion.form>
            )}

            {/* Post-submit actions */}
            {sessionRef.current.step === 6 && !formStep && (
              <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 flex gap-2">
                <button
                  onClick={handleClose}
                  className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 rounded-lg border border-teal-200 py-2.5 text-sm font-medium text-teal-600 transition-all hover:bg-teal-50 cursor-pointer"
                >
                  Start Over
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Typing dot animation styles */}
      <style jsx global>{`
        @keyframes lead-typing-bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
        .lead-typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          animation: lead-typing-bounce 1.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
