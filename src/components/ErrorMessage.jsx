const ErrorMessage = ({ message, code }) => {
  return (
    <div className="text-red-500 bg-white p-2 rounded-lg">
      {code === 615
        ? "Enter correct name of the city, try to add state or country too"
        : message}
    </div>
  );
};

export default ErrorMessage;
