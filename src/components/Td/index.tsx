const Td: React.FC<{
  children: React.ReactNode;
}> = ({ children }): React.JSX.Element => {
  return (
    <td className="border border-white border-opacity-20 p-2 text-center">
      {children}
    </td>
  );
};

export default Td;
