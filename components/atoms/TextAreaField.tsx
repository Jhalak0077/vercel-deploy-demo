interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  rows?: number;
  placeholder?: string;
}

const TextAreaField = ({
  id,
  name,
  label,
  rows = 3,
  placeholder,
}: TextAreaFieldProps) => (
  <div className="flex flex-col w-full">
    <label
      htmlFor={id}
      className="text-sm text-[#ffff] mb-1"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="bg-[#111111] border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500 resize-none w-full"
    />
  </div>
);

export default TextAreaField;
