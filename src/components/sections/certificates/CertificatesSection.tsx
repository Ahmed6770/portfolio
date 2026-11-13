import { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateZoom from "./CertificateZoom";
import { certificatesData, type Certificate } from "./certificatesData";

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="page-section relative flex flex-col justify-start md:justify-center overflow-x-hidden pt-20 pb-16 md:py-12"
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-1 bg-primaryClass rounded-full" />
          <span className="text-xs md:text-sm font-medium text-subtextClass">
            Learning & Certifications
          </span>
        </div>

        {/* Section heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-textClass mb-3">
          Learning & <span className="text-primaryClass">Certifications</span>
        </h2>

        {/* Description */}
        <p className="text-xs md:text-sm text-subtextClass max-w-2xl leading-relaxed">
          Courses and certificates that built my foundation in frontend development and computer science.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              onPreview={() => setActiveCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Zoom Popup */}
      {activeCert?.image && (
        <CertificateZoom
          image={activeCert.image}
          title={activeCert.title}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
