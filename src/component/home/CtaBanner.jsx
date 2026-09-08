import { ctaData } from "../../data/ctaData";
import Button from "../common/Button";
import Container from "../common/Container";

// Assets Import
import girlImage from "../../assets/images/cta/girl.png";
import mapImage from "../../assets/images/cta/map.png";

const CtaBanner = () => {
  return (
    <section className="py-16 bg-white overflow-visible">
      <Container>
        {/* Main Banner Card Box */}
        <div className="relative bg-[#FFF8F0] border border-orange-100/80 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden lg:overflow-visible">
          {/* Background Map Image */}
          <img
            src={mapImage}
            alt="World Map Background"
            className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (Text + Buttons) */}
            <div className="lg:col-span-8 max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                {ctaData.title}{" "}
                <span className="text-orange-500">{ctaData.highlight}</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8 font-medium">
                {ctaData.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-100 text-xs px-6 py-3 rounded-xl font-bold"
                >
                  {ctaData.btnSecondary}
                </Button>

                <Button
                  variant="primary"
                  className="bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white text-xs px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                >
                  {ctaData.btnPrimary}
                </Button>
              </div>
            </div>

            {/* Right Side Girl Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
              <img
                src={girlImage}
                alt="Growth Consultant"
                className="w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] h-auto object-contain lg:absolute lg:bottom-0 lg:right-2 lg:translate-y-40 drop-shadow-md z-10"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaBanner;
