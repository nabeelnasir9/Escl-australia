"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiPhone, HiDocument, HiUser, HiBriefcase } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: FileList;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("resume", data.resume[0]);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Your application has been submitted successfully!",
        });
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit application",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 mb-20">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-[#42568C] sm:text-4xl uppercase italic">
          Join Our Team
        </h1>
        <p className="mt-4 text-md text-black italic">
          Fill out the form below to apply for a position at our company.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 rounded-xl">
        <div className="relative bg-white rounded-xl border border-[#42568C]">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-[#42568C] px-6 py-10 sm:px-10 xl:p-12 rounded-xl">
              {/* Background decorative SVG */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 sm:hidden"
              >
                <svg
                  fill="none"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      x2="961.66"
                      y1="107.554"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
              >
                <svg
                  fill="none"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      x2="899.66"
                      y1="28.553"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
              >
                <svg
                  fill="none"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      x2="899.66"
                      y1="325.553"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className="text-lg font-medium text-white">Join Our Team</h3>
              <p className="mt-6 max-w-3xl text-base text-indigo-50">
                Ready to make an impact? We&apos;re looking for talented
                individuals to join our growing team. Submit your application
                and let&apos;s build something amazing together.
              </p>

              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <HiPhone
                    aria-hidden="true"
                    className="size-6 shrink-0 text-indigo-200"
                  />
                  <span className="ml-3">+61 439 349 190</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <FiMail
                    aria-hidden="true"
                    className="size-6 shrink-0 text-indigo-200"
                  />
                  <span className="ml-3">info@elitegsc.com</span>
                </dd>
              </dl>
            </div>

            {/* Application form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Submit Your Application
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name", { required: "Name is required" })}
                      className={`block w-full pl-10 rounded-md border ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`block w-full pl-10 rounded-md border ${
                        errors.email ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\-\s()]*$/,
                          message: "Invalid phone number",
                        },
                      })}
                      className={`block w-full pl-10 rounded-md border ${
                        errors.phone ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500`}
                      placeholder="+61 X XXXX XXXX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Position */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Position Applied For
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiBriefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="position"
                      type="text"
                      {...register("position", {
                        required: "Position is required",
                      })}
                      className={`block w-full pl-10 rounded-md border ${
                        errors.position ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500`}
                      placeholder=""
                    />
                  </div>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.position.message}
                    </p>
                  )}
                </div>

                {/* Resume Upload */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Resume (PDF only)
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <HiDocument className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      {...register("resume", {
                        required: "Resume is required",
                        validate: {
                          fileType: (value) =>
                            value[0]?.type === "application/pdf" ||
                            "Only PDF files are allowed",
                          fileSize: (value) =>
                            value[0]?.size <= 5 * 1024 * 1024 ||
                            "File size must be less than 5MB",
                        },
                      })}
                      className={`block w-full pl-10 rounded-md border ${
                        errors.resume ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-indigo-500
                        file:mr-4 file:py-1 file:px-3
                        file:rounded-md file:border-0
                        file:text-sm file:font-medium
                        file:bg-indigo-50 file:text-indigo-700
                        hover:file:bg-indigo-100`}
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Upload your resume in PDF format (max 5MB)
                  </p>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.resume.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#42568C] px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-black focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className="sm:col-span-2">
                    <div
                      className={`mt-4 p-4 rounded-md ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : "bg-red-50 border border-red-200 text-red-700"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
