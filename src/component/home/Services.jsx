import { useState } from "react";
import fbImage from "../../assets/images/services/Frame.png";
import { facebookFeatures, serviceTabs } from "../../data/services";
import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Facebook");

  return (
    <section className="py-12 bg-white">
      <Container>
        {/* Section Title */}
        <SectionTitle
          eyebrow="our services"
          title="Powerful SMM Services"
          highlight="for Fast Growth"
          description="Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered."
        />

        {/* Tab Buttons Grid with Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 my-8">
          {serviceTabs.map((tab) => {
            const isActive = activeTab === tab.name;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.name)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-md shadow-orange-500/20"
                    : "bg-orange-50/40 text-gray-700 border-orange-100 hover:bg-orange-100"
                }`}
              >
                <Icon
                  className={`text-sm ${isActive ? "text-white" : tab.color}`}
                />
                <span className="truncate">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Card Box */}
        <div className="border border-orange-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Side */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-gradient-to-tr from-orange-200 via-orange-100 to-orange-50 rounded-2xl p-4 w-full max-w-sm flex justify-center">
                <img
                  src={fbImage}
                  alt="Facebook Marketing"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Right Details Side */}
            <div className="lg:col-span-7">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                {activeTab} Marketing Services
              </h3>

              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Boost your brand visibility, connect with your ideal audience,
                and drive more traffic, engagement, and sales through strategic{" "}
                {activeTab} marketing campaigns.
              </p>

              {/* Bullet Features */}
              <div className="space-y-3 mb-6">
                {facebookFeatures.map((item) => (
                  <div key={item.id} className="flex items-start space-x-2">
                    <span className="bg-orange-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                      {item.id}
                    </span>
                    <p className="text-xs text-gray-700">
                      <strong className="text-orange-500 font-semibold">
                        {item.title}{" "}
                      </strong>
                      <span className="text-gray-500">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button
                variant="primary"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xs px-5 py-2.5 rounded-lg shadow-sm"
              >
                View {activeTab} Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
