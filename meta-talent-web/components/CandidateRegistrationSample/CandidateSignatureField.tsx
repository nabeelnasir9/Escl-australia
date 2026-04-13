"use client";

import { useCallback, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="block text-sm font-medium text-gray-800 mb-2">{children}</p>
  );
}

export default function CandidateSignatureField() {
  const [mode, setMode] = useState<"draw" | "upload">("draw");

  // Draw pad
  const sigRef = useRef<SignatureCanvas>(null);
  const hiddenDrawRef = useRef<HTMLInputElement>(null);

  const syncDraw = useCallback(() => {
    const pad = sigRef.current;
    const hidden = hiddenDrawRef.current;
    if (!hidden) return;
    hidden.value = !pad || pad.isEmpty() ? "" : pad.toDataURL("image/png");
  }, []);

  const handleClear = useCallback(() => {
    sigRef.current?.clear();
    syncDraw();
  }, [syncDraw]);

  // Upload
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const hiddenUploadRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setUploadPreview(dataUrl);
      if (hiddenUploadRef.current) hiddenUploadRef.current.value = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveUpload = () => {
    setUploadPreview(null);
    if (hiddenUploadRef.current) hiddenUploadRef.current.value = "";
  };

  return (
    <div className="space-y-3">
      <FieldLabel>Candidate Signature</FieldLabel>

      {/* Tab switcher */}
      <div className="flex rounded-lg border border-slate-200 bg-slate-100 p-1 w-fit gap-1">
        {(["draw", "upload"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setMode(tab)}
            className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${
              mode === tab
                ? "bg-white shadow text-slate-900"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab === "draw" ? "Draw Signature" : "Upload Signature"}
          </button>
        ))}
      </div>

      {/* Hidden inputs — only one will have a value depending on mode */}
      <input type="hidden" name="candidateSignature" ref={hiddenDrawRef} defaultValue="" />
      <input type="hidden" name="candidateSignatureUpload" ref={hiddenUploadRef} defaultValue="" />

      {/* Draw mode */}
      {mode === "draw" && (
        <div className="space-y-3">
          <div
            className="rounded-2xl border-2 border-dashed border-slate-300/90 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_14px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60"
            role="group"
            aria-label="Draw your signature in the box"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-white">
              <SignatureCanvas
                ref={sigRef}
                penColor="#0f172a"
                minWidth={0.6}
                maxWidth={2.4}
                velocityFilterWeight={0.65}
                clearOnResize={true}
                onEnd={syncDraw}
                canvasProps={{
                  className:
                    "box-border block h-full w-full min-h-0 touch-none cursor-crosshair bg-white",
                }}
              />
            </div>
          </div>
          <p className="text-[11px] font-medium tracking-wide text-slate-400/90">
            Sign inside the box with mouse or finger.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Clear signature
          </button>
        </div>
      )}

      {/* Upload mode */}
      {mode === "upload" && (
        <div className="space-y-3">
          {!uploadPreview ? (
            <label className="flex flex-col items-center justify-center w-full h-[200px] rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
              <svg
                className="w-10 h-10 text-slate-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <span className="text-sm text-slate-500 font-medium">Click to upload signature image</span>
              <span className="text-xs text-slate-400 mt-1">PNG, JPG, JPEG supported</span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src={uploadPreview}
                alt="Uploaded signature"
                className="max-h-[200px] w-full object-contain rounded-xl"
              />
              <button
                type="button"
                onClick={handleRemoveUpload}
                className="mt-3 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                Remove &amp; re-upload
              </button>
            </div>
          )}
          <p className="text-[11px] font-medium tracking-wide text-slate-400/90">
            Upload an image of your handwritten signature.
          </p>
        </div>
      )}
    </div>
  );
}
