import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, Calendar, Gauge, Fuel, User, Settings, 
  Users, Activity, Zap, TrendingUp, CheckCircle2, Shield,
  Sparkles, ArrowRight, ArrowLeft
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

const CarForm = ({ setPredictedPrice }) => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);

  const brands = [
    "Maruti","Skoda","Honda","Hyundai","Toyota","Ford","Renault",
    "Mahindra","Tata","Chevrolet","Datsun","Jeep","Mercedes-Benz",
    "Mitsubishi","Audi","Volkswagen","BMW","Nissan","Lexus",
    "Jaguar","Land","MG","Volvo","Daewoo","Kia","Force",
    "Ambassador","Ashok","Isuzu","Opel"
  ];

  const fuelTypes = [
    { value: "Petrol", icon: "⛽", color: "from-orange-500 to-red-500" },
    { value: "Diesel", icon: "🚛", color: "from-gray-600 to-gray-800" },
    { value: "CNG", icon: "💨", color: "from-green-500 to-emerald-500" },
    { value: "LPG", icon: "🔥", color: "from-blue-500 to-cyan-500" }
  ];

  const sellerTypes = [
    { value: "Individual", icon: "👤" },
    { value: "Dealer", icon: "🏢" },
    { value: "Trustmark Dealer", icon: "⭐" }
  ];

  const transmissionTypes = [
    { value: "Manual", icon: "🎮", color: "from-blue-500 to-indigo-500" },
    { value: "Automatic", icon: "⚡", color: "from-purple-500 to-pink-500" }
  ];

  const ownerTypes = [
    { value: "First Owner", badge: "1st", color: "bg-green-500" },
    { value: "Second Owner", badge: "2nd", color: "bg-blue-500" },
    { value: "Third Owner", badge: "3rd", color: "bg-yellow-500" },
    { value: "Fourth & Above Owner", badge: "4+", color: "bg-orange-500" },
    { value: "Test Drive Car", badge: "TD", color: "bg-purple-500" }
  ];

  const seatOptions = [5, 6, 7, 8, 9, 10];

  const steps = [
    { 
      id: 1, 
      title: "Basic Info", 
      icon: Car,
      fields: ["name", "year"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: 2, 
      title: "Usage Details", 
      icon: Gauge,
      fields: ["km_driven", "fuel"],
      color: "from-green-500 to-emerald-500"
    },
    { 
      id: 3, 
      title: "Seller Info", 
      icon: User,
      fields: ["seller_type", "transmission", "owner"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      id: 4, 
      title: "Specifications", 
      icon: Settings,
      fields: ["mileage", "engine", "max_power", "seats"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name, value) => {
    setFormData({ ...formData, [name]: Number(value) });
  };

  const isStepComplete = (stepId) => {
    const step = steps.find(s => s.id === stepId);
    return step.fields.every(field => formData[field] !== "" && formData[field] !== null);
  };

  const nextStep = () => {
    if (isStepComplete(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressPercentage = () => {
    const completed = completedSteps.length;
    return (completed / steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
        />
      </div>
 <div className="w-full max-w-5xl mx-auto relative z-10 sm:px-6 lg:px-8">
   

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
  animate={{ rotate: [0, 10, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="inline-block mb-4"
>
  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
</motion.div>

<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 text-center">
  Predict Your Car Price
</h1>

<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center px-2 sm:px-0">
  Let our AI estimate the true value of your car 🚗💰
</p>
        </motion.div>

        
{/* Progress Bar */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  className="mb-6 sm:mb-8"
>
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 sm:p-6">
    <div className="flex items-start gap-2 sm:gap-4">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="flex-1 flex flex-col items-center min-w-[50px] sm:min-w-[70px]"
        >
          {/* icon + connector row */}
          <div className="flex items-center w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
                completedSteps.includes(step.id)
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                  : currentStep === step.id
                  ? `bg-gradient-to-r ${step.color}`
                  : 'bg-gray-200 dark:bg-gray-700'
              } transition-all duration-300`}
            >
              {completedSteps.includes(step.id) ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              ) : (
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              )}

              {currentStep === step.id && (
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-400 rounded-full opacity-30"
                />
              )}
            </motion.div>

            {/* connector to the right (not for last item) */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 sm:h-1.5 ml-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: completedSteps.includes(step.id) ? '100%' : '0%',
                  }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>
            )}
          </div>

          {/* Title under the icon — hidden on mobile */}
          <span className="mt-2 text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 text-center hidden sm:block">
            {step.title}
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>




       <motion.form
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  onSubmit={handleSubmit}
  className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8 relative overflow-hidden w-[90%] sm:w-full max-w-2xl mx-auto"
>


  {/* Decorative corner elements */}
  <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-bl-full" />
  <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tr from-pink-400 to-orange-400 opacity-10 rounded-tr-full" />
            <AnimatePresence mode="wait">
    {/* Step 1: Basic Info */}
    {currentStep === 1 && (
      <motion.div
        key="step1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Basic Information
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Tell us about your car's brand and year
          </p>
        </div>

                {/* Brand Selection */}
                <div>
  <label className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-lg">
    <Car className="w-5 h-5 text-blue-600" />
    Car Brand
  </label>
  <select
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option value="">Select your car brand</option>
    {brands.map((brand) => (
      <option key={brand} value={brand}>
        {brand}
      </option>
    ))}
  </select>
</div>

               {/* Year Slider */}
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6">
  <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-gray-700 mb-4 text-base sm:text-lg">
    <span className="flex items-center gap-2 mb-2 sm:mb-0">
      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
      Manufacturing Year
    </span>
    <motion.span
      key={formData.year}
      initial={{ scale: 1.5, color: "#2563eb" }}
      animate={{ scale: 1, color: "#1e40af" }}
      className="text-2xl sm:text-3xl font-bold text-blue-600"
    >
      {formData.year}
    </motion.span>
  </label>

  <input
    type="range"
    min="1994"
    max="2024"
    value={formData.year}
    onChange={(e) => handleSliderChange("year", e.target.value)}
    className="w-full h-3 sm:h-4 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg cursor-pointer appearance-none slider-thumb"
  />

  <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
    <span>1994</span>
    <span>2024</span>
  </div>
</div>

              </motion.div>
            )}

            {/* Step 2: Usage Details */}
{currentStep === 2 && (
  <motion.div
    key="step2"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className="space-y-6 sm:space-y-8"
  >
    <div className="text-center mb-6 sm:mb-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Usage Details
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        How much has your car been used?
      </p>
    </div>

    {/* KM Driven */}
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6">
      <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-gray-700 mb-4 text-base sm:text-lg">
        <span className="flex items-center gap-2 mb-2 sm:mb-0">
          <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          Kilometers Driven
        </span>
        <motion.span
          key={formData.km_driven}
          initial={{ scale: 1.5, color: "#059669" }}
          animate={{ scale: 1, color: "#047857" }}
          className="text-2xl sm:text-3xl font-bold text-green-600"
        >
          {formData.km_driven.toLocaleString()}
        </motion.span>
      </label>

      <input
        type="range"
        min="11"
        max="200000"
        step="1000"
        value={formData.km_driven}
        onChange={(e) => handleSliderChange("km_driven", e.target.value)}
        className="w-full h-3 sm:h-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg cursor-pointer appearance-none"
      />

      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
        <span>11 km</span>
        <span>200,000 km</span>
      </div>
    </div>

               {/* Fuel Type */}
<div>
  <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">
    <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
    Fuel Type
  </label>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
    {fuelTypes.map((fuel) => (
      <motion.button
        key={fuel.value}
        type="button"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFormData({ ...formData, fuel: fuel.value })}
        className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
          formData.fuel === fuel.value
            ? `border-transparent bg-gradient-to-r ${fuel.color} text-white shadow-xl sm:shadow-2xl`
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
      >
        <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{fuel.icon}</div>
        <div className="font-semibold sm:font-bold text-sm sm:text-base">
          {fuel.value}
        </div>

        {formData.fuel === fuel.value && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2"
          >
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        )}
      </motion.button>
    ))}
  </div>
</div>

              </motion.div>
            )}

           {/* Step 3: Seller Info */}
{currentStep === 3 && (
  <motion.div
    key="step3"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className="space-y-8"
  >
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-2">Seller Information</h3>
      <p className="text-gray-600">Details about ownership and transmission</p>
    </div>

    {/* Seller Type */}
    <div>
      <label className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-lg">
        <User className="w-5 h-5 text-purple-600" />
        Seller Type
      </label>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sellerTypes.map((seller) => (
          <motion.button
            key={seller.value}
            type="button"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormData({ ...formData, seller_type: seller.value })}
           className={`p-6 rounded-2xl border-2 transition-all ${
                          formData.seller_type === seller.value
                            ? 'border-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 shadow-xl'
                            : 'border-gray-200 hover:border-purple-300 bg-white'
                        }`}
                      >
            <div className="text-4xl mb-2">{seller.icon}</div>
            <div className="font-bold text-base">{seller.value}</div>

            {formData.seller_type === seller.value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-2 right-2"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>

                {/* Transmission */}
                <div>
                  <label className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-lg">
                    <Settings className="w-5 h-5 text-indigo-600" />
                    Transmission Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {transmissionTypes.map((trans) => (
                      <motion.button
                        key={trans.value}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, transmission: trans.value })}
                        className={`relative p-8 rounded-2xl border-2 transition-all ${
                          formData.transmission === trans.value
                            ? `border-transparent bg-gradient-to-r ${trans.color} text-white shadow-2xl`
                            : 'border-gray-200 hover:border-indigo-300 bg-white'
                        }`}
                      >
                        <div className="text-5xl mb-3">{trans.icon}</div>
                        <div className="font-bold text-lg">{trans.value}</div>
                        
                        {formData.transmission === trans.value && (
                          <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            className="absolute top-4 right-4"
                          >
                            <CheckCircle2 className="w-7 h-7" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Owner */}
                <div>
                  <label className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                    Ownership History
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {ownerTypes.map((owner) => (
                      <motion.button
                        key={owner.value}
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setFormData({ ...formData, owner: owner.value })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.owner === owner.value
                            ? 'border-blue-600 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-blue-300 bg-white'
                        }`}
                      >
                        <div className={`${owner.color} text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                          {owner.badge}
                        </div>
                        <div className="text-xs font-medium text-center">{owner.value}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Specifications */}
{currentStep === 4 && (
  <motion.div
    key="step4"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="space-y-6 sm:space-y-8"
  >
    <div className="text-center mb-6 sm:mb-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Technical Specifications
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Engine and performance details
      </p>
    </div>

    {/* Mileage */}
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 sm:p-6 shadow-sm">
      <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-gray-700 mb-4 text-base sm:text-lg">
        <span className="flex items-center gap-2 mb-2 sm:mb-0">
          <Activity className="w-5 h-5 text-yellow-600" />
          Mileage
        </span>
        <motion.span
          key={formData.mileage}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-600"
        >
          {formData.mileage} km/l
        </motion.span>
      </label>
      <input
        type="range"
        min="10"
        max="40"
        step="0.5"
        value={formData.mileage}
        onChange={(e) => handleSliderChange("mileage", e.target.value)}
        className="w-full h-3 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg cursor-pointer appearance-none"
      />
      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
        <span>10 km/l</span>
        <span>40 km/l</span>
      </div>
    </div>

    {/* Engine */}
    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-4 sm:p-6 shadow-sm">
      <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-gray-700 mb-4 text-base sm:text-lg">
        <span className="flex items-center gap-2 mb-2 sm:mb-0">
          <Zap className="w-5 h-5 text-red-600" />
          Engine Capacity
        </span>
        <motion.span
          key={formData.engine}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          className="text-2xl sm:text-3xl font-bold text-red-600"
        >
          {formData.engine} CC
        </motion.span>
      </label>
      <input
        type="range"
        min="700"
        max="5000"
        step="50"
        value={formData.engine}
        onChange={(e) => handleSliderChange("engine", e.target.value)}
        className="w-full h-3 bg-gradient-to-r from-red-400 to-pink-600 rounded-lg cursor-pointer appearance-none"
      />
      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
        <span>700 CC</span>
        <span>5000 CC</span>
      </div>
    </div>

    {/* Max Power */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 sm:p-6 shadow-sm">
      <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-gray-700 mb-4 text-base sm:text-lg">
        <span className="flex items-center gap-2 mb-2 sm:mb-0">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          Maximum Power
        </span>
        <motion.span
          key={formData.max_power}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          className="text-2xl sm:text-3xl font-bold text-purple-600"
        >
          {formData.max_power} bhp
        </motion.span>
      </label>
      <input
        type="range"
        min="0"
        max="200"
        step="5"
        value={formData.max_power}
        onChange={(e) => handleSliderChange("max_power", e.target.value)}
        className="w-full h-3 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-lg cursor-pointer appearance-none"
      />
      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
        <span>0 bhp</span>
        <span>200 bhp</span>
      </div>
    </div>

                {/* Seats */}
<div>
  <label className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-base sm:text-lg">
    <Users className="w-5 h-5 text-blue-600" />
    Seating Capacity
  </label>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
    {seatOptions.map((seat) => (
      <motion.button
        key={seat}
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFormData({ ...formData, seats: seat })}
        className={`p-3 sm:p-4 rounded-xl border-2 font-bold text-xl sm:text-2xl transition-all duration-300 ${
          formData.seats === seat
            ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg sm:shadow-xl'
            : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700'
        }`}
      >
        {seat}
      </motion.button>
    ))}
  </div>
</div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-between mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 gap-4 sm:gap-0">
  <motion.button
    type="button"
    onClick={prevStep}
    whileHover={{ scale: 1.05, x: -5 }}
    whileTap={{ scale: 0.95 }}
    disabled={currentStep === 1}
    className={`flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold transition-all ${
      currentStep === 1
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
    }`}
  >
    <ArrowLeft className="w-5 h-5" />
    Previous
  </motion.button>

  {currentStep < steps.length ? (
    <motion.button
      type="button"
      onClick={nextStep}
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      disabled={!isStepComplete(currentStep)}
      className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition-all ${
        isStepComplete(currentStep)
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
    >
      Next Step
      <ArrowRight className="w-5 h-5" />
    </motion.button>
  ) : (
   <motion.button
  type="submit"  // ✅ triggers handleSubmit only on click
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  disabled={!isStepComplete(currentStep) || isSubmitting}
  className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all ${
    isStepComplete(currentStep) && !isSubmitting
      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-xl'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  {isSubmitting ? (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      Predicting...
    </>
  ) : (
    <>
      <Sparkles className="w-6 h-6" />
      Predict Price
    </>
  )}
</motion.button>

  )}
</div>


         {/* Step Indicator */}
<div className="text-center mt-6 sm:mt-8">
  <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
    Step {currentStep} of {steps.length}
  </p>

  <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 px-2">
    {steps.map((step) => (
      <div
        key={step.id}
        className={`rounded-full transition-all duration-300 ${
          step.id === currentStep
            ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-600'
            : completedSteps.includes(step.id)
            ? 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500'
            : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300'
        }`}
      />
    ))}
  </div>
</div>
        </motion.form>

       {/* Info Cards */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="hidden md:grid md:grid-cols-3 gap-6 mt-8"
>
  {[
    { icon: Zap, title: "Instant Results", desc: "Get predictions in seconds", color: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Secure & Private", desc: "Your data is protected", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, title: "95% Accurate", desc: "AI-powered precision", color: "from-blue-500 to-indigo-500" }
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg text-center"
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${item.color} text-white mb-3`}>
        <item.icon className="w-7 h-7" />
      </div>
      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
      <p className="text-sm text-gray-600">{item.desc}</p>
    </motion.div>
  ))}
</motion.div>

      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border: 3px solid currentColor;
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border: 3px solid currentColor;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default CarForm;