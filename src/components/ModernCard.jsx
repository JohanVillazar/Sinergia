const ModernCard = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-[#e64d24] text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default ModernCard;
