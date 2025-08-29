import { useState } from "react";

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
    "Jaguar","Land","MG","Volvo","Daewoo","Kia","Fiat","Force",
    "Ambassador","Ashok","Isuzu","Opel"
  ];

  const fuelTypes = ["Petrol", "Diesel", "CNG", "LPG", "Electric"];
  const sellerTypes = ["Individual", "Dealer", "Trustmark Dealer"];
  const transmissionTypes = ["Manual", "Automatic"];
  const ownerTypes = ["First Owner", "Second Owner", "Third Owner", "Fourth & Above Owner", "Test Drive Car"];
  const seatOptions = [2, 4, 5, 6, 7, 8];

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
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setPredictedPrice(data.predicted_price);
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <form className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-2xl space-y-6 mt-24" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center text-blue-900">Predict Your Car Price</h2>

      {/* Brand & Year */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Car Brand</label>
          <select name="name" value={formData.name} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all shadow-sm">
            <option value="">Select Brand</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Year: <span className="text-blue-600">{formData.year}</span></label>
          <input type="range" min="1994" max="2025" value={formData.year} onChange={(e) => handleSliderChange("year", e.target.value)} className="w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg cursor-pointer transition-all"/>
        </div>
      </div>

      {/* KM Driven & Fuel */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">KM Driven: <span className="text-blue-600">{formData.km_driven}</span></label>
          <input type="range" min="0" max="200000" step="1000" value={formData.km_driven} onChange={(e) => handleSliderChange("km_driven", e.target.value)} className="w-full h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg cursor-pointer transition-all"/>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Fuel Type</label>
          <select name="fuel" value={formData.fuel} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition-all shadow-sm">
            <option value="">Select Fuel</option>
            {fuelTypes.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      {/* Seller & Transmission */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Seller Type</label>
          <select name="seller_type" value={formData.seller_type} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all shadow-sm">
            <option value="">Select Seller</option>
            {sellerTypes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Transmission</label>
          <select name="transmission" value={formData.transmission} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all shadow-sm">
            <option value="">Select Transmission</option>
            {transmissionTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Owner & Seats */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Owner</label>
          <select name="owner" value={formData.owner} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 transition-all shadow-sm">
            <option value="">Select Owner</option>
            {ownerTypes.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Seats</label>
          <select name="seats" value={formData.seats} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 transition-all shadow-sm">
            {seatOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Mileage, Engine & Max Power */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Mileage: <span className="text-blue-600">{formData.mileage} km/l</span></label>
          <input type="range" min="10" max="40" step="0.5" value={formData.mileage} onChange={(e) => handleSliderChange("mileage", e.target.value)} className="w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg cursor-pointer transition-all"/>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Engine: <span className="text-blue-600">{formData.engine} CC</span></label>
          <input type="range" min="700" max="5000" step="50" value={formData.engine} onChange={(e) => handleSliderChange("engine", e.target.value)} className="w-full h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-lg cursor-pointer transition-all"/>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-blue-800 mb-1">Max Power: <span className="text-blue-600">{formData.max_power} bhp</span></label>
          <input type="range" min="0" max="200" step="5" value={formData.max_power} onChange={(e) => handleSliderChange("max_power", e.target.value)} className="w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg cursor-pointer transition-all"/>
        </div>
      </div>

      <button type="submit" className="w-full py-3 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:scale-105 transform transition-all">
        Predict Price
      </button>
    </form>
  );
};

export default CarForm;
