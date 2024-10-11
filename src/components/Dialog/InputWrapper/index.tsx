const InputWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return <div className="flex flex-col gap-y-2">{children}</div>;
};

export default InputWrapper;
