import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const growthSteps = [
  {
    duration: "Weeks 1-2",
    items: [
      {
        id: "01",
        title: "What You Do",
        desc: "Use SMM services to build initial followers and engagement",
      },
      {
        id: "02",
        title: "Why it Works",
        desc: "Creates baseline credibility and improves first impression",
      },
      {
        id: "03",
        title: "Estimated Cost/ Time",
        desc: "৳2,000–5,000",
      },
    ],
  },
  {
    duration: "Weeks 3-4",
    items: [
      {
        id: "01",
        title: "What You Do",
        desc: "Start posting consistent, high-quality content",
      },
      {
        id: "02",
        title: "Why it Works",
        desc: "Larger follower base increases organic engagement",
      },
      {
        id: "03",
        title: "Estimated Cost/ Time",
        desc: "Mostly content effort",
      },
    ],
  },
  {
    duration: "Months 2-3",
    items: [
      {
        id: "01",
        title: "What You Do",
        desc: "Continue content + light support if needed",
      },
      {
        id: "02",
        title: "Why it Works",
        desc: "Faster reach, better algorithm response",
      },
      {
        id: "03",
        title: "Estimated Cost/ Time",
        desc: "Reduced SMM usage",
      },
    ],
  },
  {
    duration: "Months 3-6",
    items: [
      {
        id: "01",
        title: "What You Do",
        desc: "Focus mainly on organic growth",
      },
      {
        id: "02",
        title: "Why it Works",
        desc: "Strong engagement pushes content naturally",
      },
      {
        id: "03",
        title: "Estimated Cost/ Time",
        desc: "Minimal or no SMM needed",
      },
    ],
  },
];

const SocialGrowth = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      <Container>
        {/* Header Title */}
        <SectionTitle
          eyebrow="GROWTH"
          title="Growing on Social Media in"
          highlight="Bangladesh"
          description="The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over."
        />

        {/* Responsive Grid: Mobile (1col), Tablet (2col), Desktop (4col) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthSteps.map((card, cardIdx) => (
            <div
              key={cardIdx}
              className="group relative border border-orange-200/80 rounded-[30px] p-5 bg-white shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Badge Header with Hover Glow */}
              <div className="flex justify-center mb-6">
                <div className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-700 text-white font-semibold text-xs sm:text-sm py-2.5 rounded-2xl text-center shadow-xs group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-300">
                  {card.duration}
                </div>
              </div>

              {/* Steps Container */}
              <div className="relative space-y-3.5">
                {/* Vertical Dashed Line connecting dots */}
                <div className="absolute left-[20px] top-6 bottom-6 border-l-2 border-dashed border-orange-300 group-hover:border-orange-500 z-0 pointer-events-none transition-colors duration-300" />

                {card.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="relative z-10 bg-[#F8F9FA] border border-transparent rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-sm"
                  >
                    {/* Header: ID + Title */}
                    <div className="flex items-center space-x-2.5 mb-2">
                      <span className="text-orange-500 font-black text-[11px] border border-orange-200/80 bg-white rounded-lg px-2 py-0.5 shadow-2xs group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        {item.id}
                      </span>
                      <h4 className="text-orange-500 font-bold text-xs sm:text-[13px] tracking-tight">
                        {item.title}
                      </h4>
                    </div>

                    {/* Content Section with Dot */}
                    <div className="flex items-start space-x-2.5 pl-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-1 shrink-0 ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300" />
                      <p className="text-[11px] sm:text-xs text-gray-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialGrowth;
