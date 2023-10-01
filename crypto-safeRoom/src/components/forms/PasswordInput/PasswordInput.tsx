import React, { useState } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
}

const PasswordInput: React.FC<InputProps> = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>}
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
};

export default PasswordInput;
