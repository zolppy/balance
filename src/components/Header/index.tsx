import FloatingButton from "../FloatingButton";

const Header = () => {
  return (
    <header className="bg-neutral-900 p-4 fixed top-0 left-0 w-full h-[80px] flex items-center justify-between">
      <h1 className="text-2xl font-bold uppercase">Renda Mensal</h1>
      <FloatingButton />
    </header>
  );
};

export default Header;
