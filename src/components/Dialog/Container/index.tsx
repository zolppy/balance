const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return (
    <div className="bg-black text-white border border-white min-w-[320px] w-[90%] max-w-[520px] mx-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-3 flex flex-col gap-y-6">
      {children}
    </div>
  );
};

export default Container;
