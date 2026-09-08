import paymentBgImage from "../../assets/images/payment/payment.png";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const PaymentMethods = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <Container>
        {/* Header */}
        <SectionTitle
          eyebrow="Payment Methods"
          title="Multiple Payment"
          highlight="Methods"
          description="We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order."
        />

        {/* Direct Image Section */}
        <div className="mt-8 md:mt-12 flex justify-center items-center">
          <img
            src={paymentBgImage}
            alt="Multiple Payment Methods"
            className="w-full max-w-4xl h-auto object-contain pointer-events-none"
          />
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethods;
