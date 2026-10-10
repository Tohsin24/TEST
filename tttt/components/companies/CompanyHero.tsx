type Props = {
  company: {
    name: string;
    industry: string;
    tagline: string;
  };
};

export default function CompanyHero({
  company,
}: Props) {
  return (
    <section className="bg-blue-950 text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <span className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold">
          {company.industry}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight max-w-5xl">
          {company.name}
        </h1>

        <p className="text-xl text-blue-100 mt-8 max-w-3xl leading-9">
          {company.tagline}
        </p>

      </div>
    </section>
  );
}
