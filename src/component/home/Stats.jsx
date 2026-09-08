import { statsData } from "../../data/stats";
import Container from "../common/Container";

const Stats = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-orange-50/50 to-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center space-y-3"
            >
              {/* 3D Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center mb-1">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Number/Value */}
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-xs font-medium text-orange-500 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
