// Card.jsx
export const Card = ({ title, description }) => {
  return (
    <div className="card flex flex-col items-center bg-gray-900 border-2 border-gray-700 rounded-xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_-4px_10px_#21e787,_-4px_4px_10px_#21e787]">
      <h2 className="text-xl font-extrabold mb-2 text-[#21e787]">{title}</h2>
      <p className="text-white font-bold text-sm text-center">{description}</p>
    </div>
  );
};
