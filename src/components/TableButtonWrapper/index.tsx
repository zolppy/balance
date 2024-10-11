const TableButtonWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return <div className="flex gap-x-1 w-fit mx-auto">{children}</div>;
};

export default TableButtonWrapper;
