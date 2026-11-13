import { X } from "lucide-react";

type CertificateZoomProps = {
  image: string;
  title: string;
  onClose: () => void;
};

export default function CertificateZoom({
  image,
  title,
  onClose,
}: CertificateZoomProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
    >
      {/* Floating Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-cardClass/80 border border-borderClass text-subtextClass hover:text-textClass flex items-center justify-center cursor-pointer active:scale-95 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Zoomed Certificate Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[85vh]"
      >
        <img
          src={image}
          alt={title}
          className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
