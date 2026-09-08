import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { faqHeader, faqList } from "../../data/faqData";
import Container from "../common/Container";

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const halfLength = Math.ceil(faqList.length / 2);
  const leftColumn = faqList.slice(0, halfLength);
  const rightColumn = faqList.slice(halfLength);

  const renderFaqCard = (item) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white border-orange-500 shadow-md"
            : "bg-[#F5F5F5] text-gray-800 border-orange-200/60 hover:border-orange-300"
        }`}
      >
        <button
          onClick={() => toggleFaq(item.id)}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
        >
          <span
            className={`font-bold text-xs sm:text-sm tracking-tight ${
              isOpen ? "text-white" : "text-gray-800"
            }`}
          >
            {item.question}
          </span>
          <span className="ml-3 shrink-0 text-xs sm:text-sm">
            {isOpen ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </span>
        </button>

        {isOpen && (
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-[11px] sm:text-xs leading-relaxed text-orange-50/90 font-normal">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <Container>
        {/* Header Section with Center Dot Line */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex flex-col items-center mb-2">
            <span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-1">
              {faqHeader.eyebrow}
            </span>
            <div className="relative flex items-center justify-center w-16 h-1">
              <div className="w-full h-[1.5px] bg-orange-400" />
              <div className="absolute w-2 h-2 bg-orange-500 rounded-full border border-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {faqHeader.title}{" "}
            <span className="text-orange-500">{faqHeader.highlight}</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
            {faqHeader.description}
          </p>
        </div>

        {/* FAQ 2-Column Grid (Mobile-এ ১ কলাম, Desktop/Tablet-এ ২ কলাম) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          <div className="space-y-4">{leftColumn.map(renderFaqCard)}</div>
          <div className="space-y-4">{rightColumn.map(renderFaqCard)}</div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
