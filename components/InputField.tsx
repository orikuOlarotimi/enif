interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

function InputField({ label, name, type = "text" }: InputFieldProps) {
  return (
    <div className="flex flex-col relative flex-1">
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="peer p-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
      />
      <label
        htmlFor={name}
        className="
    absolute left-3 top-3 text-gray-400 text-sm transition-all duration-200
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-gray-400
    peer-placeholder-shown:text-base
    peer-focus:top-[-0.5rem]
    peer-focus:text-purple-600
    peer-focus:text-sm
    peer-not-placeholder-shown:top-[-0.5rem]
    peer-not-placeholder-shown:text-purple-600
    peer-not-placeholder-shown:text-sm
  "
      >
        {label}
      </label>
    </div>
  );
}
export default InputField;
