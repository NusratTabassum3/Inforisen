import { workingStepsData } from "../../data/steps";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Top-Right Orange Glow Effect */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-orange-400 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Bottom-Left Orange Glow Effect */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-400 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionTitle
          eyebrow="WORKING PROCESS"
          title="Grow Your"
          highlight="Socials in 4 Simple Steps"
          description="A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly."
        />

        {/* Steps Grid Container */}
        <div className="mt-12 relative max-w-4xl mx-auto">
          {/* Center Logo/Badge (Only visible on Desktop/Tablet) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-100/70 p-3 backdrop-blur-sm border border-orange-200/50 flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#FF9243] via-[#DD6017] to-[#983200] flex items-center justify-center text-white font-black text-xl shadow-inner">
                H
              </div>
            </div>
          </div>

          {/* 2x2 Grid for Desktop & Tablet, Single column for Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {workingStepsData.map((step) => (
              <div
                key={step.id}
                className="relative bg-orange-50/30 border border-orange-100/60 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
              >
                {/* Dotted Grid Decoration Background */}
                <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className="w-1 h-1 bg-orange-500 rounded-full"
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Step Number */}
                <h3 className="text-3xl font-extrabold text-orange-500 tracking-tight">
                  {step.id}
                </h3>

                {/* Step Title */}
                <h4 className="text-sm font-bold text-gray-800 mt-2 mb-3">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
