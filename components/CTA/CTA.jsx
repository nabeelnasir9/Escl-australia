export default function CTA() {
  return (
    <div className="bg-[#42568C]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-extrabold text-balance text-white sm:text-5xl">
          Elite Global Service Company - Complete Staffing Solutions{" "}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-white sm:text-[15px] text-[13px] sm:text-center text-justify">
            Our comprehensive services span labour hire and casual staffing,
            executive recruitment, security-cleared government placements, HR
            consulting, workplace safety audits, injury management, and
            professional development training. With deep expertise across
            Manufacturing, Food Processing, Trades, Construction, Mining,
            Healthcare, Government, and Professional sectors, we deliver rapid
            talent solutions, transparent pricing, and 24/7 support nationwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/career"
              className="rounded-md bg-white px-3.5 py-2.5 sm:text-sm text-[12px] font-semibold text-[#42568C] shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Looking for Work?
            </a>
            <a
              href="/contact-us"
              className="sm:text-sm text-[12px] font-semibold text-white border border-white rounded-md px-3.5 py-2.5"
            >
              Looking for Employees?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
