import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

function cn(...inputs: (string | undefined | false | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

const MOVEMENT_DAMPING = 1400;

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [255 / 255, 113 / 255, 107 / 255], 
  glowColor: [0.15, 0.15, 0.15],
  markers: [
    { location: [30.0444, 31.2357], size: 0.08 }, 
    { location: [24.7136, 46.6753], size: 0.06 }, 
    { location: [25.2048, 55.2708], size: 0.06 }, 
    { location: [40.7128, -74.006], size: 0.07 }, 
    { location: [51.5074, -0.1278], size: 0.07 }, 
    { location: [35.6762, 139.6503], size: 0.07 }, 
    { location: [-23.5505, -46.6333], size: 0.06 }, 
    { location: [48.8566, 2.3522], size: 0.06 }, 
  ],
};

export interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export function Globe({ className, config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      targetRotation.current += delta / MOVEMENT_DAMPING;
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const initialWidth = (widthRef.current || 400) * 2;
    const initialHeight = (widthRef.current || 400) * 2;

    const globe = createGlobe(canvasRef.current, {
      ...DEFAULT_CONFIG,
      ...config,
      width: initialWidth,
      height: initialHeight,
    });

    let animationFrameId: number;

    const render = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.004;
      }
      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.08;
      const currentWidth = (widthRef.current || 400) * 2;
      globe.update({
        phi: phiRef.current + currentRotation.current,
        width: currentWidth,
        height: currentWidth,
      });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 50);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700 cursor-grab [contain:layout_paint_size]"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default Globe;

