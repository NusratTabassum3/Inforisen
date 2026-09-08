import { advantageList, advantagesHeader } from "../../data/advantagesData";
import Container from "../common/Container";

const Advantages = () => {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex flex-col items-center mb-2">
            <span className="text-orange-500 font-extrabold text-xs tracking-widest uppercase mb-1">
              {advantagesHeader.eyebrow}
            </span>
            <div className="relative flex items-center justify-center w-16 h-1">
              <div className="w-full h-[1.5px] bg-orange-400" />
              <div className="absolute w-2 h-2 bg-orange-500 rounded-full border border-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {advantagesHeader.title}{" "}
            <span className="text-orange-500">
              {advantagesHeader.highlight}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
            {advantagesHeader.description}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {advantageList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 sm:p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                {item.description}
                {item.highlightText && (
                  <span
                    className={`block font-semibold mt-1 ${item.highlightColor}`}
                  >
                    {item.highlightText}
                  </span>
                )}
                {item.hasArrow && (
                  <span className="inline-block text-emerald-500 ml-1 font-bold">
                    ➔
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
