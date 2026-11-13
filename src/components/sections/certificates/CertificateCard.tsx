import type { Certificate } from "./certificatesData";
import { GraduationCap, ZoomIn } from "lucide-react";

type CertificateCardProps = Certificate & {
  onPreview?: () => void;
};

export default function CertificateCard({
  title,
  issuer,
  description,
  issuerIcon,
  status,
  image,
  onPreview,
}: CertificateCardProps) {
  return (
    <div className="bg-cardClass border border-borderClass rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col md:flex-row gap-5 items-center hover:border-primaryClass transition-colors">
      <div className="w-full md:w-52 lg:w-56 shrink-0 aspect-4/3 rounded-xl bg-bgClass border border-borderClass flex items-center justify-center overflow-hidden relative">
        {image ? (
          <button
            type="button"
            onClick={onPreview}
            aria-label={`${title} certificate`}
            className="w-full h-full p-1.5 relative cursor-pointer group"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-bgClass/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cardClass border border-borderClass text-xs font-semibold text-textClass">
                <ZoomIn size={14} className="text-primaryClass" />
                <span>View</span>
              </span>
            </div>
          </button>
        ) : (
          <GraduationCap className="w-10 h-10 text-subtextClass/30" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 gap-2.5 w-full">
        <h3 className="text-base md:text-lg font-bold text-textClass leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-subtextClass font-medium">
          {issuerIcon}
          <span>{issuer}</span>
        </div>

        <span
          className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-bgClass border ${
            status === "In Progress"
              ? "border-primaryClass text-primaryClass"
              : "border-emerald-500 text-emerald-400"
          }`}
        >
          {status}
        </span>

        <p className="text-xs md:text-sm text-subtextClass leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
