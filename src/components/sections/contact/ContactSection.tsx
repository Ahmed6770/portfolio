import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section
      id="contact"
      className="page-section flex flex-col justify-start md:justify-center overflow-x-hidden pt-20 pb-16 md:py-12"
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <ContactInfo />

          {/* Right Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
