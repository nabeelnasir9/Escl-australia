import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const servicesItems = [
    { name: "Labour Hire & Casual Staffing", href: "/services/labour-hire-casual-staffing" },
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment" },
    { name: "Government Staffing", href: "/services/government-staffing" },
    { name: "HR & Workforce Consulting", href: "/services/hr-workforce-consulting" },
    { name: "Workplace Safety & WHS", href: "/services/workplace-safety-whs" },
    { name: "Training & Development", href: "/services/training-development" },
  ];

  const aboutItems = [
    { name: "Overview", href: "/about/overview" },
    { name: "Vision", href: "/about/vision" },
    { name: "Mission", href: "/about/mission" },
  ];

  const companyItems = [
    ...aboutItems,
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="tracking-wide bg-white px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-6 border-t border-[#42568C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/eclsa.png"
                alt="ESLCSA logo"
                width={244}
                height={140}
                className="w-auto h-20 sm:h-20 lg:h-22"
              />
            </Link>
            <div className="mt-4 sm:mt-6">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-sm">
              EGSC delivers innovative industrial long-lasting solutions at a
                high standard of quality, economy and at the delivery time you
                require.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-[#42568C] font-extrabold text-base sm:text-lg lg:text-lg mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {companyItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 text-slate-600 text-sm sm:text-base lg:text-sm font-normal transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Column */}
          <div className="col-span-1">
            <h4 className="text-[#42568C] font-extrabold text-base sm:text-lg lg:text-lg mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {servicesItems.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-slate-900 text-slate-600 text-sm sm:text-base lg:text-sm font-normal leading-relaxed transition-colors duration-200 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
        

          {/* Contact Information Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-[#42568C] font-extrabold text-base sm:text-lg lg:text-lg mb-4 sm:mb-6">
              Contact
            </h4>
            <div className="space-y-4 sm:space-y-5">
              {/* Locations */}
              <div className="text-slate-600">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#42568C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700 text-sm sm:text-base lg:text-sm mb-1">
                      Locations:
                    </p>
                    <p className="leading-relaxed text-sm sm:text-base lg:text-sm">
                      Melbourne | Sydney | Brisbane | Adelaide | Perth
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#42568C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700 text-sm sm:text-base lg:text-sm mb-1">
                      Email:
                    </p>
                    <Link 
                      href="mailto:info@eliteglobalservice.com"
                      className="hover:text-slate-900 transition-colors duration-200 text-sm sm:text-base lg:text-sm break-all"
                    >
                      info@eliteglobalservice.com
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#42568C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700 text-sm sm:text-base lg:text-sm mb-1">
                      Phone:
                    </p>
                    <Link 
                      href="tel:1300000000"
                      className="hover:text-slate-900 transition-colors duration-200 text-sm sm:text-base lg:text-sm"
                    >
                      1300 000 000
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 sm:mt-10 mb-4 sm:mb-6 border-[#42568C]" />

        <div className="text-center">
          <p className="text-[#42568C] text-xs sm:text-sm font-medium italic">
            Copyright ©2025 EGSC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;