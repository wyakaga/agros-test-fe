type InputProps = {
  type: string;
  id: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  type,
  id,
  name,
  autoComplete,
  required,
  placeholder,
  disabled,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className="appearance-none border border-[#E8E8E8] rounded-[7px] w-full px-4 py-4 placeholder:text-[#E5E5E5] placeholder:text-sm focus:outline-none focus:ring-secondary focus:border-secondary"
    />
  );
}

export default Input;
