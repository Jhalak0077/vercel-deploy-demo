interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
}

const InputField = ({
  id,
  name,
  type = 'text',
  placeholder,
  label,
}: InputFieldProps) => (
  // <div className="flex flex-col">
  //   <label
  //     htmlFor={id}
  //     className="text-sm  mb-1"
  //   >
  //     {label}
  //   </label>
  //   <input
  //     id={id}
  //     name={name}
  //     type={type}
  //     placeholder={placeholder}
  //     className="bg-[#111111] border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500"
  //   />
  // </div>
  <div className="flex flex-col w-full">
    <label
      htmlFor={id}
      className="text-sm mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="bg-[#111111] border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500 w-full"
    />
  </div>
);

export default InputField;
