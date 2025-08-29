function Result({ price }) {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold text-gray-700">
        Predicted Car Price:
      </h2>
      <p className="text-2xl font-bold text-green-600 mt-2">
        ₹ {price.toLocaleString("en-IN")}
      </p>
    </div>
  );
}

export default Result;
