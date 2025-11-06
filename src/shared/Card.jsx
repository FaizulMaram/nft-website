// Card.jsx
// export const Card = ({ title, description }) => {
//   return (
//     <div className="card flex flex-col items-center bg-gray-900 border-2 border-gray-700 rounded-xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_-4px_10px_#21e787,_-4px_4px_10px_#21e787]">
//       <h2 className="text-xl font-extrabold mb-2 text-[#21e787]">{title}</h2>
//       <p className="text-white font-bold text-sm text-center">{description}</p>
//     </div>
//   );
// };

export const Card = ({ title, description, number }) => {
  return (
    <div className="relative flex flex-col items-center bg-gray-900 border border-gray-700 rounded p-10 transition-all duration-300 group overflow-hidden hover:-translate-y-3 ">
      {/* corner highlights */}
      <span className="absolute top-0 right-0 w-16 h-[4px] bg-[#21e787] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      <span className="absolute top-0 right-0 w-[4px] h-15 bg-[#21e787] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

      <span className="absolute bottom-0 left-0 w-16 h-[4px] bg-[#21e787] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      <span className="absolute bottom-0 left-0 w-[4px] h-15 bg-[#21e787] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

      {/* background number */}
      <span className="absolute top-0 text-center text-[8rem] font-extrabold text-green-700 select-none">
        {number}
      </span>

      <h2 className="text-xl font-extrabold mb-2 text-[#21e787] z-10">
        {title}
      </h2>
      <p className="text-white font-bold text-sm text-center z-10">
        {description}
      </p>
    </div>
  );
};
