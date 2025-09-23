import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

const CarForm = ({ setPredictedPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    year: 2023,
    km_driven: 7000,
    fuel: "",
    seller_type: "",
    transmission: "",
    owner: "",
    mileage: 15,
    engine: 1200,
    max_power: 85,
    seats: 5,
  });

  const brands = [
    "Maruti","Skoda","Honda","Hyundai","Toyota","Ford","Renault",
    "Mahindra","Tata","Chevrolet","Datsun","Jeep","Mercedes-Benz",
    "Mitsubishi","Audi","Volkswagen","BMW","Nissan","Lexus",
    "Jaguar","Land","MG","Volvo","Daewoo","Kia","Force",
    "Ambassador","Ashok","Isuzu","Opel"
  ];

  const fuelTypes = ["Petrol", "Diesel", "CNG", "LPG"];
  const sellerTypes = ["Individual", "Dealer", "Trustmark Dealer"];
  const transmissionTypes = ["Manual", "Automatic"];
  const ownerTypes = ["First Owner", "Second Owner", "Third Owner", "Fourth & Above Owner", "Test Drive Car"];
  const seatOptions = [5, 6, 7, 8, 9, 10];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name, value) => {
    setFormData({ ...formData, [name]: Number(value) });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${API_BASE}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch prediction");
    }

    const data = await res.json();
    setPredictedPrice(data.predicted_price);
  } catch (error) {
    console.error("Prediction error:", error);
  }
};

  return (
  <form
    className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl space-y-8 mt-24 border border-gray-100"
    onSubmit={handleSubmit}
  >
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Predict Your Car Price
      </h2>
      <p className="text-gray-600 mt-2">
        Fill in your car details below and let our AI estimate the true value 🚗💰
      </p>
    </div>

    {/* Brand & Year */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Car Brand</label>
        <select
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">
          Year: <span className="text-blue-600 font-medium">{formData.year}</span>
        </label>
        <input
          type="range"
          min="1994"
          max="2024"
          value={formData.year}
          onChange={(e) => handleSliderChange("year", e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg cursor-pointer"
        />
      </div>
    </div>

    {/* KM Driven & Fuel */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">
          KM Driven: <span className="text-green-600 font-medium">{formData.km_driven}</span>
        </label>
        <input
          type="range"
          min="11"
          max="200000"
          step="1000"
          value={formData.km_driven}
          onChange={(e) => handleSliderChange("km_driven", e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Fuel Type</label>
        <select
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 transition-all shadow-sm"
        >
          <option value="">Select Fuel</option>
          {fuelTypes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Seller & Transmission */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Seller Type</label>
        <select
          name="seller_type"
          value={formData.seller_type}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-purple-500 transition-all shadow-sm"
        >
          <option value="">Select Seller</option>
          {sellerTypes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Transmission</label>
        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-purple-500 transition-all shadow-sm"
        >
          <option value="">Select Transmission</option>
          {transmissionTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Owner & Seats */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Owner</label>
        <select
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-pink-500 transition-all shadow-sm"
        >
          <option value="">Select Owner</option>
          {ownerTypes.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">Seats</label>
        <select
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-pink-500 transition-all shadow-sm"
        >
          {seatOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Mileage, Engine & Max Power */}
    <div className="grid md:grid-cols-3 gap-8">
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">
          Mileage: <span className="text-yellow-600 font-medium">{formData.mileage} km/l</span>
        </label>
        <input
          type="range"
          min="10"
          max="40"
          step="0.5"
          value={formData.mileage}
          onChange={(e) => handleSliderChange("mileage", e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">
          Engine: <span className="text-red-600 font-medium">{formData.engine} CC</span>
        </label>
        <input
          type="range"
          min="700"
          max="5000"
          step="50"
          value={formData.engine}
          onChange={(e) => handleSliderChange("engine", e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-2">
          Max Power: <span className="text-purple-600 font-medium">{formData.max_power} bhp</span>
        </label>
        <input
          type="range"
          min="0"
          max="200"
          step="5"
          value={formData.max_power}
          onChange={(e) => handleSliderChange("max_power", e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg cursor-pointer"
        />
      </div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full py-3 font-bold text-white text-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transform transition-all"
    >
      🚀 Predict Price
    </button>
  </form>
);

};

export default CarForm;
