import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Car, BarChart3, Zap, Search, DollarSign, Target,
  Sparkles, TrendingUp, Clock, Shield, ChevronRight, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const values = [
    {
      id: 1,
      icon: <Search className="w-10 h-10" />,
      title: "Accuracy",
      description: "AI trained on real market data to give you precise predictions.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      icon: <Zap className="w-10 h-10" />,
      title: "Speed",
      description: "Get your car's value instantly, no delays or guesswork.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      id: 3,
      icon: <DollarSign className="w-10 h-10" />,
      title: "Save Money",
      description: "Avoid underpricing or overpaying with reliable insights.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      icon: <Target className="w-10 h-10" />,
      title: "Simplicity",
      description: "A user-friendly interface designed for everyone.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
  ];

  const features = [
    {
      id: 1,
      icon: Car,
      title: "Quick Prediction",
      description: "Get instant car price estimates with just a few clicks.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Data-Driven",
      description: "Powered by real-world datasets for high prediction accuracy.",
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      icon: Zap,
      title: "Easy to Use",
      description: "Enjoy a smooth and intuitive interface designed for everyone.",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500"
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Enter Car Details",
      description: "Provide details like brand, year, fuel type, and mileage.",
      icon: "🚗",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "AI Analyzes Data",
      description: "Our AI model compares real-time market trends and past sales.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Get Price Prediction",
      description: "Receive accurate, trusted insights to buy or sell confidently.",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const stats = [
    { label: "Predictions Made", value: "20K+", icon: TrendingUp },
    { label: "Accuracy Rate", value: "95%", icon: Target },
    { label: "Avg Response Time", value: "<2s", icon: Clock },
    { label: "Happy Users", value: "10K+", icon: Sparkles }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1 }}
        >
          <img src="/car.jpg" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              AI-Powered Car Valuation
            </span> */}
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your Car's
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              True Value
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Get instant, AI-powered insights into your car's worth before buying or selling.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
           <Link
  to="/carform"
  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2"
>
  Check Car Price
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>


            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg mb-4"
            >
              Why Choose Us
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">
  Why{" "}
  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
    CarValue
  </span>
  ?
</h2>

<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center px-4">
  Experience the future of car valuation with cutting-edge technology.
</p>

          </motion.div>

       <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
  {values.map((value, index) => (
    <motion.div
      key={value.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-500 -z-10`}
      />

      {/* Card */}
      <div
        className={`relative h-full bg-gradient-to-br ${value.bgColor} rounded-3xl shadow-lg p-6 sm:p-8 border border-white/50 transition-all duration-500 group-hover:shadow-2xl`}
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-white rounded-2xl shadow-lg"
        >
          {React.cloneElement(value.icon, {
            className: `w-8 h-8 sm:w-10 sm:h-10 ${
              value.color.includes("blue")
                ? "text-blue-600"
                : value.color.includes("yellow")
                ? "text-yellow-600"
                : value.color.includes("green")
                ? "text-green-600"
                : "text-indigo-600"
            }`,
          })}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {value.description}
        </p>

        {/* Decorative Glow */}
        <div
          className={`absolute -bottom-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-26 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
           <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center px-2 sm:px-4"
>
  {/* Image container */}
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ duration: 0.3 }}
    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl"
  >
    <img
      src="/feature.jpg"
      alt="Car Features"
      className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
  </motion.div>

  {/* Floating badge */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute top-2 right-2 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-4 border-2 sm:border-4 border-blue-100"
  >
    <div className="flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-green-500" />
      <div>
        <div className="text-xs sm:text-sm font-bold text-gray-900">AI Verified</div>
        <div className="text-[10px] sm:text-xs text-gray-500">95% Accuracy</div>
      </div>
    </div>
  </motion.div>
</motion.div>


            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
                Our Features
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
  Powerful{" "}
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    Features
  </span>
</h2>

<p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 text-center sm:text-left">
  Discover how CarValue makes car price prediction accurate, fast, and easy to use.
</p>


              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredFeature(feature.id)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className="group relative"
                  >
                    <div className={`flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${hoveredFeature === feature.id ? 'transform scale-105' : ''}`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                      >
                        <feature.icon className="w-7 h-7" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>

                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-all ${hoveredFeature === feature.id ? 'translate-x-1 text-blue-600' : ''}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg mb-4">
              Simple Process
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 text-center ">
  How{" "}
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    CarValue
  </span>{" "}
  Works
</h2>


            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your car's value in three simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 opacity-20" />

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredStep(step.id)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 blur-2xl rounded-3xl transition-opacity duration-500 -z-10`} />

                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100"
                  >
                    {/* Step Number */}
                    <div className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.id}
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredStep === step.id ? [1, 1.2, 1] : 1,
                        rotate: hoveredStep === step.id ? [0, 10, -10, 0] : 0
                      }}
                      className="text-7xl mb-6 mt-4"
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator for non-last items */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-2xl italic text-white mb-8 font-light">
                  "Empowering Choices with Price Insights – Know your car's true worth in seconds."
                </p>
                <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/carform"
    className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
  >
    Predict Now
    <Sparkles className="w-5 h-5" />
  </Link>
</motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Brand */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                CarValue
              </motion.h2>
              <p className="text-gray-300 mb-4 text-lg">
                Empowering Choices with Price Insights
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                CarValue helps you make smarter decisions when buying or selling cars. 
                Get accurate price predictions, market insights, and comparisons 
                tailored to your needs.
              </p>
              <p className="text-gray-400">
                Start exploring today and drive your decisions with confidence.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              {['Home', 'About', 'Features', 'How It Works'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()}{' '}
              <span className="text-white font-bold">CarValue</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}