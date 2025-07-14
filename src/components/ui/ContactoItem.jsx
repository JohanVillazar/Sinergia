import React from "react";
const ContactoItem = ({ icon, label, text }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-[#e64d24] rounded-full flex items-center justify-center">
      {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
    </div>
    <div>
      <p className="font-semibold text-[#333]">{label}</p>
      <p className="text-gray-600 break-words">{text}</p>
    </div>
  </div>
);

export default ContactoItem;