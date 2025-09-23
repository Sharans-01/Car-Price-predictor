import { motion } from "framer-motion";
import { ArrowRight, Car, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Search,  DollarSign, Target } from "lucide-react";

const values = [
  {
    id: 1,
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Accuracy",
    description: "AI trained on real market data to give you precise predictions.",
  },
  {
    id: 2,
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Speed",
    description: "Get your car's value instantly, no delays or guesswork.",
  },
  {
    id: 3,
    icon: <DollarSign className="w-10 h-10 text-green-600" />,
    title: "Save Money",
    description: "Avoid underpricing or overpaying with reliable insights.",
  },
  {
    id: 4,
    icon: <Target className="w-10 h-10 text-indigo-600" />,
    title: "Simplicity",
    description: "A user-friendly interface designed for everyone.",
  },
];
const steps = [
  {
    id: 1,
    title: "Enter Car Details",
    description: "Provide details like brand, year, fuel type, and mileage.",
    icon: "🚗",
  },
  {
    id: 2,
    title: "AI Analyzes Data",
    description: "Our AI model compares real-time market trends and past sales.",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Get Price Prediction",
    description: "Receive accurate, trusted insights to buy or sell confidently.",
    icon: "💰",
  },
];
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
      className="relative text-3xl sm:text-4xl md:text-6xl font-bold mb-4 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Find Your Car’s True Value
    </motion.h1>

    <motion.p
      className="relative text-base sm:text-lg md:text-xl max-w-2xl mb-8 z-10 px-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
    >
      Get instant, AI-powered insights into your car’s worth before buying or
      selling.
    </motion.p>

    <motion.div
      className="relative flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
    >
      <Link
        to="/carform"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center"
      >
        Check Car Price
      </Link>

      <a
        href="#about"
        className="px-6 py-3 bg-white/90 text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-white transition-transform transform hover:scale-105 text-center"
      >
        Learn More
      </a>
    </motion.div>
  </section>






{/* About Section */}
<section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-gray-900">
          Why <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CarValue?</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transform transition duration-500"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>



      {/* Features Section */}
<section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Illustration */}
    <div className="flex justify-center">
  <img
    src="/feature.jpg"
    alt="Car Features"
    className="w-80 md:w-full drop-shadow-xl rounded-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
  />
</div>


    {/* Right Side - Features List */}
    <div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
        Powerful <span className="text-blue-600">Features</span>
      </h2>
      <p className="text-gray-600 mb-10 max-w-md">
        Discover how CarValue makes car price prediction accurate, fast, 
        and easy to use.
      </p>

      <div className="space-y-6">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Quick Prediction</h3>
            <p className="text-gray-600 text-sm">Get instant car price estimates with just a few clicks.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Data-Driven</h3>
            <p className="text-gray-600 text-sm">Powered by real-world datasets for high prediction accuracy.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Easy to Use</h3>
            <p className="text-gray-600 text-sm">Enjoy a smooth and intuitive interface designed for everyone.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* How It Works Section */}
<section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-gray-900">
          How <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CarValue</span> Works
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Step Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-6 hover:scale-105 transition duration-500">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>

                {/* Dot */}
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2"></div>
              </motion.div>
            ))}
          </div>
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
