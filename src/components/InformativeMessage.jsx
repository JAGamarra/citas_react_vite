export const InformativeMessage = ({ mensaje }) => {
  return (
    <div className="bg-indigo-600 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      <p> {mensaje} </p>
    </div>
  );
};
