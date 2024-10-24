import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronDown, Menu, X, Sun, Moon, BarChart, Users, Zap, Shield, Award, Clock, Rocket, Target, Layers } from 'lucide-react'
import xjs from './X.js'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine, faBox, faGlobe, faFileAlt, faDollarSign, faUsers, faPercent, faLayerGroup, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'
import brand1 from './image/brand1.jpg';
import brand2 from './image/brand2.jpg';
import brand3 from './image/brand3.jpg';
import brand4 from './image/brand4.jpg';
import brand5 from './image/brand5.jpg';
import brand6 from './image/brand6.jpg';
import brand7 from './image/brand7.jpg';
import brand8 from './image/brand8.png';
import pic2 from './image/pic2.png';
import merchant from './image/merchant.png';
import graph from './image/graphs.svg';
import text from './image/1.png';
import graph2 from './image/2.svg';
import analytics from './image/analytics.jpg';
import apis from './image/apis.jpg';
import md from './image/md.jpg';
/*
import dataVisualizationImage from './images/md.jpg';
import performanceAnalyticsImage from './images/md.jpg';
import inventoryTrackingImage from './images/md.jpg';
import crossPlatformImage from './images/md.jpg';
import customReportsImage from './images/md.jpg';
import salesTrackingImage from './images/graphs.png';
import customerInsightsImage from './images/md.jpg';
import promotionsManagementImage from './images/md.jpg';
import multiChannelSupportImage from './images/md.jpg';
*/

