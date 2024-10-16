import { useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'

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
import text from './image/1.svg';
import graph2 from './image/2.svg';

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const galleryRef = useRef(null);

  const images = [
    pic2, text
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
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ZVortex
            </a>
            
            {/* Centered Navigation */}
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About Us</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </nav>
            
            {/* Right-aligned items */}
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="x.html" className="hidden md:inline-block px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white">
                Request Demo
              </a>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
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
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About Us</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
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
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Transforming Advertising with AI Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              ZVortex provides a comprehensive set of tools to manage, automate, and analyze all your digital marketing efforts across multiple platforms from one intuitive dashboard.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
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

        <section className="py-20">
  <div className="container mx-auto px-4">
    <ImageGallery3 />
  </div>
</section>
        
        <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-gray-850' : 'bg-grey-100'}`}>
          <ImageGallery />
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              ZVortex Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Launch and Manage Cross-Platform Campaigns",
                  description: "Effortlessly create, manage, and optimize ads, emails, and social media campaigns with seamless one-click integrations."
                },
                {
                  title: "Advanced Scheduling and Collaboration Tools",
                  description: "Streamline planning and executing marketing campaigns across your team with intuitive scheduling and collaborative features."
                },
                {
                  title: "Extensive Analytics & Reporting",
                  description: "Monitor your campaign performance in real-time with detailed analytics and customizable reports."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-gray-850' : 'bg-grey-100'}`}>
          <ImageGallery2 />
          </section>
        </section>

  <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
  <div className="container mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      Empowering Over 100 Fast-Growing Businesses
    </motion.h2>
    <div className="relative mb-20">
      <div className="flex space-x-12 animate-slide">
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

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold mb-8 text-center"
    >
      Discover ZVortex
    </motion.h3>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}
    >
      {aboutSlides.map((slide, index) => (
        <SwiperSlide key={index} className="p-11">
          <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{slide.title}</h4>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{slide.content}</p>
        </SwiperSlide>
      ))}
    </Swiper>
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
              <img src="\bg3.jpg" alt="AI-Driven Optimization" className="w-full h-48 object-cover rounded-lg" />
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      Pricing Plans
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
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
    </div>
  </div>
</section>

        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Unlock Your Marketing Potential with ZVortex
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Save Time and Effort with Seamless Cross-Platform Automations
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="x.html"
                className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-lg font-semibold"
              >
                Request a Demo
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-300'} py-12`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© Copyright 2024. All Rights Reserved by ZVortex</p>
            <nav className="flex space-x-4">
              <a href="#" className="text-sm hover:text-purple-400 transition-colors">Contact</a>
              <a href="#" className="text-sm hover:text-purple-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="text-sm hover:text-purple-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}