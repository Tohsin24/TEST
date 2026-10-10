type Props = {
  company: {
    description: string;
    mission: string;
    vision: string;
    locations: string[];
    email: string;
    phone: string;
  };
};

export default function CompanyContent({
  company,
}: Props) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

        {/* Main Content */}
        <div className="lg:col-span-2">

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Company Overview
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {company.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-blue-950 mb-5">
                Mission
              </h3>

              <p className="text-gray-600 leading-7">
                {company.mission}
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-blue-950 mb-5">
                Vision
              </h3>

              <p className="text-gray-600 leading-7">
                {company.vision}
              </p>
            </div>

          </div>
        </div>

        {/* Sidebar */}
        <div>

          <div className="bg-blue-950 rounded-3xl p-10 text-white sticky top-10">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-blue-100">

              <div>
                <p className="text-sm uppercase text-blue-300 mb-2">
                  Location
                </p>

                <p>{company.locations.join(" • ")}</p>
              </div>

              <div>
                <p className="text-sm uppercase text-blue-300 mb-2">
                  Email
                </p>

                {company.email && (
                  <a href={`mailto:${company.email}`} className="hover:text-white underline-offset-4 hover:underline">
                    {company.email}
                  </a>
                )}
              </div>

              <div>
                <p className="text-sm uppercase text-blue-300 mb-2">
                  Phone
                </p>

                {company.phone && (
                  <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white underline-offset-4 hover:underline">
                    {company.phone}
                  </a>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
