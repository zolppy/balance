const EditButton = ({
  handleEditMovimentation,
}: {
  handleEditMovimentation: () => void;
}) => {
  return (
    <button
      type="submit"
      onClick={handleEditMovimentation}
      className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
    >
      Aplicar
    </button>
  );
};

export default EditButton;
