import ClickToContinue from "../navigation/ClickToContinue";
import TextBinaryDecode from "../TextBinaryDecode";

const Home: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="animate-text-fade-in home-title inline-block bg-linear-to-r from-indigo-300 via-sky-200 to-white bg-clip-text leading-relaxed text-transparent">
            Gjher Shervine Pahati
          </span>
        </h1>

        <div className="flex flex-col items-center">
          <TextBinaryDecode text="Software Engineer @Witailer" />
          <TextBinaryDecode
            binaryDurationMs={1000}
            text="Bridging Code, Product, and Design"
          />
        </div>

        <ClickToContinue />
      </div>
    </section>
  );
};

export default Home;
