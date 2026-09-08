import { FaStar } from "react-icons/fa";
import { heroData } from "../../data/hero";
import Button from "../common/Button";
import Container from "../common/Container";

import heroPerson from "../../assets/images/hero/New Hero img.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-50/40 to-white pt-12 pb-16 lg:pt-20 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Rating Badge */}
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-white/80 px-3 py-1 text-xs shadow-sm backdrop-blur-sm border border-orange-100">
              <span className="text-emerald-500">★</span>
              <div className="flex space-x-0.5 text-orange-500 text-[10px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="font-medium text-gray-700 text-[11px]">
                {heroData.ratingText}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
              <span className="text-orange-500 block sm:inline">
                {heroData.titleHighlight}{" "}
              </span>
              <span>{heroData.titleMain} </span>
              <span className="text-gray-900">{heroData.titleSub}</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600 max-w-2xl">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={heroData.secondaryBtnLink}
                variant="outline"
                className="shadow-sm"
              >
                {heroData.secondaryBtnText}
              </Button>
              <Button
                href={heroData.primaryBtnLink}
                variant="primary"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md"
              >
                {heroData.primaryBtnText}
              </Button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Background Shapes/Graphics */}
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-orange-400/20 blur-2xl" />
              <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-orange-300/30 blur-xl" />

              {/* Main Illustration / Image */}
              <div className="relative mx-auto flex items-center justify-center">
                <img
                  src={heroPerson}
                  alt="Best SMM Panel Bangladesh"
                  className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
