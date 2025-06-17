"use client";

import { useState } from "react";
import { useForm, FieldError, UseFormRegisterReturn } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiClock,
  FiSettings,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { HiBuildingOffice } from "react-icons/hi2";
import { IconType } from "react-icons";

interface FormData {
  // Contact Information
  name: string;
  phoneNumber: string;
  mobileNumber: string;
  landlineNumber?: string;
  email: string;

  // Company Information
  companyName: string;
  companyAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  comments: string;

  // Further Details
  positionTitle: string;
  numberOfPositions: string;
  siteAddress: string;
  lengthOfAssignment: string;
  startDate: string;
  detailedDescription: string;
  awardName: string;
  shiftRequirements: string;
}

interface InputFieldProps {
  icon: IconType;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: FieldError;
  register: UseFormRegisterReturn;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export default function ContactUsForm() {
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
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    icon: Icon,
    label,
    name,
    type = "text",
    required = false,
    error,
    register,
    placeholder = "",
    rows,
    className = "",
  }: InputFieldProps) => (
    <div className={`relative ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-slate-400" />
        </div>
        {type === "textarea" ? (
          <textarea
            id={name}
            rows={rows || 3}
            placeholder={placeholder}
            {...register}
            className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-200 bg-white/50 backdrop-blur-sm ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
            } focus:ring-4 focus:outline-none`}
          />
        ) : (
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            {...register}
            className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-200 bg-white/50 backdrop-blur-sm ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
            } focus:ring-4 focus:outline-none`}
          />
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <FiAlertCircle className="h-4 w-4" />
          {error.message}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen mt-20 mb-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Banner - Keep unchanged as requested */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#42568C] sm:text-4xl uppercase italic">
            Looking for Staff
          </h1>
          <p className="mt-4 text-md text-black italic">
            Please fill in the below information for an ESCL Workforce
            representative to contact regarding your requirements.
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Information Section */}
          <div className="backdrop-blur-lg p-8 rounded-2xl border border-[#42568C]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#42568C20] rounded-lg">
                <FiUser className="h-6 w-6 text-[#42568C]" />
              </div>
              <h2 className="sm:text-2xl text-lg font-bold text-slate-800 uppercase">
                Contact Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InputField
                icon={FiUser}
                label="Full Name"
                name="name"
                required
                error={errors.name}
                register={register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
              />

              <InputField
                icon={FiMail}
                label="Email Address"
                name="email"
                type="email"
                required
                error={errors.email}
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="your.name@company.com"
              />

              <InputField
                icon={FiPhone}
                label="Primary Phone"
                name="phoneNumber"
                type="tel"
                required
                error={errors.phoneNumber}
                register={register("phoneNumber", {
                  required: "Phone number is required",
                })}
                placeholder="+61 XXX XXX XXX"
              />

              <InputField
                icon={FiPhone}
                label="Mobile Number"
                name="mobileNumber"
                type="tel"
                required
                error={errors.mobileNumber}
                register={register("mobileNumber", {
                  required: "Mobile number is required",
                })}
                placeholder="+61 4XX XXX XXX"
              />

              <InputField
                icon={FiPhone}
                label="Landline Number"
                name="landlineNumber"
                type="tel"
                error={errors.landlineNumber}
                register={register("landlineNumber")}
                placeholder="Optional landline"
                className="lg:col-span-1"
              />
            </div>
          </div>

          {/* Company Information Section */}
          <div className="bg-white backdrop-blur-lg p-8 rounded-2xl border border-[#42568C]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#42568C20] rounded-lg">
                <HiBuildingOffice className="h-6 w-6 text-[#42568C]" />
              </div>
              <h2 className="sm:text-2xl text-lg font-bold text-slate-800 uppercase">
                Company Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InputField
                icon={HiBuildingOffice}
                label="Company Name"
                name="companyName"
                required
                error={errors.companyName}
                register={register("companyName", {
                  required: "Company name is required",
                })}
                placeholder="Your Company Pty Ltd"
                className="lg:col-span-2"
              />

              <InputField
                icon={FiMapPin}
                label="Company Address"
                name="companyAddress"
                required
                error={errors.companyAddress}
                register={register("companyAddress", {
                  required: "Company address is required",
                })}
                placeholder="Street address"
                className="lg:col-span-2"
              />

              <InputField
                icon={FiMapPin}
                label="Suburb"
                name="suburb"
                required
                error={errors.suburb}
                register={register("suburb", {
                  required: "Suburb is required",
                })}
                placeholder="Suburb"
              />

              <InputField
                icon={FiMapPin}
                label="State"
                name="state"
                required
                error={errors.state}
                register={register("state", { required: "State is required" })}
                placeholder="State/Territory"
              />

              <InputField
                icon={FiMapPin}
                label="Postcode"
                name="postcode"
                required
                error={errors.postcode}
                register={register("postcode", {
                  required: "Postcode is required",
                })}
                placeholder="XXXX"
              />

              <InputField
                icon={FiFileText}
                label="Additional Comments"
                name="comments"
                type="textarea"
                error={errors.comments}
                register={register("comments")}
                placeholder="Any additional information about your company..."
                className="lg:col-span-2"
                rows={3}
              />
            </div>
          </div>

          {/* Further Details Section */}
          <div className="backdrop-blur-lg p-8 rounded-2xl border border-[#42568C]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#42568C20] rounded-lg">
                <FiBriefcase className="h-6 w-6 text-[#42568C]" />
              </div>
              <h2 className="sm:text-2xl text-lg font-bold text-slate-800 uppercase">
                Position Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InputField
                icon={FiBriefcase}
                label="Position Title"
                name="positionTitle"
                required
                error={errors.positionTitle}
                register={register("positionTitle", {
                  required: "Position title is required",
                })}
                placeholder="e.g. Senior Software Engineer"
              />

              <InputField
                icon={FiUsers}
                label="Number of Positions"
                name="numberOfPositions"
                type="number"
                required
                error={errors.numberOfPositions}
                register={register("numberOfPositions", {
                  required: "Number of positions is required",
                })}
                placeholder="e.g. 5"
              />

              <InputField
                icon={FiMapPin}
                label="Work Site Address"
                name="siteAddress"
                required
                error={errors.siteAddress}
                register={register("siteAddress", {
                  required: "Site address is required",
                })}
                placeholder="Where will the work be performed?"
                className="lg:col-span-2"
              />

              <InputField
                icon={FiClock}
                label="Assignment Duration"
                name="lengthOfAssignment"
                required
                error={errors.lengthOfAssignment}
                register={register("lengthOfAssignment", {
                  required: "Length of assignment is required",
                })}
                placeholder="e.g. 6 months, Permanent, Contract"
              />

              <InputField
                icon={FiCalendar}
                label="Start Date"
                name="startDate"
                type="date"
                required
                error={errors.startDate}
                register={register("startDate", {
                  required: "Start date is required",
                })}
              />

              <InputField
                icon={FiFileText}
                label="Position Description"
                name="detailedDescription"
                type="textarea"
                required
                error={errors.detailedDescription}
                register={register("detailedDescription", {
                  required: "Detailed description is required",
                })}
                placeholder="Detailed description of duties, responsibilities, and requirements..."
                className="lg:col-span-2"
                rows={4}
              />

              <InputField
                icon={FiSettings}
                label="Award/EBA"
                name="awardName"
                required
                error={errors.awardName}
                register={register("awardName", {
                  required: "Award name is required",
                })}
                placeholder="e.g. IT Services Award 2020"
              />

              <InputField
                icon={FiClock}
                label="Shift Requirements"
                name="shiftRequirements"
                required
                error={errors.shiftRequirements}
                register={register("shiftRequirements", {
                  required: "Shift requirements is required",
                })}
                placeholder="e.g. 9-5 Mon-Fri, Rotating shifts"
              />
            </div>
          </div>

          {/* Submit Section */}
          <div className="p-8">
            <div className="text-center space-y-6">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="group relative px-8 py-4 bg-[#42568C] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-200 disabled:opacity-50 disabled:transform-none min-w-[200px]"
              >
                <div className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Submit Request
                    </>
                  )}
                </div>
              </button>

              <p className="text-[12px] text-slate-600 italic">
                Our workforce specialist will contact you within 24 hours
              </p>
            </div>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-6 rounded-xl border-2 ${
                submitStatus.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center gap-3">
                {submitStatus.type === "success" ? (
                  <FiCheckCircle className="h-6 w-6 text-emerald-600" />
                ) : (
                  <FiAlertCircle className="h-6 w-6 text-red-600" />
                )}
                <span className="font-medium">{submitStatus.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}