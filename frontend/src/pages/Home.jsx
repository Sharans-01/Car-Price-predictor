import { motion } from "framer-motion";
import { ArrowRight, Car, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}

    <section
      id="hero"
      className="relative bg-cover bg-center text-white min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden"
      style={{ backgroundImage: "url('/car.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.h1
        className="relative text-4xl md:text-6xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Find Your Car’s True Value
      </motion.h1>

      <motion.p
        className="relative text-lg md:text-xl max-w-2xl mb-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      >
        Get instant, AI-powered insights into your car’s worth before buying or
        selling.
      </motion.p>

      <motion.div
        className="relative flex gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <Link
          to="/carform"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Check Car Price
        </Link>

        <a
          href="#about"
          className="px-6 py-3 bg-white/90 text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-white transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  




{/* About Section */}
<section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
    
    {/* Image Card Side */}
    <div className="flex justify-center">
      <div className="relative group">
        <img 
  src="/about.jpg" 
  alt="About CarValue" 
  className="rounded-3xl shadow-2xl w-full max-w-md h-[290px] object-cover transform group-hover:scale-105 transition duration-500"
/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>
    </div>

    {/* Content Side */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900 leading-snug">
        About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CarValue</span>
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        <span className="font-semibold text-blue-600">CarValue</span> is your intelligent companion for discovering the 
        <span className="font-semibold"> true value of your car</span>.  
        Using <span className="font-semibold text-indigo-600">AI-powered predictions</span>, we analyze real-time 
        market trends and past sales data to help you buy or sell at the best price.  
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Save time, skip the guesswork, and make 
        <span className="font-semibold text-green-600"> confident decisions</span> with accurate, trusted insights.
      </p>
      
      
     
    </div>
  </div>
</section>



      {/* Features Section */}
<section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
      Powerful <span className="text-blue-600">Features</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-14">
      Discover how CarValue makes car price prediction accurate, fast, and easy to use.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
          <Car className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Prediction</h3>
        <p className="text-gray-600">Get instant car price estimates with just a few clicks.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <BarChart3 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Data-Driven</h3>
        <p className="text-gray-600">Powered by real-world datasets for high prediction accuracy.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-6">
          <Zap className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy to Use</h3>
        <p className="text-gray-600">Enjoy a smooth and intuitive interface designed for everyone.</p>
      </div>
    </div>
  </div>
</section>


     {/* How It Works Section */}
<section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

  <div className="relative max-w-4xl mx-auto">
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

    {/* Step 1 */}
    <div className="mb-16 flex items-center w-full">
      <div className="w-1/2 pr-8 text-right">
        <h3 className="text-xl font-semibold">Enter Car Details</h3>
        <p className="text-gray-600 mt-2">
          Fill in information like brand, year, mileage, and fuel type.
        </p>
      </div>
      <div className="relative">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg text-xl font-bold">1</div>
      </div>
      <div className="w-1/2"></div>
    </div>

    {/* Step 2 */}
    <div className="mb-16 flex items-center w-full">
      <div className="w-1/2"></div>
      <div className="relative">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg text-xl font-bold">2</div>
      </div>
      <div className="w-1/2 pl-8">
        <h3 className="text-xl font-semibold">AI Analyzes Data</h3>
        <p className="text-gray-600 mt-2">
          Our model processes the details to calculate market value.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="mb-16 flex items-center w-full">
      <div className="w-1/2 pr-8 text-right">
        <h3 className="text-xl font-semibold">Get Price Estimate</h3>
        <p className="text-gray-600 mt-2">
          Receive accurate and instant resale value predictions.
        </p>
      </div>
      <div className="relative">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg text-xl font-bold">3</div>
      </div>
      <div className="w-1/2"></div>
    </div>
  </div>

  {/* Quote + CTA */}
  <div className="text-center mt-12">
    <p className="text-lg italic text-gray-700 mb-6">
      "Empowering Choices with Price Insights – Know your car’s true worth in seconds."
    </p>
    <a
      href="/carform"
      className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
    >
      Predict Now
    </a>
  </div>
</section>


    {/* Footer */}
<footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
    
    {/* Logo / Brand */}
    <div className="text-left max-w-md">
      <h2 className="text-2xl font-bold text-white">CarValue</h2>
      <p className="text-gray-400 text-sm mt-2">
        Empowering Choices with Price Insights
      </p>
      <p className="text-gray-500 text-sm mt-4 leading-relaxed">
        CarValue helps you make smarter decisions when buying or selling cars. 
        Get accurate price predictions, market insights, and comparisons 
        tailored to your needs.
      </p>
      <p className="text-gray-500 text-sm mt-3">
        Start exploring today and drive your decisions with confidence.
      </p>
    </div>

    {/* Links */}
    <div className="flex flex-col md:items-left items-start space-y-2">
      <h3 className="text-white font-semibold mb-2">Quick Links</h3>
      <a href="#hero" className="hover:text-white transition">Home</a>
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#features" className="hover:text-white transition">Features</a>
      <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
      
    </div>

  </div>

  {/* Divider */}
  <div className="border-t border-gray-700 mt-8 pt-6 text-center">
    <p className="text-sm text-gray-400">
      © {new Date().getFullYear()} <span className="text-white font-semibold">CarValue</span>. All rights reserved.
    </p>
  </div>
</footer>


</div>
  );
};
