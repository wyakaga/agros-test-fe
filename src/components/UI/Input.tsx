type InputProps = {
  type: string;
  id: string;
  name: string;
  autoComplete?: string;
  required: boolean;
  placeholder?: string;
};

function Input({
  type,
  id,
  name,
  autoComplete,
  required,
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className="appearance-none border border-[#E8E8E8] rounded-[7px] w-full px-4 py-4 placeholder:text-[#E5E5E5] placeholder:text-sm focus:outline-none focus:ring-secondary focus:border-secondary"
    />
  );
}

export default Input;
