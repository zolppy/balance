const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex justify-between items-center">{children}</header>
  );
};

export default Header;
