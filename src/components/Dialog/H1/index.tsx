const H1: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return <h1 className="font-bold text-xl">{children}</h1>;
};

export default H1;