const placeholderImage = "https://via.placeholder.com/300x200.png?text=Feature+Image";

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const galleryRef = useRef(null);

  const images = [
    pic2
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current.children;
    for (let item of galleryItems) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto px-4 py-9">
      <div 
        ref={galleryRef} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5"
      >
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            data-index={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleImages.includes(index.toString()) ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <img 
              src={src} width={2000} height={1000}
              alt={`Gallery image ${index + 1}`} 
              className="object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ImageGallery2 = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const galleryRef = useRef(null);

  const images = [
    graph2
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current.children;
    for (let item of galleryItems) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto px-1 py-1">
      <div 
        ref={galleryRef} 
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-1"
      >
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            data-index={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleImages.includes(index.toString()) ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ImageGallery3 = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const galleryRef = useRef(null);

  const images = [
    graph, text
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current.children;
    for (let item of galleryItems) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto px-4 py-9">
      <div 
        ref={galleryRef} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20"
      >
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            data-index={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleImages.includes(index.toString()) ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <img 
              src={src} width={700} height={250} 
              alt={`Gallery image ${index + 1}`} 
              className="center object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    document.body.classList.toggle('light', !isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  }

  const brandLogos = [
    brand1, brand2, brand3, brand4,
    brand5, brand6, brand7, brand8,
    brand1, brand2, brand3, brand4,
    brand5, brand6, brand7, brand8,
  ];

    const aboutSlides = [
    {
      title: "Our Mission",
      content: "At ZVortex, our mission is to empower businesses with cutting-edge AI-driven marketing solutions. We strive to simplify complex marketing processes and drive exceptional results for our clients."
    },
    {
      title: "Innovation at Core",
      content: "We're constantly pushing the boundaries of what's possible in digital marketing. Our team of experts is dedicated to developing innovative features that keep our clients ahead of the curve."
    },
    {
      title: "Customer Success",
      content: "Your success is our success. We provide unparalleled support and guidance to ensure you get the most out of our platform. Our customer success team is always ready to assist you in achieving your marketing goals."
    },
    {
      title: "Data-Driven Approach",
      content: "We believe in the power of data. ZVortex's analytics tools provide deep insights into your marketing performance, allowing you to make informed decisions and optimize your strategies for maximum impact."
    }
  ]

  const navItems = [
    {
      title: "Services",
      dropdown: [
        { title: "AI-Powered Analytics", href: "#ai-analytics" },
        { title: "Cross-Platform Campaigns", href: "#cross-platform" },
        { title: "Audience Segmentation", href: "#audience-segmentation" },
        { title: "Automated Reporting", href: "#automated-reporting" },
      ]
    },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Story", href: "#our-story" },
        { title: "Team", href: "#team" },
        { title: "Vision & Mission", href: "#vision-mission" },
        { title: "Technology", href: "#technology" },
      ]
    },
    {
      title: "Resources",
      dropdown: [
        { title: "Blog", href: "#blog" },
        { title: "Whitepapers", href: "#whitepapers" },
        { title: "Case Studies", href: "#case-studies" },
        { title: "FAQs", href: "#faqs" },
      ]
    },
    {
      title: "Contact",
      href: "#contact"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  }

  const features = [
    {
      title: "Real-Time Data Visualizations",
      description: "Instantly grasp key performance indicators with visually appealing charts and graphs.",
      icon: <FontAwesomeIcon icon={faChartBar} className="w-12 h-12 text-purple-500" />,
      benefit: "Make informed, data-driven decisions with easy-to-understand visual representations of your business data.",
      image: placeholderImage
    },
    {
      title: "Comprehensive Performance Analytics",
      description: "Track sales, inventory, profit margins, and customer activity over time.",
      icon: <FontAwesomeIcon icon={faChartLine} className="w-12 h-12 text-purple-500" />,
      benefit: "Gain an in-depth understanding of business trends to optimize operations and identify growth opportunities.",
      image: placeholderImage
    },
    {
      title: "Inventory Tracking and Management",
      description: "Real-time inventory management with low-stock alerts and reorder reminders.",
      icon: <FontAwesomeIcon icon={faBox} className="w-12 h-12 text-purple-500" />,
      benefit: "Prevent stockouts and ensure you're always ready to meet customer demand.",
      image: placeholderImage
    },
    {
      title: "Sales and Revenue Tracking",
      description: "Track sales performance, revenue growth, and customer purchase behaviors in real-time.",
      icon: <FontAwesomeIcon icon={faDollarSign} className="w-12 h-12 text-purple-500" />,
      benefit: "Focus on your best-performing products and tailor promotions accordingly.",
      image: placeholderImage
    },
    {
      title: "Customer Insights and Management",
      description: "Manage customer profiles and generate insights into customer segments.",
      icon: <FontAwesomeIcon icon={faUsers} className="w-12 h-12 text-purple-500" />,
      benefit: "Tailor marketing campaigns to specific customer segments, improving retention and lifetime value.",
      image: placeholderImage
    },
    {
      title: "Multi-Store or Multi-Channel Support",
      description: "Manage multiple storefronts or sales channels from a single interface.",
      icon: <FontAwesomeIcon icon={faLayerGroup} className="w-12 h-12 text-purple-500" />,
      benefit: "Get a complete picture of your business across all locations or channels for better resource allocation and strategy.",
      image: placeholderImage
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'} text-gray-900 dark:text-white transition-colors duration-1`}>
      <motion.header
        className={`fixed w-full z-50 transition-colors duration-1 ${
          scrollY > 50 ? (isDarkMode ? 'bg-gray-900/90' : 'bg-white/90') + ' backdrop-blur-md' : ''
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ZVortex
            </a>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group"
                     onMouseEnter={() => setActiveDropdown(item.title)}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <a href={item.href || '#'} className="hover:text-purple-400 transition-colors">
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}
                        >
                          <div className="py-1">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                              >
                                {dropdownItem.title}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
              </button>
              <Link to="/demo-request" className="hidden md:inline-block px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white">
                Request Demo
              </Link>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} py-4`}
          >
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className="w-full text-left hover:text-purple-400 transition-colors py-2"
                  >
                    {item.title}
                  </button>
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`mt-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`}
                              >
                                {dropdownItem.title}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <a href="x.html" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white text-center">
                Request Demo
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      <main>
        <section id="hero" className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Transforming Advertising with AI Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              ZVortex provides a comprehensive set of tools to manage, automate, and analyze all your digital marketing efforts across multiple platforms from one intuitive dashboard.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href="x.html" className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-lg font-semibold">
                Request a Demo
              </a>
              <a href="#pricing" className="px-8 py-3 rounded-md border border-purple-500 hover:bg-purple-500 transition-colors text-lg font-semibold">
                View Pricing
              </a>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className={`py-10 md:py-20 ${isDarkMode ? 'bg-gray-850' : 'bg-grey-100'}`}>
          <motion.div {...fadeInUp} className="container mx-auto flex flex-row items-center justify-center">
            <div className="w-full max-w-3xl h-auto max-h-[500px] md:max-h-[700px]">
              <img src={text} alt="text" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </section>

        <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Why Choose ZVortex?
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: <BarChart className="w-12 h-12 mb-4 text-purple-500" />, title: "Data-Driven Insights", description: "Leverage advanced analytics to make informed decisions and optimize your campaigns in real-time." },
                { icon: <Users className="w-12 h-12 mb-4 text-purple-500" />, title: "Audience Segmentation", description: "Target the right customers with precision using our AI-powered segmentation tools." },
                { icon: <Zap className="w-12 h-12 mb-4 text-purple-500" />, title: "Lightning-Fast Automation", description: "Streamline your workflow with intelligent automation across all marketing channels." },
                { icon: <Shield className="w-12 h-12 mb-4 text-purple-500" />, title: "Enterprise-Grade Security", description: "Rest easy knowing your data is protected with state-of-the-art security measures." },
                { icon: <Award className="w-12 h-12 mb-4 text-purple-500" />, title: "Innovative Platform", description: "Stay ahead of the curve with our cutting-edge marketing technology." },
                { icon: <Clock className="w-12 h-12 mb-4 text-purple-500" />, title: "24/7 Expert Support", description: "Our dedicated team is always available to ensure your success with ZVortex." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center`}
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-20">
          <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-gray-850' : 'bg-grey-100'}`}>
            <motion.div {...fadeInUp}>
              <ImageGallery2 />
            </motion.div>
          </section>
        </section>

  <section id="about" className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
  <div className="container mx-auto px-4 space-y-4 sm:space-y-0 sm:space-x-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold mb-6 text-center leading-relaxed"
    >
      Empowering Over 100 Fast-Growing Businesses
    </motion.h2>

    <div className="relative mb-20 mt-8">
      <div className="flex space-x-10 animate-slide">
        {brandLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Brand${index + 1}`}
              className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<div className="container mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-4">AI-Driven Campaign Optimization</h3>
              <p className="mb-4">
                Harness the power of artificial intelligence to supercharge your marketing campaigns. Our AI algorithms analyze vast amounts of data to identify trends, predict customer behavior, and optimize your campaigns in real-time for maximum ROI.
              </p>
              <img src={text} alt="AI-Driven Optimization" className="w-full h-48 object-cover rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-4">Personalized Customer Experiences</h3>
              <p className="mb-4">
                Deliver tailored marketing messages to each customer with our AI-powered personalization engine. Analyze customer data, behavior, and preferences to create hyper-targeted campaigns that resonate with your audience and drive conversions.
              </p>
              <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-gray-850' : 'bg-grey-100'}`}>
                <ImageGallery2 />
              </section>
            </motion.div>
          </div>
        </div>

<section id="pricing" className="py-20">
  <div className="container mx-auto px-4">
    <motion.h2
      {...fadeInUp}
      className="text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      Pricing Plans
    </motion.h2>
    <motion.div
      variants={staggerChildren}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[
        {
          name: "Starter",
          price: "$99/month",
          features: ["Up to 5 campaigns", "Basic analytics", "Email support"],
          cta: "Get Started",
          bluehighlight: true,
          highlighted: false
        },
        {
          name: "Professional",
          price: "$299/month",
          features: ["Unlimited campaigns", "Advanced analytics", "24/7 support", "AI-powered optimization"],
          cta: "Get Started",
          highlighted: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Custom solutions", "Dedicated account manager", "On-site training", "API access"],
          cta: "Contact Sales",
          bluehighlight: true,
          highlighted: false
        }
      ].map((plan, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className={`${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          } p-6 rounded-lg shadow-lg ${
            plan.highlighted ? 'ring-2 ring-purple-500 scale-105' : ''
          } ${ 
            plan.bluehighlight ? 'ring-2 ring-purple-300 scale-105' : ''
          } transition-all duration-300`}
        >
          <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
          <p className="text-3xl font-bold mb-6">{plan.price}</p>
          <ul className="mb-8 space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <ChevronDown className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className={`block text-center px-4 py-2 rounded-md transition-colors ${
              plan.highlighted
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                : isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            {plan.cta}
          </a>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Our Vision for Your Success
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Rocket className="w-12 h-12 mb-4 text-purple-500" />, title: "Accelerate Growth", description: "Our AI-powered tools are designed to skyrocket your marketing performance and drive rapid business growth." },
                { icon: <Target className="w-12 h-12 mb-4 text-purple-500" />, title: "Precision Targeting", description: "Reach your ideal customers with laser-focused accuracy, maximizing your marketing ROI." },
                { icon: <Layers className="w-12 h-12 mb-4 text-purple-500" />, title: "Seamless Integration", description: "Effortlessly connect all your marketing channels for a unified, powerful strategy." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg shadow-lg text-center`}
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-analytics" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              AI-Powered Analytics
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4">Unlock the Power of Your Data</h3>
                <p className="mb-4">ZVortex's AI-powered analytics engine processes vast amounts of data in real-time, providing you with actionable insights to drive your marketing strategy.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Real-time performance tracking</li>
                  <li>Predictive analytics for campaign optimization</li>
                  <li>Custom reporting dashboards</li>
                  <li>Competitor analysis</li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}
              >
                <img src={analytics} alt="Analytics Dashboard Preview" className="w-full h-64 object-cover rounded-lg" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="cross-platform" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Cross-Platform Campaigns
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg shadow-lg`}>
                <img src={apis} alt="Analytics Dashboard Preview" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Seamless Integration Across Channels</h3>
                <p className="mb-4">ZVortex allows you to create, manage, and optimize campaigns across multiple platforms from a single, intuitive interface.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Unified campaign creation and management</li>
                  <li>Automated cross-platform optimization</li>
                  <li>Consistent messaging across channels</li>
                  <li>Integrated performance tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Our Technology Stack
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cutting-Edge AI and Machine Learning</h3>
                <p className="mb-4">ZVortex is built on a foundation of advanced AI and machine learning algorithms, enabling powerful predictive analytics and automated optimization.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Natural Language Processing for content analysis</li>
                  <li>Deep Learning for user behavior prediction</li>
                  <li>Reinforcement Learning for campaign optimization</li>
                  <li>Computer Vision for creative asset analysis</li>
                </ul>
              </div>
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
              <img src={md} alt="Analytics Dashboard Preview" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Powerful Features for Your Business
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
                  </div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{feature.description}</p>
                  <p className="text-sm text-purple-500 font-semibold">Benefit: {feature.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Revolutionize Your Marketing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Be among the first to experience the future of AI-powered marketing with ZVortex.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="x.html"
                className={`inline-block px-8 py-3 rounded-md ${
                  isDarkMode 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'bg-purple-500 hover:bg-purple-600'
                } text-white transition-colors text-lg font-semibold`}
              >
                Join the Waitlist
              </a>
            </motion.div>
          </div>
        </section>

        <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              Subscribe to our newsletter for the latest updates and early access opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-grow px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none mb-2 sm:mb-0 ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                />
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-purple-500 hover:bg-purple-600'
                  } text-white transition-colors font-semibold`}
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-300'} py-12`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© Copyright 2024. All Rights Reserved by ZVortex</p>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="text-sm hover:text-purple-400 transition-colors">Contact</a>
              <a href="/terms" className="text-sm hover:text-purple-400 transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="text-sm hover:text-purple-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

