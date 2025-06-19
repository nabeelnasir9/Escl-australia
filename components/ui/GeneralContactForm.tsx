/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin } from "lucide-react";

interface GeneralContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export default function GeneralContactForm() {
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
  } = useForm<GeneralContactFormData>();

  const onSubmit = async (data: GeneralContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      // Simulate API call
      const response = await fetch("/api/contact-general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Your message has been sent successfully!" });
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#42568C] mb-20 text-center uppercase italic">Let&apos;s Connect</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-4 border border-[#42568C]">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-[#42568C]" />
                </div>
                <div>
                  <div className="">
                    <p className="font-extrabold text-[#42568C] text-lg">Phone:</p>
                    <p className="text-gray-600">+61 439 349 190</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-4 border border-[#42568C]">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-[#42568C]" />
                </div>
                <div>
                  <p className="font-extrabold text-[#42568C] text-lg">E-mail:</p>
                  <p className="text-gray-600">info@elitegsc.com</p>
                </div>
              </div>
            </div>

            {/* Locations Card */}
            <div className="bg-white rounded-xl p-4 border border-[#42568C]">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#42568C]" />
                </div>
                <div>
                  <p className="font-extrabold text-[#42568C] text-lg">Locations:</p>
                  <p className="text-gray-600 leading-relaxed">
                  C4 Level 1, 2 Main Street Point Cook, VIC 3030
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#42568C] mb-20">            
            <div className="space-y-3">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none text-sm ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none text-sm ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: "Phone number is required" })}
                    className={`flex-1 px-4 py-3 rounded-r-lg border transition-colors focus:outline-none text-sm ${
                      errors.phoneNumber ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber.message}</p>}
              </div>

              {/* Company Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register("companyName", { required: "Company name is required" })}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none text-sm ${
                    errors.companyName ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none resize-none text-sm ${
                    errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[#42568C] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div className={`text-center p-3 rounded-lg ${
                  submitStatus.type === "success" 
                    ? "bg-green-50 text-green-600 border border-green-200" 
                    : "bg-red-50 text-red-600 border border-red-200"
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}