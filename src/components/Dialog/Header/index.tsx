const Header: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return (
    <header className="flex justify-between items-center">{children}</header>
  );
};

export default Header;
