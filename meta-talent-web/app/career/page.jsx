import ContactForm from '@/components/Career/ContactForm';
import Footer from "@/components/Footer/Footer"
import Banner from "@/components/ui/Banner";


export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <Banner
        title="Careers"
        // subtitle="Discover our story, mission, and the passionate team behind our success"
        backgroundImage="/Career-us.jpg"
        height="xl"
        priority={true} // Above the fold image
        enableAnimation={true}
        animationDelay={300}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to apply for a position at our company.
          </p>
        </div> */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
} 