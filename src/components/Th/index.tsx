const Th: React.FC<{
  children: React.ReactNode;
}> = ({ children }): React.JSX.Element => {
  return (
    <th className="border border-white border-opacity-20 p-2">{children}</th>
  );
};

export default Th;
