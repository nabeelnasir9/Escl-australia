"use client";

import { useState, useRef, useCallback, createContext, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  AlertTriangle,
  ClipboardList,
  Building2,
  FileText,
  PiggyBank,
  ShieldCheck,
  Video,
  Syringe,
  HeartPulse,
  PenLine,
  ChevronRight,
  X,
} from "lucide-react";

import {
  HEALTH_INTRO,
  INJURY_DECLARATION,
  PRIVACY_POLICY_HTML,
  SECTION_A_QUESTIONS,
  SECTION_B_QUESTIONS,
  SECTION_C_ACTIVITIES,
  WHS_MODULE_VIDEOS,
} from "./candidate-form-constants";
import CandidateSignatureField from "./CandidateSignatureField";

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL;

// Context to propagate field-level errors without prop-drilling
const ErrorCtx = createContext<{ errors: Set<string>; clear: (n: string) => void }>({
  errors: new Set(),
  clear: () => {},
});
function useFieldError(name: string) {
  const { errors, clear } = useContext(ErrorCtx);
  return { hasError: errors.has(name), clearError: () => clear(name) };
}

const VISA_STATUSES = [
  "Working Visa",
  "Temporary Resident Visa",
  "Student Visa",
];

/** Collect all file inputs from the form and upload them in parallel. Returns a map of fieldName → storageKey. */
async function uploadFiles(
  form: HTMLFormElement,
  candidateId: string,
  onProgress?: (done: number, total: number) => void
): Promise<Record<string, string>> {
  const fileInputs = Array.from(
    form.querySelectorAll<HTMLInputElement>('input[type="file"]')
  ).filter((input) => input.files && input.files.length > 0);

  let done = 0;
  const total = fileInputs.length;
  onProgress?.(0, total);

  const uploads = fileInputs.map(async (input) => {
    const file = input.files![0];
    const fd = new FormData();
    fd.append("file", file);
    fd.append("fieldName", input.name);
    fd.append("candidateId", candidateId);

    const res = await fetch(`${DASHBOARD_URL}/api/upload`, {
      method: "POST",
      body: fd,
    });
    done++;
    onProgress?.(done, total);
    if (res.ok) {
      const data = await res.json();
      return [input.name, data.document?.storageKey ?? ""] as [string, string];
    }
    return null;
  });

  const results = await Promise.all(uploads);
  return Object.fromEntries(
    results.filter((r): r is [string, string] => r !== null)
  );
}

// ── Step Loader Modal ──────────────────────────────────────────────────────────

type Step = { label: string; status: "pending" | "active" | "done" | "error" };

function StepLoaderModal({
  steps,
  isSuccess,
  error,
  onClose,
}: {
  steps: Step[];
  isSuccess: boolean;
  error: string | null;
  onClose: () => void;
}) {
  const canClose = isSuccess || !!error;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(15,23,42,0.55)",
          backdropFilter: "blur(6px)",
          padding: "24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: "40px 44px",
            maxWidth: 420,
            width: "100%",
            boxShadow:
              "0 32px 80px rgba(15,23,42,0.18), 0 4px 16px rgba(15,23,42,0.08)",
            textAlign: "center",
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            position: "relative",
          }}
        >
          {canClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#475569",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
          )}

          {/* Success state */}
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: 0.1,
                  }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: 8,
                  }}
                >
                  Registration Submitted!
                </div>
                <div
                  style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}
                >
                  Thank you! Your application has been received and is under
                  review.
                </div>
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #ef4444, #dc2626)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 8px 24px rgba(239,68,68,0.3)",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: 8,
                  }}
                >
                  Submission Failed
                </div>
                <div
                  style={{ fontSize: 13, color: "#ef4444", lineHeight: 1.6 }}
                >
                  {error}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="steps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Spinner ring */}
                <div
                  style={{
                    position: "relative",
                    width: 64,
                    height: 64,
                    margin: "0 auto 28px",
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="26"
                      fill="none"
                      stroke="#42568C"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="163"
                      animate={{ strokeDashoffset: [163, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "32px 32px", rotate: -90 }}
                    />
                  </svg>
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: 6,
                  }}
                >
                  Submitting your application…
                </div>
                <div
                  style={{ fontSize: 13, color: "#94a3b8", marginBottom: 28 }}
                >
                  Please wait, do not close this page
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    textAlign: "left",
                  }}
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 14px",
                        borderRadius: 12,
                        background:
                          step.status === "active"
                            ? "#f0f4ff"
                            : step.status === "done"
                            ? "#f0fdf4"
                            : step.status === "error"
                            ? "#fff1f2"
                            : "#f8fafc",
                        border: `1px solid ${
                          step.status === "active"
                            ? "#c7d2fe"
                            : step.status === "done"
                            ? "#bbf7d0"
                            : step.status === "error"
                            ? "#fecdd3"
                            : "#e2e8f0"
                        }`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {step.status === "done" ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: "#10b981",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="11"
                              height="11"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2.5}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </motion.div>
                        ) : step.status === "active" ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.9,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              border: "2.5px solid #c7d2fe",
                              borderTopColor: "#42568C",
                            }}
                          />
                        ) : step.status === "error" ? (
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: "#ef4444",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="10"
                              height="10"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2.5}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              border: "2px solid #cbd5e1",
                            }}
                          />
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: step.status === "active" ? 700 : 500,
                          color:
                            step.status === "active"
                              ? "#42568C"
                              : step.status === "done"
                              ? "#065f46"
                              : step.status === "error"
                              ? "#be123c"
                              : "#94a3b8",
                        }}
                      >
                        {step.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Form sub-components ────────────────────────────────────────────────────────

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-800 mb-1"
    >
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function TextInput({
  id,
  name,
  placeholder,
  defaultValue,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { hasError, clearError } = useFieldError(name);
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => {
        clearError();
        onChange?.(e);
      }}
      className={`w-full rounded border px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-1 ${
        hasError
          ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      }`}
    />
  );
}
function YesNoRow({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-100 pb-3">
      <p className="text-sm text-gray-800 leading-snug">{label}</p>
      <div className="flex gap-6">
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="radio"
            name={name}
            value="yes"
            className="text-blue-600"
          />{" "}
          Yes
        </label>
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="radio"
            name={name}
            value="no"
            className="text-blue-600"
          />{" "}
          No
        </label>
      </div>
    </div>
  );
}

