function Result({ price }) {
  return (
    <div className="mt-8 flex justify-center px-4">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 md:p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-md text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-3 tracking-wide">
          🚗 Predicted Car Price
        </h2>
        <p className="text-2xl md:text-4xl font-extrabold text-green-300 drop-shadow-md">
          ₹ {price.toLocaleString("en-IN")}
        </p>
        <p className="mt-2 text-xs md:text-sm opacity-80">
          Based on real-time market data and AI analysis
        </p>
      </div>
    </div>
  );
}

export default Result;
