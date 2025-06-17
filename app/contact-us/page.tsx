import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/ui/Banner";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen py-12">
      <Banner
        title="Contact Us"
        // subtitle="Discover our story, mission, and the passionate team behind our success"
        backgroundImage="/Contact-us.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Looking for Staff
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Please fill in the below information for an ESCL Workforce
            representative to contact regarding your requirements.
          </p>
        </div> */}
        <div className="mt-12">
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
