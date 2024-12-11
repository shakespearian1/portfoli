import { portfolioData } from "../data/portfolioData";

const Portfolios = () => {
  return (
    <>
      <section className="pb-10  md:px-20 px-4" id="/portfolio">
        <h1 className="md:text-5xl text-3xl font-semibold pb-5">Portfolios</h1>
        <p className="md:text-2xl text-lg pb-8">
          Click on the cards to see my portfolios of related category
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {portfolioData.map((portfolio) => (
            <div
              className="bg-gray-400 rounded-2xl px-4 py-6"
              key={portfolio.label}
            >
              <div className="text-5xl pb-5">{portfolio.icon}</div>
              <h2 className="text-lg pb-3">{portfolio.label}</h2>
              <p className="text-xl">{portfolio.des}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolios;
