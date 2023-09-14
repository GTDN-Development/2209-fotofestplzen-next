type Props = {
  as?: React.ElementType;
  id: string;
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Select({
  as: Tag = "div",
  id = "select-id",
  name = "select",
  label = "Select label",
  isDisabled = false,
  isRequired = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Tag className={`relative block w-full ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={`h-auto w-full rounded-md border
      border-body bg-gray-100 px-4 py-3 text-base 
      font-normal text-body transition duration-150 
      placeholder:text-body placeholder:opacity-60 
      focus:border-primary focus:bg-white focus:!outline-none focus:ring-4 focus:ring-primary ${
        isDisabled
          ? "pointer-events-none cursor-not-allowed opacity-60"
          : "cursor-pointer opacity-100"
      }`}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      >
        {children}
      </select>
    </Tag>
  );
}
