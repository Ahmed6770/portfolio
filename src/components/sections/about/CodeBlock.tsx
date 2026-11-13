import { FileCode } from "lucide-react";

export function CodeBlock() {
  return (
    <div className="w-full max-w-lg bg-cardClass border border-borderClass rounded-2xl overflow-hidden font-mono text-xs md:text-sm shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-bgClass border-b border-borderClass">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-1.5 text-subtextClass text-xs font-medium">
          <FileCode size={13} className="text-primaryClass" />
          <span>ahmed.ts</span>
        </div>
      </div>

      {/* Code Area */}
      <pre className="p-4 md:p-6 overflow-x-auto leading-6 text-textClass">
        <code>
          <span className="text-primaryClass font-bold">
            const</span> ahmed = &#123;{"\n"}
          {"  "}name: <span className="text-emerald-400">"Ahmed Mamdouh"</span>,{"\n"}
          {"  "}role: <span className="text-emerald-400">"Frontend Developer"</span>,{"\n"}
          {"  "}location: <span className="text-emerald-400">"Alexandria, Egypt"</span>,{"\n\n"}
          {"  "}focus: [
          {"\n    "}<span className="text-emerald-400">"React"</span>,
          {"\n    "}<span className="text-emerald-400">"TypeScript"</span>,
          {"\n    "}<span className="text-emerald-400">"UI Development"</span>,
          {"\n  "}],{"\n\n"}
          {"  "}principles: [
          {"\n    "}<span className="text-emerald-400">"Clean Code"</span>,
          {"\n    "}<span className="text-emerald-400">"Thoughtful UI"</span>,
          {"\n    "}<span className="text-emerald-400">"Continuous Growth"</span>,
          {"\n  "}],{"\n\n"}
          {"  "}mindset: <span className="text-emerald-400">"Always building and improving"</span>,{"\n"}
          &#125;;
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
