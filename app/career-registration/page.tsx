import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/ui/Banner";
import CandidateRegistrationSampleForm from "@/components/CandidateRegistrationSample/CandidateRegistrationSampleForm";

export const metadata: Metadata = {
  title: "Candidate Registration",
  description: "Register as a candidate with Meta Talent.",
};

export default function SampleCandidateRegistrationPage() {
  return (
    <div className="min-h-screen bg-white pb-8">
      <Banner
        title="Careers"
        backgroundImage="/Career-us.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
      />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-[#42568C] sm:text-4xl uppercase italic">
            Join Our Team
          </h1>
          <p className="mt-4 text-md text-black italic">
            Fill out the form below to apply for a position at our company.
          </p>
        </div>
        <CandidateRegistrationSampleForm />
      </div>
      <Footer />
    </div>
  );
}
