export const Button = ({ className, text, children }) => {
  return (
    <button
      className={`group relative cursor-pointer overflow-hidden px-6 py-2 bg-black text-white font-semibold flex items-center gap-2 ${className}`}
    >
      {/* Text Layer */}
      <span className="relative flex gap-2 items-center justify-center z-10 transition-colors duration-300 group-hover:text-black">
        {children}
        {text}
      </span>

      {/* Green Overlay Layer */}
      <span className="absolute inset-0 w-0 bg-[#21e787] transition-all duration-500 group-hover:w-full z-0"></span>
    </button>
  );
};