// YesNo that reveals a details textarea when "Yes" is selected
function YesNoWithDetails({
  name, label, detailsPlaceholder = "Please provide details…",
}: { name: string; label: string; detailsPlaceholder?: string }) {
  const [val, setVal] = useState<"yes" | "no" | null>(null);
  return (
    <div className="flex flex-col gap-2 border-b border-gray-100 pb-3">
      <p className="text-sm text-gray-800 leading-snug">{label}</p>
      <div className="flex gap-6">
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" name={name} value="yes" className="text-blue-600" onChange={() => setVal("yes")} /> Yes
        </label>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" name={name} value="no" className="text-blue-600" onChange={() => setVal("no")} /> No
        </label>
      </div>
      <AnimatePresence>
        {val === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <textarea
              name={`${name}_details`}
              rows={2}
              placeholder={detailsPlaceholder}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm mt-1 resize-none focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// BSB input with auto-formatting (XXX-XXX)
function BSBInput() {
  const [value, setValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^0-9a-zA-Z]/g, "");
    const formatted = raw.length > 3 ? `${raw.slice(0, 3)}-${raw.slice(3, 6)}` : raw;
    setValue(formatted);
  }
  return (
    <input
      id="bsb"
      name="bsb"
      type="text"
      placeholder="XXX-XXX"
      value={value}
      onChange={handleChange}
      maxLength={7}
      className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  );
}

// ── Jobactive conditional field ────────────────────────────────────────────────

function JobactiveField() {
  const [registered, setRegistered] = useState<"yes" | "no" | null>(null);
  return (
    <div className="mt-6 space-y-3">
      <p className="text-sm font-medium text-gray-900">
        Are you currently registered with any jobactive provider?
      </p>
      <div className="flex gap-6">
        <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="radio"
            name="jobactiveRegistered"
            value="yes"
            className="text-blue-600"
            onChange={() => setRegistered("yes")}
          />{" "}
          Yes
        </label>
        <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="radio"
            name="jobactiveRegistered"
            value="no"
            className="text-blue-600"
            onChange={() => setRegistered("no")}
          />{" "}
          No
        </label>
      </div>
      <AnimatePresence>
        {registered === "yes" && (
          <motion.div
            key="provider-field"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="rounded-lg p-4"
              style={{ border: "1px solid #42568C30", background: "#42568C08" }}
            >
              <FieldLabel htmlFor="jobactiveProviderName">
                If yes, kindly specify the Provider Name
              </FieldLabel>
              <TextInput
                id="jobactiveProviderName"
                name="jobactiveProviderName"
                placeholder="Provider Name"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── WHS Video Carousel ─────────────────────────────────────────────────────────

function WHSCarousel({ videos }: { videos: readonly string[] }) {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(() =>
    videos.map(() => false)
  );
  const constraintsRef = useRef<HTMLDivElement>(null);

  const total = videos.length;

  function goTo(index: number) {
    setActive(Math.max(0, Math.min(total - 1, index)));
  }

  function handleDragEnd(_: unknown, info: { offset: { x: number } }) {
    const threshold = 60;
    if (info.offset.x < -threshold) goTo(active + 1);
    else if (info.offset.x > threshold) goTo(active - 1);
  }

  function toggleChecked(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div>
      <p className="text-sm font-medium text-gray-900 mb-4">Video Content</p>

      {/* Track */}
      <div
        ref={constraintsRef}
        style={{ overflow: "hidden", position: "relative", borderRadius: 16 }}
      >
        <motion.div
          style={{ display: "flex" }}
          animate={{ x: `${-active * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {videos.map((src, i) => {
            const n = i + 1;
            return (
              <div
                key={src}
                style={{
                  minWidth: "100%",
                  boxSizing: "border-box",
                  padding: "0 2px",
                }}
              >
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200/90 bg-gradient-to-b from-gray-50/90 to-white p-4 shadow-sm ring-1 ring-black/[0.04]">
                  {/* drag-safe video wrapper — stops drag from interfering with video controls */}
                  <div
                    style={{ pointerEvents: "auto" }}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <video
                      className="aspect-video w-full rounded-lg bg-black object-contain shadow-md"
                      controls
                      preload="metadata"
                      playsInline
                      src={src}
                    />
                  </div>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-700 underline decoration-blue-400/70 underline-offset-2 hover:text-blue-900"
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    Download &amp; View
                  </a>
                  <label
                    className="inline-flex items-start gap-2 text-sm text-gray-800 leading-snug cursor-pointer"
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      name={`whsModule${n}Confirmed`}
                      className="mt-1 shrink-0 rounded text-blue-600"
                      checked={checked[i]}
                      onChange={() => toggleChecked(i)}
                    />
                    I confirm that I have watched and understood the work health
                    and safety module {n}
                  </label>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots + Arrows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: 16,
        }}
      >
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1.5px solid #e2e8f0",
            background: active === 0 ? "#f8fafc" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: active === 0 ? "not-allowed" : "pointer",
            opacity: active === 0 ? 0.4 : 1,
            transition: "all 0.15s",
          }}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="#475569"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {videos.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              animate={{
                width: active === i ? 22 : 8,
                background: active === i ? "#42568C" : "#cbd5e1",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              style={{
                height: 8,
                borderRadius: 9999,
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === total - 1}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1.5px solid #e2e8f0",
            background: active === total - 1 ? "#f8fafc" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: active === total - 1 ? "not-allowed" : "pointer",
            opacity: active === total - 1 ? 0.4 : 1,
            transition: "all 0.15s",
          }}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="#475569"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Module label */}
      <p
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 12,
          color: "#94a3b8",
          fontWeight: 600,
        }}
      >
        Module {active + 1} of {total}
      </p>
    </div>
  );
}

// ── Police Check Section ───────────────────────────────────────────────────────

function PoliceCheckSection() {
  const [hasClearance, setHasClearance] = useState<"yes" | "no" | null>(null);
  const [hasCriminal, setHasCriminal] = useState<"yes" | "no" | null>(null);

  return (
    <div className="space-y-5">
      {/* Q1 — Do you have an Australian police clearance */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-800">
          Do you have an Australian police clearance?
        </p>
        <div className="flex gap-6">
          {(["yes", "no"] as const).map((v) => (
            <label
              key={v}
              className="inline-flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="radio"
                name="policeClearanceAu"
                value={v}
                className="text-blue-600"
                onChange={() => setHasClearance(v)}
              />
              {v === "yes" ? "Yes" : "No"}
            </label>
          ))}
        </div>
      </div>

      {/* YES branch */}
      <AnimatePresence>
        {hasClearance === "yes" && (
          <motion.div
            key="yes-branch"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="rounded-lg p-4 space-y-4"
              style={{ border: "1px solid #42568C30", background: "#42568C08" }}
            >
              <SmartFileField
                id="policeClearanceCert"
                name="policeClearanceCert"
                label="Attach Australian Police Clearance certificate / Receipt"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NO branch */}
      <AnimatePresence>
        {hasClearance === "no" && (
          <motion.div
            key="no-branch"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="rounded-lg p-4 space-y-5"
              style={{ border: "1px solid #42568C30", background: "#42568C08" }}
            >
              {/* Police check link */}
              <div>
                <p className="text-sm font-medium text-gray-800 mb-1">
                  Please use the link below to complete a police check:
                </p>
                <a
                  href="https://afpnationalpolicechecks.converga.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900 break-all"
                >
                  https://afpnationalpolicechecks.converga.com.au/
                </a>
              </div>

              <SmartFileField
                id="policeClearanceCertNo"
                name="policeClearanceCert"
                label="Attach Australian Police Clearance certificate / Receipt"
              />

              {/* Q2 — Criminal history */}
              <div
                className="space-y-2 pt-2"
                style={{ borderTop: "1px solid #42568C25" }}
              >
                <p className="text-sm font-medium text-gray-800">
                  Do you have any prior or pending criminal history?
                </p>
                <div className="flex gap-6">
                  {(["yes", "no"] as const).map((v) => (
                    <label
                      key={v}
                      className="inline-flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="criminalHistory"
                        value={v}
                        className="text-blue-600"
                        onChange={() => setHasCriminal(v)}
                      />
                      {v === "yes" ? "Yes" : "No"}
                    </label>
                  ))}
                </div>
              </div>

              {/* Criminal YES */}
              <AnimatePresence>
                {hasCriminal === "yes" && (
                  <motion.div
                    key="criminal-yes"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="rounded-lg p-4 space-y-3"
                      style={{
                        border: "1px solid #42568C40",
                        background: "#42568C10",
                      }}
                    >
                      <p className="text-sm font-semibold text-gray-800">
                        Please provide details:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr>
                              <th className="text-left text-xs font-700 text-gray-600 border border-gray-200 bg-white px-3 py-2 w-1/3">
                                Date
                              </th>
                              <th className="text-left text-xs font-700 text-gray-600 border border-gray-200 bg-white px-3 py-2">
                                Nature of Offense
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[0, 1, 2].map((i) => (
                              <tr key={i}>
                                <td className="border border-gray-200 bg-white p-1">
                                  <input
                                    type="date"
                                    name={`criminalDate_${i}`}
                                    className="w-full text-sm px-2 py-1 outline-none bg-transparent"
                                  />
                                </td>
                                <td className="border border-gray-200 bg-white p-1">
                                  <input
                                    type="text"
                                    name={`criminalOffense_${i}`}
                                    placeholder="Description…"
                                    className="w-full text-sm px-2 py-1 outline-none bg-transparent"
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <input type="hidden" name="criminalHistory" value="yes" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Criminal NO — Statutory Declaration */}
              <AnimatePresence>
                {hasCriminal === "no" && (
                  <motion.div
                    key="criminal-no"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="rounded-lg p-4 space-y-4"
                      style={{
                        border: "1px solid #42568C30",
                        background: "#42568C08",
                      }}
                    >
                      <p className="text-sm font-semibold text-gray-900">
                        Statutory Declaration
                      </p>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>
                          <span className="font-semibold">1)</span> Please
                          attach a Digital Commonwealth Statutory Declaration
                          through your myGov Account via the below link:
                        </p>
                        <a
                          href="https://my.gov.au"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                        >
                          Create a digital Commonwealth statutory declaration
                          through myGov | myGov
                        </a>
                        <p>
                          <span className="font-semibold">2)</span> When
                          prompted to enter your declaration, please enter the
                          below declaration statement:
                        </p>
                        <div
                          className="rounded-md bg-white p-4 text-sm text-gray-800 leading-relaxed"
                          style={{ border: "1px solid #42568C25" }}
                        >
                          <p className="font-semibold mb-2">
                            I do solemnly and sincerely declare that:‑
                          </p>
                          <p>
                            a) I have never been convicted of a criminal offense
                            in Australia
                          </p>
                          <p>
                            b) I have never been convicted of a criminal offence
                            and/or sentenced to imprisonment in any country
                            other than Australia
                          </p>
                        </div>
                      </div>
                      <SmartFileField
                        id="statutoryDeclaration"
                        name="statutoryDeclaration"
                        label="Attach Australian Commonwealth Government Statutory Declaration"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionCard({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="bg-white scroll-mt-1 border-b-2 border-gray-300 pb-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 border-b border-primary pb-3 mb-5 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

// ── Smart File Field ───────────────────────────────────────────────────────────

function getExtIcon(ext: string): React.ReactNode {
  const e = ext.toLowerCase();
  if (["pdf"].includes(e))
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21H5a2 2 0 01-2-2V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2h-2"
        />
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points="13 3 13 9 19 9"
        />
        <text
          x="5"
          y="19"
          fontSize="6"
          fontWeight="700"
          fill="currentColor"
          stroke="none"
        >
          PDF
        </text>
      </svg>
    );
  if (["jpg", "jpeg", "png", "gif", "webp", "heic"].includes(e))
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points="21 15 16 10 5 21"
        />
      </svg>
    );
  if (["doc", "docx"].includes(e))
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
        />
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points="14 2 14 8 20 8"
        />
        <line strokeLinecap="round" x1="8" y1="13" x2="16" y2="13" />
        <line strokeLinecap="round" x1="8" y1="17" x2="12" y2="17" />
      </svg>
    );
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      />
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="14 2 14 8 20 8"
      />
    </svg>
  );
}

function getExtColor(ext: string): { color: string; bg: string } {
  const e = ext.toLowerCase();
  if (e === "pdf") return { color: "#dc2626", bg: "#fef2f2" };
  if (["jpg", "jpeg", "png", "gif", "webp", "heic"].includes(e))
    return { color: "#7c3aed", bg: "#f5f3ff" };
  if (["doc", "docx"].includes(e)) return { color: "#2563eb", bg: "#eff6ff" };
  return { color: "#475569", bg: "#f1f5f9" };
}

function SmartFileField({
  id,
  name,
  label,
  required,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { hasError, clearError } = useFieldError(name);

  const ext = file ? file.name.split(".").pop() ?? "" : "";
  const { color, bg } = getExtColor(ext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
    clearError();
  }

  function handleRemove() {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div id={`${name}-upload-zone`}>
      <FieldLabel htmlFor={id} required={required}>{label}</FieldLabel>

      {/* Single input always in DOM — browser keeps its files list intact */}
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        className="hidden"
        onChange={handleChange}
      />

      {file ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            border: `1.5px solid ${color}40`,
            background: bg,
          }}
        >
          <div style={{ color, flexShrink: 0 }}>{getExtIcon(ext)}</div>
          <span
            style={{
              flex: 1,
              fontSize: 12,
              fontWeight: 600,
              color: "#1e293b",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {file.name}
          </span>
          <span style={{ fontSize: 11, color: "#94a3b8", flexShrink: 0 }}>
            {(file.size / 1024).toFixed(0)} KB
          </span>
          <button
            type="button"
            onClick={handleRemove}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              flexShrink: 0,
              background: "#e2e8f0",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fecdd3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e2e8f0")}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#475569"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <label
          htmlFor={id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 10px",
            borderRadius: 8,
            border: hasError ? "1.5px dashed #ef4444" : "1.5px dashed #cbd5e1",
            background: hasError ? "#fef2f2" : "#f8fafc",
            cursor: "pointer",
            transition: "border-color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = hasError ? "#dc2626" : "#42568C";
            (e.currentTarget as HTMLElement).style.background = hasError ? "#fee2e2" : "#f0f4ff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = hasError ? "#ef4444" : "#cbd5e1";
            (e.currentTarget as HTMLElement).style.background = hasError ? "#fef2f2" : "#f8fafc";
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94a3b8"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>
            Choose file…
          </span>
        </label>
      )}
    </div>
  );
}

// ── Sidebar Nav ───────────────────────────────────────────────────────────────

const NAV_SECTIONS: {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
}[] = [
  { id: "sec-personal", label: "Personal Information", Icon: User },
  { id: "sec-emergency", label: "Emergency Contact", Icon: AlertTriangle },
  { id: "sec-referee1", label: "Referee 1", Icon: ClipboardList },
  { id: "sec-referee2", label: "Referee 2", Icon: ClipboardList },
  { id: "sec-bank", label: "Bank Account", Icon: Building2 },
  { id: "sec-tax", label: "Tax File Number", Icon: FileText },
  { id: "sec-super", label: "Super Fund", Icon: PiggyBank },
  { id: "sec-police", label: "Police Check", Icon: ShieldCheck },
  { id: "sec-whs", label: "WHS Training", Icon: Video },
  { id: "sec-covid", label: "COVID19 Vaccinations", Icon: Syringe },
  { id: "sec-health", label: "Health Questionnaire", Icon: HeartPulse },
  { id: "sec-privacy", label: "Privacy & Signature", Icon: PenLine },
];

function FormSidebar({ activeId, onScrollTo }: { activeId: string; onScrollTo: (id: string) => void }) {

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #42568C30",
        boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 16px 12px",
          borderBottom: "1px solid #f0f1f5",
          background: "linear-gradient(135deg, #42568C08, #42568C14)",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#42568C",
            textTransform: "uppercase",
            letterSpacing: 1.1,
          }}
        >
          Form Sections
        </div>
      </div>

      {/* Nav items */}
      <div style={{ padding: "6px 6px" }}>
        {NAV_SECTIONS.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onScrollTo(s.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 9px",
                borderRadius: 9,
                border: "none",
                background: isActive ? "#42568C" : "transparent",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = "#f0f4ff";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <s.Icon size={13} color={isActive ? "#fff" : "#94a3b8"} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#fff" : "#475569",
                  lineHeight: 1.3,
                  flex: 1,
                }}
              >
                {s.label}
              </span>
              {isActive && <ChevronRight size={11} color="#ffffff99" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const LOCATIONIQ_KEY = process.env.NEXT_PUBLIC_LOCATIONIQ_KEY ?? "";

interface LocationIQResult {
  display_name: string;
  display_place: string;
  display_address?: string;
  address: {
    house_number?: string;
    road?: string;
    suburb?: string;
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    postcode?: string;
    name?: string;
  };
}

function AddressAutocomplete() {
  const { hasError, clearError } = useFieldError("fullAddress");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LocationIQResult[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // hidden inputs refs for form submission
  const fullAddressRef = useRef<HTMLInputElement>(null);
  const streetNumberRef = useRef<HTMLInputElement>(null);
  const streetNameRef = useRef<HTMLInputElement>(null);
  const suburbRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const postcodeRef = useRef<HTMLInputElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setSelected("");
    clearError();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length < 3) { setResults([]); setOpen(false); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.locationiq.com/v1/autocomplete?key=${LOCATIONIQ_KEY}&q=${encodeURIComponent(val)}&limit=6&dedupe=1&countrycodes=au&tag=place:house,highway:residential,place:road`
        );
        const data: LocationIQResult[] = await res.json();
        if (Array.isArray(data)) { setResults(data); setOpen(true); }
      } catch { /* ignore */ }
    }, 400);
  }

  function handleSelect(item: LocationIQResult) {
    const addr = item.address;
    const streetNum = addr.house_number ?? "";
    const streetName = addr.road ?? addr.name ?? "";
    const suburb = addr.suburb ?? addr.city ?? addr.town ?? addr.village ?? "";
    const state = addr.state ?? "";
    const postcode = addr.postcode ?? "";
    const full = item.display_name;

    setQuery(full);
    setSelected(full);
    setOpen(false);
    setResults([]);

    if (fullAddressRef.current)   fullAddressRef.current.value   = full;
    if (streetNumberRef.current)  streetNumberRef.current.value  = streetNum;
    if (streetNameRef.current)    streetNameRef.current.value    = streetName;
    if (suburbRef.current)        suburbRef.current.value        = suburb;
    if (stateRef.current)         stateRef.current.value         = state;
    if (postcodeRef.current)      postcodeRef.current.value      = postcode;
    clearError();
  }

  return (
    <div className="mt-4 space-y-4">
      {/* Autocomplete search box */}
      <div ref={wrapperRef} className="relative">
        <FieldLabel htmlFor="fullAddress" required>Full Address</FieldLabel>
        <input
          id="fullAddress"
          type="text"
          autoComplete="off"
          placeholder="Start typing your address..."
          value={query}
          onChange={handleInput}
          onFocus={() => results.length > 0 && setOpen(true)}
          className={`w-full rounded border px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-1 ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          }`}
        />
        {/* hidden input carries the value for FormData */}
        <input ref={fullAddressRef} type="hidden" name="fullAddress" value={selected || query} />

        {open && results.length > 0 && (
          <ul
            className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden"
            style={{ maxHeight: 260, overflowY: "auto" }}
          >
            {results.map((item, i) => (
              <li
                key={i}
                onMouseDown={() => handleSelect(item)}
                className="flex flex-col px-3 py-2 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm font-semibold text-gray-800">{item.display_place}</span>
                <span className="text-xs text-gray-500 truncate">{item.display_address ?? item.display_name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Editable fields — pre-filled by autocomplete, user can still edit */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <FieldLabel htmlFor="unitNumber">Unit Number</FieldLabel>
          <input
            id="unitNumber"
            name="unitNumber"
            type="text"
            placeholder="Unit Number"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <FieldLabel htmlFor="streetNumber">Street Number</FieldLabel>
          <input
            ref={streetNumberRef}
            id="streetNumber"
            name="streetNumber"
            type="text"
            placeholder="Street No"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <FieldLabel htmlFor="streetName">Street Name</FieldLabel>
          <input
            ref={streetNameRef}
            id="streetName"
            name="streetName"
            type="text"
            placeholder="Street Name"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <FieldLabel htmlFor="suburb">Suburb</FieldLabel>
          <input
            ref={suburbRef}
            id="suburb"
            name="suburb"
            type="text"
            placeholder="Suburb"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <FieldLabel htmlFor="state">State</FieldLabel>
          <input
            ref={stateRef}
            id="state"
            name="state"
            type="text"
            placeholder="State"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <FieldLabel htmlFor="postcode">Post code</FieldLabel>
          <input
            ref={postcodeRef}
            id="postcode"
            name="postcode"
            type="text"
            placeholder="Post code"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

function GenderSelect() {
  const { hasError, clearError } = useFieldError("gender");
  return (
    <select
      id="gender"
      name="gender"
      onChange={clearError}
      className={`w-full rounded border px-3 py-2 text-sm ${
        hasError
          ? "border-red-500 bg-red-50"
          : "border-gray-300"
      }`}
    >
      <option value="">Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Intersex">Intersex</option>
      <option value="Unknown">Unknown</option>
    </select>
  );
}

function ResidentialStatusFieldset({
  setResidentialStatus,
}: {
  residentialStatus?: string;
  setResidentialStatus: (v: string) => void;
}) {
  const { hasError, clearError } = useFieldError("residentialStatus");
  return (
    <fieldset id="residential-status-fieldset" className="mt-6 space-y-3">
      <legend className="text-sm font-medium text-gray-900">
        Residential Status:<span className="text-red-500 ml-0.5">*</span>
      </legend>
      {hasError && (
        <p className="text-xs text-red-500">Please select a residential status.</p>
      )}
      <div className={`grid gap-2 sm:grid-cols-2 rounded p-2 ${hasError ? "border border-red-400 bg-red-50" : ""}`}>
        {[
          "Australian Citizen",
          "Australian Permanent Resident",
          "Working Visa",
          "Temporary Resident Visa",
          "Student Visa",
        ].map((label) => (
          <label key={label} className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="residentialStatus"
              value={label}
              className="text-blue-600"
              onChange={(e) => {
                clearError();
                setResidentialStatus(e.target.value);
              }}
            />
            {label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// ── Main Form ──────────────────────────────────────────────────────────────────

export default function CandidateRegistrationSampleForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [residentialStatus, setResidentialStatus] = useState("");
  const [errorFields, setErrorFields] = useState<Set<string>>(new Set());

  function clearError(name: string) {
    setErrorFields((prev) => {
      if (!prev.has(name)) return prev;
      const next = new Set(prev);
      next.delete(name);
      return next;
    });
  }
  const [noOwnSuper, setNoOwnSuper] = useState(false);
  const [activeSection, setActiveSection] = useState("sec-personal");
  /** Increment when the user dismisses the success modal to remount the form and clear controlled child state (BSB, files, signature, WHS, etc.). */
  const [formRemountKey, setFormRemountKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const showModal = submitting || success || !!submitError;

  // Scroll-spy
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setupObserver = useCallback((node: HTMLFormElement | null) => {
    (formRef as React.MutableRefObject<HTMLFormElement | null>).current = node;
    if (observerRef.current) observerRef.current.disconnect();
    if (!node) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (scrollingRef.current) return; // pause during programmatic scroll
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = node.querySelector(`#${id}`);
      if (el) observerRef.current!.observe(el);
    });
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Pause observer so it doesn't fire mid-scroll
    scrollingRef.current = true;
    setActiveSection(id);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    const NAVBAR_OFFSET = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    // Re-enable observer after scroll settles (~800ms covers most smooth scrolls)
    scrollTimerRef.current = setTimeout(() => {
      scrollingRef.current = false;
    }, 800);
  }, []);

  function fillDummy() {
    const currentForm = formRef.current;
    if (!currentForm) return;

    // Helper to set a text/date/tel/email input value + trigger React's onChange
    function setVal(name: string, value: string) {
      const el = currentForm!.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
      if (!el) return;
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        el.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype :
        el.tagName === "SELECT"   ? window.HTMLSelectElement.prototype :
                                    window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeInputValueSetter?.call(el, value);
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function setRadio(name: string, value: string) {
      const el = currentForm!.querySelector<HTMLInputElement>(`input[name="${name}"][value="${value}"]`);
      if (!el) return;
      el.checked = true;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function setCheckbox(name: string, checked: boolean) {
      const el = currentForm!.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (!el) return;
      el.checked = checked;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Personal
    setVal("title", "Mr");
    setVal("firstName", "James");
    setVal("middleName", "Robert");
    setVal("lastName", "Mitchell");
    setVal("gender", "Male");
    setVal("dob", "1990-06-15");
    setVal("fullAddress", "12 Collins Street, Melbourne VIC 3000");
    setVal("unitNumber", "4B");
    setVal("streetNumber", "12");
    setVal("streetName", "Collins Street");
    setVal("suburb", "Melbourne");
    setVal("state", "VIC");
    setVal("postcode", "3000");
    setVal("mobile", "0412345678");
    setVal("email", "james.mitchell@example.com");

    // Jobactive — yes + provider
    setRadio("jobactiveRegistered", "yes");
    setTimeout(() => setVal("jobactiveProviderName", "MaxEmploy Solutions"), 50);

    // Residential
    setRadio("residentialStatus", "Australian Citizen");
    setResidentialStatus("Australian Citizen");

    // Emergency
    setVal("emergencyFullName", "Sarah Mitchell");
    setVal("emergencyRelationship", "Spouse");
    setVal("emergencyMobile", "0498765432");
    setVal("emergencyHome", "0398765432");

    // Referee 1
    setVal("ref1Name", "David Thompson");
    setVal("ref1Company", "Acme Logistics Pty Ltd");
    setVal("ref1Position", "Operations Manager");
    setVal("ref1Relationship", "Direct Supervisor");
    setVal("ref1Mobile", "0411222333");
    setVal("ref1Email", "d.thompson@acmelogistics.com.au");

    // Referee 2
    setVal("ref2Name", "Linda Park");
    setVal("ref2Company", "Metro Staffing Group");
    setVal("ref2Position", "HR Director");
    setVal("ref2Relationship", "Former Manager");
    setVal("ref2Mobile", "0422333444");
    setVal("ref2Email", "linda.park@metrostaffing.com.au");

    // Bank
    setVal("bankAccountName", "James Robert Mitchell");
    setVal("bankName", "Commonwealth Bank of Australia");
    setVal("bsb", "062-000");
    setVal("accountNumber", "12345678");

    // Tax
    setVal("tfn", "123 456 789");
    setRadio("paidBasis", "Casual employment");
    setRadio("taxResidency", "An Australian resident for tax purposes");
    setRadio("taxFreeThreshold", "yes");
    setRadio("studyLoanDebt", "no");

    // Super
    setVal("superAccountName", "James Mitchell");
    setVal("superFundName", "Australian Super");
    setVal("superMembershipNumber", "987654321");
    setVal("superFundAddress", "Level 33, 50 Lonsdale Street, Melbourne VIC 3000");
    setVal("superPhone", "1300300788");
    setVal("superWebsite", "www.australiansuper.com");
    setVal("superAbn", "65714394898");
    setVal("superUsi", "STA0100AU");

    // Police — yes branch
    setRadio("policeClearanceAu", "yes");

    // WHS checkboxes
    setCheckbox("whsModule1Confirmed", true);
    setCheckbox("whsModule2Confirmed", true);
    setCheckbox("whsModule3Confirmed", true);
    setCheckbox("whsModule4Confirmed", true);

    // Section A — all yes + details for 0,1,2,25
    SECTION_A_QUESTIONS.forEach((_, i) => {
      setRadio(`sectionA_${i}`, "yes");
    });
    setTimeout(() => {
      setVal("sectionA_0_details", "Medically retired in 2015 due to lower back injury, fully recovered since.");
      setVal("sectionA_1_details", "Mild asthma managed with inhaler, does not affect work performance.");
      setVal("sectionA_2_details", "Seasonal hay fever, managed with antihistamines.");
      setVal("sectionA_25_details", "Appendectomy in 2018, fully healed with no ongoing complications.");
    }, 50);

    // Section B — all yes + details for 0,1,2,3
    SECTION_B_QUESTIONS.forEach((_, i) => {
      setRadio(`sectionB_${i}`, "yes");
    });
    setTimeout(() => {
      setVal("sectionB_0_details", "Receiving physiotherapy for mild shoulder strain.");
      setVal("sectionB_1_details", "Taking cetirizine (antihistamine) — no drowsiness side effects.");
      setVal("sectionB_2_details", "Pre-existing lower back condition, managed with regular exercise.");
      setVal("sectionB_3_details", "Minor wrist sprain in 2021, fully healed.");
    }, 50);

    // Section C — all yes
    SECTION_C_ACTIVITIES.forEach((_, i) => {
      setRadio(`sectionC_${i}`, "yes");
    });

    // Privacy
    setCheckbox("privacyAcknowledged", true);
  }

  const updateStep = useCallback((index: number, status: Step["status"]) => {
    setSteps((prev) =>
      prev.map((s, i) => (i === index ? { ...s, status } : s))
    );
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(false);
    setSubmitError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // ── Mandatory field validation ──────────────────────────────────────────
    const getText = (n: string) => (fd.get(n) as string | null)?.trim() ?? "";
    const getFile = (n: string) => {
      const el = form.querySelector<HTMLInputElement>(`input[name="${n}"]`);
      return el?.files && el.files.length > 0;
    };

    // name → id of the visible/focusable element to scroll to
    const REQUIRED_FIELDS: { name: string; anchorId: string }[] = [
      { name: "firstName",            anchorId: "firstName" },
      { name: "lastName",             anchorId: "lastName" },
      { name: "fullAddress",          anchorId: "fullAddress" },
      { name: "gender",               anchorId: "gender" },
      { name: "dob",                  anchorId: "dob" },
      { name: "mobile",               anchorId: "mobile" },
      { name: "email",                anchorId: "email" },
      { name: "residentialStatus",    anchorId: "residential-status-fieldset" },
      { name: "emergencyFullName",    anchorId: "emergencyFullName" },
      { name: "emergencyRelationship",anchorId: "emergencyRelationship" },
      { name: "emergencyMobile",      anchorId: "emergencyMobile" },
      { name: "tfn",                  anchorId: "tfn" },
      { name: "passport",             anchorId: "passport-upload-zone" },
      { name: "evoCheck",             anchorId: "evoCheck-upload-zone" },
    ];

    const missingNames: string[] = [];
    for (const { name } of REQUIRED_FIELDS) {
      const isFile = name === "passport" || name === "evoCheck";
      if (isFile ? !getFile(name) : !getText(name)) missingNames.push(name);
    }

    if (missingNames.length > 0) {
      setErrorFields(new Set(missingNames));
      const firstMissing = REQUIRED_FIELDS.find((f) => f.name === missingNames[0]);
      if (firstMissing) {
        const anchor = document.getElementById(firstMissing.anchorId);
        if (anchor) {
          const NAVBAR_HEIGHT = 100; // fixed navbar ~70px top bar + main bar
          const rect = anchor.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY - NAVBAR_HEIGHT - 24;
          window.scrollTo({ top: absoluteTop, behavior: "smooth" });
          setTimeout(() => {
            try { anchor.focus(); } catch { /* non-focusable element */ }
          }, 400);
        }
      }
      return;
    }

    setErrorFields(new Set());
    setSubmitting(true);

    // Count files for dynamic steps
    const fileInputs = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[type="file"]')
    ).filter((i) => i.files && i.files.length > 0);
    const hasFiles = fileInputs.length > 0;

    const initialSteps: Step[] = [
      { label: "Saving your information", status: "pending" },
      ...(hasFiles
        ? [
            {
              label: `Uploading ${fileInputs.length} document${
                fileInputs.length > 1 ? "s" : ""
              } in parallel`,
              status: "pending" as const,
            },
          ]
        : []),
    ];
    setSteps(initialSteps);

    // Build health JSON
    const healthSectionA: Record<string, string> = {};
    const healthSectionB: Record<string, string> = {};
    const healthSectionC: Record<string, string> = {};

    SECTION_A_QUESTIONS.forEach((_, i) => {
      const v = fd.get(`sectionA_${i}`);
      if (v) healthSectionA[i] = v as string;
      const details = fd.get(`sectionA_${i}_details`);
      if (details) healthSectionA[`${i}_details`] = details as string;
    });
    SECTION_B_QUESTIONS.forEach((_, i) => {
      const v = fd.get(`sectionB_${i}`);
      if (v) healthSectionB[i] = v as string;
      const details = fd.get(`sectionB_${i}_details`);
      if (details) healthSectionB[`${i}_details`] = details as string;
    });
    SECTION_C_ACTIVITIES.forEach((_, i) => {
      const v = fd.get(`sectionC_${i}`);
      if (v) healthSectionC[i] = v as string;
    });

    // Get signature — drawn or uploaded
    const drawnSig = fd.get("candidateSignature") as string;
    const uploadedSig = fd.get("candidateSignatureUpload") as string;
    const signatureDataUrl = drawnSig || uploadedSig || undefined;

    const body = {
      title: (fd.get("title") as string) || undefined,
      firstName: fd.get("firstName") as string,
      middleName: (fd.get("middleName") as string) || undefined,
      lastName: fd.get("lastName") as string,
      gender: (fd.get("gender") as string) || undefined,
      dob: (fd.get("dob") as string) || undefined,
      fullAddress: (fd.get("fullAddress") as string) || undefined,
      unitNumber: (fd.get("unitNumber") as string) || undefined,
      streetNumber: (fd.get("streetNumber") as string) || undefined,
      streetName: (fd.get("streetName") as string) || undefined,
      suburb: (fd.get("suburb") as string) || undefined,
      state: (fd.get("state") as string) || undefined,
      postcode: (fd.get("postcode") as string) || undefined,
      mobile: (fd.get("mobile") as string) || undefined,
      email: fd.get("email") as string,
      jobactiveRegistered: fd.get("jobactiveRegistered") === "yes",
      jobactiveProviderName:
        (fd.get("jobactiveProviderName") as string) || undefined,
      residentialStatus: (fd.get("residentialStatus") as string) || undefined,
      visaExpiryDate: (fd.get("visaExpiryDate") as string) || undefined,
      grantNumber: (fd.get("grantNumber") as string) || undefined,
      emergencyFullName: (fd.get("emergencyFullName") as string) || undefined,
      emergencyRelationship:
        (fd.get("emergencyRelationship") as string) || undefined,
      emergencyMobile: (fd.get("emergencyMobile") as string) || undefined,
      emergencyHome: (fd.get("emergencyHome") as string) || undefined,
      ref1Name: (fd.get("ref1Name") as string) || undefined,
      ref1Company: (fd.get("ref1Company") as string) || undefined,
      ref1Position: (fd.get("ref1Position") as string) || undefined,
      ref1Relationship: (fd.get("ref1Relationship") as string) || undefined,
      ref1Mobile: (fd.get("ref1Mobile") as string) || undefined,
      ref1Email: (fd.get("ref1Email") as string) || undefined,
      ref2Name: (fd.get("ref2Name") as string) || undefined,
      ref2Company: (fd.get("ref2Company") as string) || undefined,
      ref2Position: (fd.get("ref2Position") as string) || undefined,
      ref2Relationship: (fd.get("ref2Relationship") as string) || undefined,
      ref2Mobile: (fd.get("ref2Mobile") as string) || undefined,
      ref2Email: (fd.get("ref2Email") as string) || undefined,
      bankAccountName: (fd.get("bankAccountName") as string) || undefined,
      bankName: (fd.get("bankName") as string) || undefined,
      bsb: (fd.get("bsb") as string) || undefined,
      accountNumber: (fd.get("accountNumber") as string) || undefined,
      tfn: (fd.get("tfn") as string) || undefined,
      paidBasis: (fd.get("paidBasis") as string) || undefined,
      taxResidency: (fd.get("taxResidency") as string) || undefined,
      taxFreeThreshold: fd.get("taxFreeThreshold") === "yes",
      studyLoanDebt: fd.get("studyLoanDebt") === "yes",
      noOwnSuperAccount: fd.get("noOwnSuperAccount") === "on",
      superAccountName: (fd.get("superAccountName") as string) || undefined,
      superFundName: (fd.get("superFundName") as string) || undefined,
      superMembershipNumber:
        (fd.get("superMembershipNumber") as string) || undefined,
      superFundAddress: (fd.get("superFundAddress") as string) || undefined,
      superPhone: (fd.get("superPhone") as string) || undefined,
      superWebsite: (fd.get("superWebsite") as string) || undefined,
      superAbn: (fd.get("superAbn") as string) || undefined,
      superUsi: (fd.get("superUsi") as string) || undefined,
      policeClearanceAu: fd.get("policeClearanceAu") === "yes",
      criminalHistory: fd.get("criminalHistory") === "yes",
      criminalHistoryDetails:
        (fd.get("criminalHistoryDetails") as string) || undefined,
      policeCheckLink: fd.get("policeCheckLink") === "on",
      whsModule1Confirmed: fd.get("whsModule1Confirmed") === "on",
      whsModule2Confirmed: fd.get("whsModule2Confirmed") === "on",
      whsModule3Confirmed: fd.get("whsModule3Confirmed") === "on",
      whsModule4Confirmed: fd.get("whsModule4Confirmed") === "on",
      healthSectionA,
      healthSectionB,
      healthSectionC,
      privacyAcknowledged: fd.get("privacyAcknowledged") === "on",
      signatureStorageKey: signatureDataUrl,
    };

    try {
      // Step 0 — save candidate record
      updateStep(0, "active");
      const res = await fetch(`${DASHBOARD_URL}/api/candidates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        updateStep(0, "error");
        const data = await res.json();
        throw new Error(
          data.error?.formErrors?.[0] ?? "Submission failed. Please try again."
        );
      }

      const { candidateId } = await res.json();
      updateStep(0, "done");

      // Step 1 — upload files (if any)
      if (hasFiles) {
        updateStep(1, "active");
        try {
          await uploadFiles(form, candidateId);
          updateStep(1, "done");
        } catch {
          updateStep(1, "error");
        }
      }

      // Short pause so user sees all done, then show success
      await new Promise((r) => setTimeout(r, 600));
      setSuccess(true);
      setSubmitting(false);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
      setSubmitting(false);
    }
  }

  return (
    <ErrorCtx.Provider value={{ errors: errorFields, clear: clearError }}>
    <>
      {/* Step Loader / Success / Error Modal */}
      {showModal && (
        <StepLoaderModal
          steps={steps}
          isSuccess={success}
          error={submitError}
          onClose={() => {
            const wasSuccess = success;
            setSuccess(false);
            setSubmitError(null);
            setSteps([]);
            if (wasSuccess) {
              // Full reset like a page reload (controlled fields, files, signature, WHS, etc.)
              setFormRemountKey((k) => k + 1);
              setResidentialStatus("");
              setNoOwnSuper(false);
              setActiveSection("sec-personal");
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }
          }}
        />
      )}

      {/* Two-column layout: sidebar (lg+) + form */}
      <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
        {/* Sidebar — hidden on mobile/tablet, visible lg+ */}
        <style>{`@media (min-width: 1024px) { .form-sidebar-col { display: block !important; } }`}</style>
        <div
          className="form-sidebar-col"
          style={{
            width: 210,
            flexShrink: 0,
            display: "none",
            position: "sticky",
            top: 80,
            alignSelf: "flex-start",
          }}
        >
          <FormSidebar activeId={activeSection} onScrollTo={handleScrollTo} />
        </div>

        {/* Dev fill button */}
        {process.env.NODE_ENV === "development" && (
          <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
            <button
              type="button"
              onClick={fillDummy}
              style={{
                background: "#42568C",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(66,86,140,0.35)",
              }}
            >
              Fill Dummy Data
            </button>
          </div>
        )}

        {/* Form */}
        <form
          key={formRemountKey}
          ref={setupObserver}
          className="space-y-8 min-w-0 flex-1"
          onSubmit={handleSubmit}
          style={{
            border: "1.5px solid #42568C25",
            borderRadius: 18,
            padding: "28px 28px",
          }}
        >
          <SectionCard id="sec-personal" title="Personal Information">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <select
                  id="title"
                  name="title"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  defaultValue="Mr"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Miss">Miss</option>
                  <option value="Mx">Mx</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <FieldLabel htmlFor="firstName" required>First Name</FieldLabel>
                <TextInput
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="middleName">Middle Name</FieldLabel>
                <TextInput
                  id="middleName"
                  name="middleName"
                  placeholder="Middle Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="lastName" required>Last Name</FieldLabel>
                <TextInput
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="gender" required>Gender</FieldLabel>
                <GenderSelect />
              </div>
              <div>
                <FieldLabel htmlFor="dob" required>Date of birth</FieldLabel>
                <TextInput id="dob" name="dob" type="date" />
              </div>
            </div>

            <AddressAutocomplete />

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="mobile" required>Mobile</FieldLabel>
                <TextInput
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile"
                />
              </div>
              <div>
                <FieldLabel htmlFor="email" required>Email</FieldLabel>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <JobactiveField />

            <ResidentialStatusFieldset
              residentialStatus={residentialStatus}
              setResidentialStatus={setResidentialStatus}
            />

            {/* Conditional Visa fields */}
            <AnimatePresence>
              {VISA_STATUSES.includes(residentialStatus) && (
                <motion.div
                  key="visa-fields"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="grid gap-4 sm:grid-cols-2 rounded-lg p-4"
                    style={{
                      border: "1px solid #42568C30",
                      background: "#42568C08",
                    }}
                  >
                    <div>
                      <FieldLabel htmlFor="visaExpiryDate">
                        Visa Expiry Date
                      </FieldLabel>
                      <TextInput
                        id="visaExpiryDate"
                        name="visaExpiryDate"
                        type="date"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="grantNumber">
                        Grant Number
                      </FieldLabel>
                      <TextInput
                        id="grantNumber"
                        name="grantNumber"
                        placeholder="Visa Grant Number"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SmartFileField
                id="passport"
                name="passport"
                label="Attach Passport image"
                required
              />
              <SmartFileField
                id="birthCert"
                name="birthCert"
                label="Attach Birth certificate"
              />
              <SmartFileField
                id="citizenship"
                name="citizenship"
                label="Attach Australian Citizenship certificate"
              />
              <SmartFileField
                id="licence"
                name="licence"
                label="Attach Driving Licence"
              />
              <SmartFileField
                id="medicare"
                name="medicare"
                label="Attach Australian Medicare certificate"
              />
              <SmartFileField
                id="studentCard"
                name="studentCard"
                label="Attach Australian Student card"
              />
              <SmartFileField
                id="whiteCard"
                name="whiteCard"
                label="Attach White card"
              />
              <SmartFileField
                id="forklift"
                name="forklift"
                label="Attach Forklift licence"
              />
              <SmartFileField
                id="evoCheck"
                name="evoCheck"
                label="Attach Vevo Check"
                required
              />
            </div>
          </SectionCard>

          <SectionCard id="sec-emergency" title="Emergency Contact Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="emergencyFullName" required>Full Name</FieldLabel>
                <TextInput
                  id="emergencyFullName"
                  name="emergencyFullName"
                  placeholder="Emergency Contact Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="emergencyRelationship" required>
                  Relationship
                </FieldLabel>
                <TextInput
                  id="emergencyRelationship"
                  name="emergencyRelationship"
                  placeholder="Emergency Contact Relationship"
                />
              </div>
              <div>
                <FieldLabel htmlFor="emergencyMobile" required>
                  Mobile Phone Number
                </FieldLabel>
                <TextInput
                  id="emergencyMobile"
                  name="emergencyMobile"
                  placeholder="Emergency Contact Mobile"
                />
              </div>
              <div>
                <FieldLabel htmlFor="emergencyHome">
                  Home Phone Number
                </FieldLabel>
                <TextInput
                  id="emergencyHome"
                  name="emergencyHome"
                  placeholder="Emergency Contact Home Phone"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard id="sec-referee1" title="Referee 1 Information">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <FieldLabel htmlFor="ref1Name">Referee 1 Name</FieldLabel>
                <TextInput
                  id="ref1Name"
                  name="ref1Name"
                  placeholder="Referee 1 Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref1Company">
                  Referee 1 CompanyName
                </FieldLabel>
                <TextInput
                  id="ref1Company"
                  name="ref1Company"
                  placeholder="Referee 1 CompanyName"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref1Position">
                  Referee 1 Position
                </FieldLabel>
                <TextInput
                  id="ref1Position"
                  name="ref1Position"
                  placeholder="Referee 1 Position"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref1Relationship">
                  Referee 1 Relationship
                </FieldLabel>
                <TextInput
                  id="ref1Relationship"
                  name="ref1Relationship"
                  placeholder="Referee 1 Relationship"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref1Mobile">Referee 1 Mobile</FieldLabel>
                <TextInput
                  id="ref1Mobile"
                  name="ref1Mobile"
                  placeholder="Referee 1 Mobile"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref1Email">Referee 1 Email</FieldLabel>
                <TextInput
                  id="ref1Email"
                  name="ref1Email"
                  type="email"
                  placeholder="Referee 1 Email"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard id="sec-referee2" title="Referee 2 Information">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <FieldLabel htmlFor="ref2Name">Referee 2 Name</FieldLabel>
                <TextInput
                  id="ref2Name"
                  name="ref2Name"
                  placeholder="Referee 2 Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref2Company">
                  Referee 2 CompanyName
                </FieldLabel>
                <TextInput
                  id="ref2Company"
                  name="ref2Company"
                  placeholder="Referee 2 CompanyName"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref2Position">
                  Referee 2 Position
                </FieldLabel>
                <TextInput
                  id="ref2Position"
                  name="ref2Position"
                  placeholder="Referee 2 Position"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref2Relationship">
                  Referee 2 Relationship
                </FieldLabel>
                <TextInput
                  id="ref2Relationship"
                  name="ref2Relationship"
                  placeholder="Referee 2 Relationship"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref2Mobile">Referee 2 Mobile</FieldLabel>
                <TextInput
                  id="ref2Mobile"
                  name="ref2Mobile"
                  placeholder="Referee 2 Mobile"
                />
              </div>
              <div>
                <FieldLabel htmlFor="ref2Email">Referee 2 Email</FieldLabel>
                <TextInput
                  id="ref2Email"
                  name="ref2Email"
                  type="email"
                  placeholder="Referee 2 Email"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard id="sec-bank" title="Bank Account Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="bankAccountName">Account Name</FieldLabel>
                <TextInput
                  id="bankAccountName"
                  name="bankAccountName"
                  placeholder="Account Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="bankName">Bank Name</FieldLabel>
                <TextInput
                  id="bankName"
                  name="bankName"
                  placeholder="Bank Name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="bsb">BSB</FieldLabel>
                <BSBInput />
              </div>
              <div>
                <FieldLabel htmlFor="accountNumber">Account Number</FieldLabel>
                <TextInput
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Account Number"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard
            id="sec-tax"
            title="Tax File number Declaration Information"
          >
            <div className="max-w-xl">
              <FieldLabel htmlFor="tfn" required>Tax File Number</FieldLabel>
              <TextInput id="tfn" name="tfn" placeholder="TFN" />
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-gray-900 mb-3">
                On what basis are you paid?
              </legend>
              <div className="space-y-2">
                {[
                  "Full-time employment",
                  "Part-time employment",
                  "Labour hire",
                  "Superannuation or annuity income stream",
                  "Casual employment",
                ].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="paidBasis"
                      value={label}
                      className="text-blue-600"
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-gray-900 mb-3">
                Are you:
              </legend>
              <div className="space-y-2">
                {[
                  "An Australian resident for tax purposes",
                  "A foreign resident for tax purposes",
                  "A working holiday maker",
                ].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="taxResidency"
                      value={label}
                      className="text-blue-600"
                    />{" "}
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-gray-900">
                Do you want to claim the tax-free threshold from this payer?
              </p>
              <p className="text-sm text-gray-600">
                Only claim the tax‑free threshold from one payer at a time,
                unless your total income from all sources for the financial year
                will be less than the tax‑free threshold.
              </p>
              <div className="flex gap-6">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="taxFreeThreshold"
                    value="yes"
                    className="text-blue-600"
                  />{" "}
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="taxFreeThreshold"
                    value="no"
                    className="text-blue-600"
                  />{" "}
                  No
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Answer no here if you are a foreign resident or working holiday
                maker, except if you are a foreign resident in receipt of an
                Australian Government pension or allowance
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-800">
                Do you have a Higher Education Loan Program (HELP), VET Student
                Loan (VSL), Financial Supplement (FS), Student Start-up Loan
                (SSL) or Trade Support Loan (TSL) debt?
              </p>
              <div className="flex gap-6">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="studyLoanDebt"
                    value="yes"
                    className="text-blue-600"
                  />{" "}
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="studyLoanDebt"
                    value="no"
                    className="text-blue-600"
                  />{" "}
                  No
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Your payer will withhold additional amounts to cover any
                compulsory Yes repayment that may be raised on your notice of
                assessment.
              </p>
            </div>
          </SectionCard>

          <SectionCard id="sec-super" title="Super Fund Information">
            <label className="inline-flex items-center gap-2 text-sm font-medium mb-4 cursor-pointer">
              <input
                type="checkbox"
                name="noOwnSuperAccount"
                className="rounded text-blue-600"
                checked={noOwnSuper}
                onChange={(e) => setNoOwnSuper(e.target.checked)}
              />
              DO NOT HAVE OWN SUPER ACCOUNT
            </label>

            <AnimatePresence>
              {noOwnSuper ? (
                <motion.div
                  key="no-super"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="rounded-lg p-4"
                    style={{ border: "1px solid #42568C30", background: "#42568C08" }}
                  >
                    <p className="text-sm text-gray-700">
                      Your employer will contribute to a default super fund on your behalf. No further details are required.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="has-super"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="superAccountName">
                        Super Account Name
                      </FieldLabel>
                      <TextInput
                        id="superAccountName"
                        name="superAccountName"
                        placeholder="Super Account Name"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superFundName">Super Fund Name</FieldLabel>
                      <TextInput
                        id="superFundName"
                        name="superFundName"
                        placeholder="Super Fund Name"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superMembershipNumber">
                        Super Membership Number
                      </FieldLabel>
                      <TextInput
                        id="superMembershipNumber"
                        name="superMembershipNumber"
                        placeholder="Super Membership No"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superFundAddress">
                        Super Fund Address
                      </FieldLabel>
                      <TextInput
                        id="superFundAddress"
                        name="superFundAddress"
                        placeholder="Super Fund Address"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superPhone">Super Phone No</FieldLabel>
                      <TextInput
                        id="superPhone"
                        name="superPhone"
                        placeholder="Business/Landline Number"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superWebsite">Super Website</FieldLabel>
                      <TextInput
                        id="superWebsite"
                        name="superWebsite"
                        placeholder="Website"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superAbn">Super Fund ABN</FieldLabel>
                      <TextInput
                        id="superAbn"
                        name="superAbn"
                        placeholder="Super Fund ABN"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="superUsi">Super Fund USI</FieldLabel>
                      <TextInput
                        id="superUsi"
                        name="superUsi"
                        placeholder="Super Fund USI"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Your employer is not required to accept your choice of fund if you
                    have not provided the appropriate documents.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </SectionCard>

          <SectionCard id="sec-police" title="Police check Information">
            <PoliceCheckSection />
          </SectionCard>

          <SectionCard id="sec-whs" title="Workplace Health & Safety Training">
            <WHSCarousel videos={WHS_MODULE_VIDEOS} />
          </SectionCard>

          <SectionCard id="sec-covid" title="COVID19 Vaccinations">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SmartFileField
                id="covid1"
                name="covidVaccination1"
                label="Attach COVID19 Vaccination 1"
              />
              <SmartFileField
                id="covid2"
                name="covidVaccination2"
                label="Attach COVID19 Vaccination 2"
              />
              <SmartFileField
                id="covid3"
                name="covidVaccination3"
                label="Attach COVID19 Vaccination 3"
              />
            </div>
          </SectionCard>

          <SectionCard id="sec-health" title="Health Questionnaire">
            <div className="max-w-none text-sm text-gray-700 whitespace-pre-line leading-relaxed mb-6">
              {HEALTH_INTRO}
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4 mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                INJURY DECLARATION
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {INJURY_DECLARATION}
              </p>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Section A : Health History
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Please select the appropriate answer:
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {SECTION_A_QUESTIONS.map((q, i) => {
                const name = `sectionA_${i}`;
                const withDetails = [0, 1, 2, 25].includes(i);
                return (
                  <div
                    key={name}
                    className="rounded border border-gray-100 p-3 bg-white"
                  >
                    {withDetails ? (
                      <YesNoWithDetails name={name} label={q} />
                    ) : (
                      <YesNoRow name={name} label={q} />
                    )}
                  </div>
                );
              })}
            </div>

            <h3 className="text-base font-semibold text-gray-900 mt-10 mb-2">
              Section B : Medical Details
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Please select the appropriate answer:
            </p>
            <div className="space-y-4 max-w-4xl">
              {SECTION_B_QUESTIONS.map((q, i) => (
                i <= 3 ? (
                  <YesNoWithDetails
                    key={`sectionB_${i}`}
                    name={`sectionB_${i}`}
                    label={q}
                  />
                ) : (
                  <YesNoRow
                    key={`sectionB_${i}`}
                    name={`sectionB_${i}`}
                    label={q}
                  />
                )
              ))}
            </div>

            <h3 className="text-base font-semibold text-gray-900 mt-10 mb-2">
              Section C : Physical Abilities
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Please indicate whether you have, or could have, difficulties
              performing any of the following activities.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              If you have, or could have difficulties performing any of the
              following activities, answer <strong>YES</strong>. If not answer{" "}
              <strong>NO</strong>.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {SECTION_C_ACTIVITIES.map((activity, i) => (
                <div
                  key={`sectionC_${i}`}
                  className="rounded border border-gray-100 p-3 bg-white"
                >
                  <YesNoRow name={`sectionC_${i}`} label={activity} />
                </div>
              ))}
            </div>
          </SectionCard>

          <section
            id="sec-privacy"
            className="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-sm scroll-mt-6"
          >
            <h2 className="text-center text-lg font-semibold text-gray-900 tracking-wide mb-6">
              PRIVACY POLICY
            </h2>
            <div
              className="columns-1 md:columns-2 gap-8 text-sm text-gray-700 [&_p]:mb-3 [&_ul]:mb-3"
              dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }}
            />
            <div className="mt-8 border-t border-gray-300 pt-6">
              <label className="inline-flex items-start gap-2 text-sm font-semibold text-gray-900">
                <input
                  type="checkbox"
                  name="privacyAcknowledged"
                  required
                  className="mt-1 rounded text-blue-600"
                />
                I HAVE READ AND UNDERSTOOD THE ABOVE PRIVACY POLICY.
              </label>
            </div>
            <div className="mt-6">
              <CandidateSignatureField />
            </div>
          </section>

          <div className="flex justify-center pb-16">
            <button
              type="submit"
              disabled={submitting}
              style={{ background: "#42568C" }}
              className="rounded px-8 py-3 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
    </ErrorCtx.Provider>
  );
}
