import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Dumbbell,
  Menu,
  X,
  Search,
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  Truck,
  Award,
  Headphones,
  Check,
  Zap,
  CircleCheck,
} from "lucide-react";

const WHATSAPP = "923398888080";
const PHONE = "+92 339 8888080";

const categories = [
  {
    name: "Treadmills",
    icon: "🏃",
    description: "Premium commercial and home treadmills.",
  },
  {
    name: "Ellipticals",
    icon: "⚡",
    description: "Smooth cardio machines for full-body workouts.",
  },
  {
    name: "Exercise Bikes",
    icon: "🚴",
    description: "Reliable bikes for cardio and endurance.",
  },
  {
    name: "Spin Bikes",
    icon: "🔥",
    description: "Professional indoor cycling equipment.",
  },
  {
    name: "Strength Equipment",
    icon: "🏋️",
    description: "Professional strength training machines.",
  },
  {
    name: "Free Weights",
    icon: "💪",
    description: "Dumbbells, plates and weight accessories.",
  },
  {
    name: "Gym Accessories",
    icon: "🎯",
    description: "Essential accessories for every gym.",
  },
  {
    name: "Home Gym",
    icon: "🏠",
    description: "Compact equipment for home workouts.",
  },
];

const products = [
  {
    id: 1,
    name: "Commercial Treadmill Pro X1",
    category: "Treadmills",
    
    description:
      "Heavy-duty commercial treadmill designed for gyms and fitness centers.",
    features: ["Commercial", "AC Motor", "18 km/h"],
    image: "/images/pic1.png",
  },
  {
    id: 2,
    name: "Premium Treadmill Elite 500",
    category: "Treadmills",
    
    description:
      "Powerful treadmill with premium construction and advanced display.",
    features: ["3.5 HP", "Touch Display", "Auto Incline"],
    image: "/images/pic2.png",
  },
  {
    id: 3,
    name: "Home Treadmill Runner",
    category: "Treadmills",
    
    description:
      "Space-saving treadmill perfect for home fitness and daily cardio.",
    features: ["2.5 HP", "Foldable", "12 km/h"],
    image: "/images/pic3.png",
  },
  {
    id: 4,
    name: "Commercial Treadmill Max",
    category: "Treadmills",
    
    description:
      "High-performance commercial treadmill built for continuous use.",
    features: ["4.5 HP", "20 km/h", "Heavy Duty"],
    image: "/images/pic4.png",
  },
  {
    id: 5,
    name: "Elliptical Trainer E500",
    category: "Ellipticals",
    
    description:
      "Smooth elliptical trainer offering low-impact full-body cardio.",
    features: ["Magnetic", "LCD", "16 Levels"],
    image: "/images/pic5.png",
  },
  {
    id: 6,
    name: "Commercial Elliptical X7",
    category: "Ellipticals",
    description:
      "Commercial-grade elliptical designed for busy fitness facilities.",
    features: ["Commercial", "20 Levels", "Heavy Duty"],
    image: "/images/pic6.png",
  },
  {
    id: 7,
    name: "Premium Elliptical Trainer",
    category: "Ellipticals",
    
    description:
      "Premium elliptical with comfortable stride and modern console.",
    features: ["18 Levels", "LCD", "Quiet"],
    image: "/images/pic7.png",
  },
  {
    id: 8,
    name: "Compact Elliptical Home",
    category: "Ellipticals",
    
    description:
      "Compact cardio solution designed for comfortable home workouts.",
    features: ["Compact", "Magnetic", "Home"],
    image: "/images/pic8.png",
  },
  {
    id: 9,
    name: "Upright Exercise Bike U300",
    category: "Exercise Bikes",
    
    description:
      "Comfortable upright exercise bike for everyday cardiovascular training.",
    features: ["Magnetic", "LCD", "8 Levels"],
    image: "/images/pic9.png",
  },
  {
    id: 10,
    name: "Recumbent Bike R500",
    category: "Exercise Bikes",
    
    description:
      "Comfortable recumbent bike with supportive backrest and smooth ride.",
    features: ["Recumbent", "LCD", "12 Levels"],
    image: "/images/pic10.png",
  },
  {
    id: 11,
    name: "Commercial Bike C700",
    category: "Exercise Bikes",
    description:
      "Commercial exercise bike built for gyms and professional facilities.",
    features: ["Commercial", "Heavy Duty", "LCD"],
    image: "/images/pic11.png",
  },
  {
    id: 12,
    name: "Premium Indoor Cycle",
    category: "Spin Bikes",
    
    description:
      "Professional indoor cycling bike with smooth resistance control.",
    features: ["18 kg Flywheel", "Adjustable", "Pro"],
    image: "/images/pic12.png",
  },
  {
    id: 13,
    name: "Spin Bike S500",
    category: "Spin Bikes",
    description:
      "Strong and stable spin bike suitable for intense indoor cycling.",
    features: ["Heavy Duty", "Adjustable", "Belt Drive"],
    image: "/images/pic13.png",
  },
  {
    id: 14,
    name: "Commercial Spin Bike Pro",
    category: "Spin Bikes",
    description:
      "Professional spin bike engineered for commercial gym environments.",
    features: ["Commercial", "22 kg Flywheel", "Pro"],
    image: "/images/pic14.png",
  },
  {
    id: 15,
    name: "Functional Trainer FT900",
    category: "Strength Equipment",
    description:
      "Versatile functional trainer for complete strength and cable workouts.",
    features: ["Dual Cable", "Commercial", "Multi-Gym"],
    image: "/images/pic15.png",
  },
  {
    id: 16,
    name: "Leg Press Machine",
    category: "Strength Equipment",
    description:
      "Heavy-duty leg press machine for powerful lower-body training.",
    features: ["Heavy Duty", "Plate Loaded", "Commercial"],
    image: "/images/pic16.png",
  },
  {
    id: 17,
    name: "Smith Machine Pro",
    category: "Strength Equipment",
    description:
      "Professional Smith machine offering controlled strength training.",
    features: ["Safety Stops", "Commercial", "Heavy Duty"],
    image: "/images/pic17.png",
  },
  {
    id: 18,
    name: "Cable Crossover Station",
    category: "Strength Equipment",
    description:
      "Professional cable crossover station for versatile full-body training.",
    features: ["Dual Pulley", "Commercial", "Adjustable"],
    image: "/images/pic18.png",
  },
  {
    id: 19,
    name: "Olympic Dumbbell Set",
    category: "Free Weights",
    description:
      "Premium dumbbell set suitable for professional and home gyms.",
    features: ["Rubber", "Olympic", "Premium"],
    image: "/images/pic19.png",
  },
  {
    id: 20,
    name: "Rubber Weight Plates Set",
    category: "Free Weights",
    description:
      "Durable rubber-coated weight plates for safe and reliable training.",
    features: ["Rubber", "Olympic", "Durable"],
    image: "/images/pic20.png",
  },

    {
    id: 21,
    name: "Lifetop LT4700",
    category: "Treadmills",
    description: "Premium treadmill designed for powerful and comfortable cardio workouts.",
    features: [
      "3.5 HP Motor",
      "Auto Incline",
      "150 KG Weight Capacity",
      "Premium Build",
    ],
    image: "/images/pic21.png",
  },
  {
    id: 22,
    name: "45 CM Hopper Ball",
    category: "Gym Accessories",
    description: "Hopper ball for balance, coordination and functional fitness training.",
    features: [
      "45 CM",
      "Balance Training",
      "Core Workout",
      "Durable Build",
    ],
    image: "/images/pic22.png",
  },
  {
    id: 23,
    name: "Bumper Plate",
    category: "Free Weights",
    description: "Heavy-duty bumper plate designed for strength and weight training.",
    features: [
      "Bumper Plate",
      "Heavy Duty",
      "Durable",
      "Gym Training",
    ],
    image: "/images/pic23.png",
  },
  {
    id: 24,
    name: "Door Gym",
    category: "Home Gym",
    description: "Compact multi-purpose door gym for convenient home workouts.",
    features: [
      "Multi Exercise",
      "Home Training",
      "Compact",
      "Easy Setup",
    ],
    image: "/images/pic24.png",
  },
  {
    id: 25,
    name: "Maxima Fitness Equal Motor Treadmill",
    category: "Treadmills",
    description: "Powerful treadmill designed for demanding cardio workouts.",
    features: [
      "Equal Motor",
      "Powerful Performance",
      "Heavy Duty",
      "Commercial Quality",
    ],
    image: "/images/pic25.png",
  },
  {
    id: 26,
    name: "Android Touch Screen Treadmill",
    category: "Treadmills",
    description: "Modern treadmill featuring an Android touch screen and advanced workout experience.",
    features: [
      "Android Touch Screen",
      "Auto Incline",
      "Premium Display",
      "Advanced Performance",
    ],
    image: "/images/pic26.png",
  },
  {
    id: 27,
    name: "Livepro Massage Stick",
    category: "Gym Accessories",
    description: "Massage stick designed to support muscle recovery after training.",
    features: [
      "Livepro",
      "Muscle Recovery",
      "Easy to Use",
      "Portable",
    ],
    image: "/images/pic27.png",
  },
  {
    id: 28,
    name: "Lord Fitness Treadmill",
    category: "Treadmills",
    description: "Commercial-quality treadmill designed for powerful cardio training.",
    features: [
      "Commercial Quality",
      "Powerful Motor",
      "Heavy Duty",
      "Premium Build",
    ],
    image: "/images/pic29.png",
  },
  {
    id: 29,
    name: "NordicTrack Free Stride Trainer",
    category: "Ellipticals",
    description: "Premium free-stride trainer designed for smooth full-body workouts.",
    features: [
      "Free Stride",
      "Full Body Workout",
      "Premium Quality",
      "Low Impact",
    ],
    image: "/images/pic31.png",
  },
  {
    id: 30,
    name: "Heavy Duty Olympic Barbells",
    category: "Free Weights",
    description: "Heavy-duty Olympic barbells designed for serious strength training.",
    features: [
      "Olympic",
      "Heavy Duty",
      "Strength Training",
      "Durable",
    ],
    image: "/images/pic34.png",
  },
  {
    id: 31,
    name: "Marshall Fitness Auto Incline Treadmill",
    category: "Treadmills",
    description: "Auto-incline treadmill designed for powerful cardio workouts.",
    features: [
      "Auto Incline",
      "Powerful Motor",
      "Heavy Duty",
      "Premium Quality",
    ],
    image: "/images/pic35.png",
  },
  {
    id: 32,
    name: "Easy Exerciser",
    category: "Gym Accessories",
    description: "Compact exercise equipment for convenient everyday fitness training.",
    features: [
      "Easy Exercise",
      "Compact",
      "Home Use",
      "Lightweight",
    ],
    image: "/images/pic38.png",
  },
  {
    id: 33,
    name: "Aerobic Step Platform",
    category: "Gym Accessories",
    description: "Step platform designed for aerobic, cardio and functional training.",
    features: [
      "Aerobic Training",
      "Step Platform",
      "Cardio Workout",
      "Durable",
    ],
    image: "/images/pic39.png",
  },
  {
    id: 34,
    name: "Leg Press Machine",
    category: "Strength Equipment",
    description: "Heavy-duty leg press machine for powerful lower-body training.",
    features: [
      "Leg Press",
      "Heavy Duty",
      "Strength Training",
      "Commercial Quality",
    ],
    image: "/images/pic40.png",
  },
];

const faqs = [
  {
    question: "Do you provide delivery across Pakistan?",
    answer:
      "Yes. We can arrange delivery for fitness equipment across major cities in Pakistan. Delivery details depend on the equipment and location.",
  },
  {
    question: "Can I order equipment for a complete gym?",
    answer:
      "Yes. Prime Fitness can help with complete gym equipment packages for commercial gyms, fitness centers and home gyms.",
  },
  {
    question: "Can I ask for a custom quotation?",
    answer:
      "Yes. Contact us on WhatsApp or phone with your requirements and our team can provide a suitable quotation.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Installation can be arranged for selected equipment. Please contact our team for availability in your city.",
  },
  {
    question: "How can I contact Prime Fitness?",
    answer:
      "You can contact us through WhatsApp, phone or email. Our team will help you choose the right equipment.",
  },
];

function ProductDetail({ product, onBack, onWhatsApp }) {
  return (
    <div className="product-detail-page">
      <div className="container">
        <button className="back-products-btn" onClick={onBack}>
          ← Back to Products
        </button>

        <div className="product-detail-grid">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-content">
            <div className="section-label">
              {product.category}
            </div>

            <div className="product-number">
              PRODUCT {String(product.id).padStart(2, "0")}
            </div>

            <h2>{product.name}</h2>

            <p className="product-detail-description">
              {product.description}
            </p>

            <h3>Key Features</h3>

            <ul className="product-detail-features">
              {product.features.map((feature) => (
                <li key={feature}>
                  <CircleCheck size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="product-detail-actions">
              <button
                className="primary-btn"
                onClick={() => onWhatsApp(product.name)}
              >
                Contact Us
                <ArrowRight size={16} />
              </button>

              <button
                className="product-whatsapp detail-whatsapp"
                onClick={() => onWhatsApp(product.name)}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const searchText = search.toLowerCase();

const matchesSearch =
  (product.name || "").toLowerCase().includes(searchText) ||
  (product.category || "").toLowerCase().includes(searchText) ||
  (product.description || "").toLowerCase().includes(searchText);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  const whatsappProduct = (productName) => {
    const message = encodeURIComponent(
      `Hello Prime Fitness, I am interested in ${productName}. Please share more details.`
    );

    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
  };

  const openWhatsApp = () => {
    const openProduct = (product) => {
  setSelectedProduct(product);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const backToProducts = () => {
  setSelectedProduct(null);

  setTimeout(() => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 50);
};
    const message = encodeURIComponent(
      "Hello Prime Fitness, I would like to know more about your fitness equipment."
    );

    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileMenu(false);
  };

  return (
    <>
      {/* HEADER */}
      {selectedProduct && (
  <ProductDetail
    product={selectedProduct}
    onBack={() => setSelectedProduct(null)}
    onWhatsApp={whatsappProduct}
  />
)}
      <header className="header">
        <div className="container nav">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            <div className="logo-mark">
              <Dumbbell size={20} />
            </div>

            <div>
              PRIME
              <small>FITNESS</small>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button
              className="nav-whatsapp"
              onClick={openWhatsApp}
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </button>

            <a className="call-btn" href={`tel:${PHONE}`}>
              <Phone size={15} />
              Call Us
            </a>

            <button
              className="menu-btn"
              onClick={() => setMobileMenu(true)}
              aria-label="Open menu"
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`drawer-overlay ${mobileMenu ? "show" : ""}`}
        onClick={() => setMobileMenu(false)}
      />

      <aside className={`mobile-drawer ${mobileMenu ? "open" : ""}`}>
        <div className="drawer-top">
          <div className="drawer-logo">PRIME FITNESS</div>

          <button
            className="close-btn"
            onClick={() => setMobileMenu(false)}
          >
            <X size={25} />
          </button>
        </div>

        <a href="#home" onClick={() => setMobileMenu(false)}>
          Home
        </a>

        <a href="#products" onClick={() => setMobileMenu(false)}>
          Products
        </a>

        <a href="#about" onClick={() => setMobileMenu(false)}>
          About Us
        </a>

        <a href="#faq" onClick={() => setMobileMenu(false)}>
          FAQ
        </a>

        <a href="#contact" onClick={() => setMobileMenu(false)}>
          Contact
        </a>

        <button className="drawer-whatsapp" onClick={openWhatsApp}>
          <MessageCircle size={18} />
          WhatsApp Us
        </button>
      </aside>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span />
                PREMIUM FITNESS EQUIPMENT
              </div>

              <h1>
                Premium Fitness
                <br />
                <em>Equipment.</em>
                <br />
                Built for Your Goals.
              </h1>

              <p>
                Quality fitness equipment for home gyms, commercial gyms and
                fitness centers across Pakistan. Explore our premium range and
                build a stronger tomorrow.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => scrollTo("products")}
                >
                  Explore Equipment
                  <ArrowRight size={16} />
                </button>

                <button
                  className="secondary-btn"
                  onClick={openWhatsApp}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </button>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>31+</strong>
                  <span>Equipment Options</span>
                </div>

                <div>
                  <strong>Premium</strong>
                  <span>Quality Products</span>
                </div>

                <div>
                  <strong>Pakistan</strong>
                  <span>Wide Delivery</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ring" />

              <div className="hero-equipment">
                <Dumbbell size={150} strokeWidth={1.2} />
              </div>

              <div className="floating-card card-one">
                <Award size={22} />

                <div>
                  <strong>Premium Quality</strong>
                  <span>Built for performance</span>
                </div>
              </div>

              <div className="floating-card card-two">
                <ShieldCheck size={22} />

                <div>
                  <strong>Reliable Equipment</strong>
                  <span>For every fitness goal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="trust-section">
          <div className="container trust-grid">
            <div className="trust-item">
              <Truck size={25} />

              <div>
                <strong>Delivery Across Pakistan</strong>
                <span>Equipment delivered to your location</span>
              </div>
            </div>

            <div className="trust-item">
              <Award size={25} />

              <div>
                <strong>Premium Equipment</strong>
                <span>Quality products for serious training</span>
              </div>
            </div>

            <div className="trust-item">
              <ShieldCheck size={25} />

              <div>
                <strong>Trusted Quality</strong>
                <span>Built for long-term performance</span>
              </div>
            </div>

            <div className="trust-item">
              <Headphones size={25} />

              <div>
                <strong>Expert Support</strong>
                <span>Help choosing the right equipment</span>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section categories-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">SHOP BY CATEGORY</div>
                <h2>Find Your Equipment.</h2>
              </div>

              <p>
                From cardio machines to professional strength equipment,
                explore solutions designed for home and commercial gyms.
              </p>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <button
                  className="category-card"
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setShowAll(true);
                    scrollTo("products");
                  }}
                >
                  <div className="category-icon">{category.icon}</div>

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <div className="category-arrow">
                    <ArrowRight size={18} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">OUR CATALOGUE</div>
                <h2>Premium Equipment.</h2>
              </div>

              <p>
                Browse our equipment catalogue and contact us directly for
                product availability, specifications and quotations.
              </p>
            </div>

            <div className="catalog-controls">
              <div className="search-box">
                <Search size={19} />

                <input
                  type="text"
                  placeholder="Search equipment..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowAll(true);
                  }}
                />
              </div>

              <div className="category-filter">
                <button
                  className={activeCategory === "All" ? "active" : ""}
                  onClick={() => {
                    setActiveCategory("All");
                    setShowAll(false);
                  }}
                >
                  All Equipment
                </button>

                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={
                      activeCategory === category.name ? "active" : ""
                    }
                    onClick={() => {
                      setActiveCategory(category.name);
                      setShowAll(true);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="results-info">
              <span>
                Showing {visibleProducts.length} of {filteredProducts.length}{" "}
                products
              </span>

              {activeCategory !== "All" && (
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setShowAll(false);
                  }}
                >
                  Clear filter
                </button>
              )}
            </div>

            {visibleProducts.length > 0 ? (
              <div className="products-grid">
                {visibleProducts.map((product) => (
                  <article
  className="product-card"
  key={product.id}
  onClick={() => setSelectedProduct(product)}
  style={{ cursor: "pointer" }}
>
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="image-placeholder">
                        <Dumbbell size={45} strokeWidth={1} />
                        <span>Product Image</span>
                      </div>

                      <div className="product-category">
                        {product.category}
                      </div>
                    </div>

                    <div className="product-content">
                      <div className="product-number">
                        PRODUCT {String(product.id).padStart(2, "0")}
                      </div>

                      <h3>{product.name}</h3>

                      <p>{product.description}</p>

                      <div className="product-features">
                        {(product.features || []).map((feature) => (
                          <span key={feature}>{feature}</span>
                        ))}
                      </div>

                      <div className="product-bottom">
  <button
    className="product-contact"
    onClick={(e) => {
      e.stopPropagation();
      setSelectedProduct(product);
    }}
  >
    Contact Us
    <ArrowRight size={14} />
  </button>

  <button
    className="product-whatsapp"
    onClick={(e) => {
      e.stopPropagation();
      whatsappProduct(product.name);
    }}
    aria-label={`WhatsApp about ${product.name}`}
  >
    <MessageCircle size={17} />
  </button>
</div>

                      <div className="product-actions">
                        <button
                          className="product-contact"
                          onClick={() => whatsappProduct(product.name)}
                        >
                          Get Details
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Search size={40} />

                <h3>No equipment found</h3>

                <p>
                  Try another search term or select a different category.
                </p>
              </div>
            )}

            {filteredProducts.length > 8 && (
              <div className="view-all">
                <button
                  className="outline-btn"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "View All Equipment"}

                  {showAll ? (
                    <ChevronUp size={15} />
                  ) : (
                    <ChevronDown size={15} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-box">
                <Dumbbell size={115} strokeWidth={1} />

                <span>PRIME FITNESS</span>
              </div>
            </div>

            <div className="about-content">
              <div className="section-label">ABOUT PRIME FITNESS</div>

              <h2>
                Equipment That
                <br />
                <em>Moves You.</em>
              </h2>

              <p>
                Prime Fitness provides premium fitness equipment for people
                and businesses who take fitness seriously.
              </p>

              <p>
                Whether you are setting up a home gym, launching a commercial
                fitness center or upgrading an existing facility, our
                catalogue gives you a wide range of cardio, strength and
                accessory equipment.
              </p>

              <div className="about-points">
                <div>
                  <Check size={18} />
                  Quality-focused equipment
                </div>

                <div>
                  <Check size={18} />
                  Solutions for home and commercial gyms
                </div>

                <div>
                  <Check size={18} />
                  Assistance with equipment selection
                </div>

                <div>
                  <Check size={18} />
                  Delivery options across Pakistan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <div className="section-label">READY TO BUILD YOUR GYM?</div>

              <h2>Let's Get You Moving.</h2>

              <p>
                Tell us what you need and our team will help you find the right
                fitness equipment for your goals and space.
              </p>
            </div>

            <div className="cta-buttons">
              <button
                className="primary-btn light"
                onClick={openWhatsApp}
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </button>

              <a
                className="secondary-btn light-border"
                href={`tel:${PHONE}`}
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" id="faq">
          <div className="container faq-container">
            <div className="section-heading">
              <div>
                <div className="section-label">FAQ</div>
                <h2>Questions, Answered.</h2>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                    >
                      <span>{faq.question}</span>

                      {isOpen ? (
                        <ChevronUp size={19} />
                      ) : (
                        <ChevronDown size={19} />
                      )}
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="section-label">GET IN TOUCH</div>

              <h2>
                Let's Talk
                <br />
                <em>Fitness.</em>
              </h2>

              <p>
                Need help selecting equipment or want a quotation for your
                gym? Get in touch with Prime Fitness today.
              </p>

              <div className="contact-info">
                <div>
                  <div className="contact-icon">
                    <Phone size={18} />
                  </div>

                  <div>
                    <small>PHONE</small>
                    <a href={`tel:${PHONE}`}>{PHONE}</a>
                  </div>
                </div>

                <div>
                  <div className="contact-icon">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <small>WHATSAPP</small>
                    <button
                      style={{
                        border: 0,
                        background: "transparent",
                        padding: 0,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                      onClick={openWhatsApp}
                    >
                      Chat with us on WhatsApp
                    </button>
                  </div>
                </div>

                <div>
                  <div className="contact-icon">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <small>LOCATION</small>
                    <strong>M.A. Jinnah Road, Light House Sports Market, Karachi, Pakistan</strong>
                  </div>
                </div>
              </div>

              <div className="contact-buttons">
                <button className="primary-btn" onClick={openWhatsApp}>
                  <MessageCircle size={17} />
                  WhatsApp Us
                </button>

                <a className="secondary-btn" href={`tel:${PHONE}`}>
                  <Phone size={17} />
                  Call Us
                </a>
              </div>
            </div>

            <div className="map-card">
              <div className="map-placeholder">
                <MapPin size={45} />

                <h3>Prime Fitness Pakistan</h3>

                <p>
                  Premium fitness equipment for home gyms, commercial gyms
                  and fitness centers.
                </p>

                <span>
                  Contact our team for exact location, delivery and
                  installation details.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo footer-logo">
                <div className="logo-mark">
                  <Dumbbell size={19} />
                </div>

                <div>
                  PRIME
                  <small>FITNESS</small>
                </div>
              </div>

              <p>
                Premium fitness equipment for home gyms, commercial gyms and
                fitness centers across Pakistan.
              </p>
            </div>

            <div>
              <h4>QUICK LINKS</h4>

              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About Us</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>SHOP</h4>

              <a
                href="#products"
                onClick={() => setActiveCategory("Treadmills")}
              >
                Treadmills
              </a>

              <a
                href="#products"
                onClick={() => setActiveCategory("Ellipticals")}
              >
                Ellipticals
              </a>

              <a
                href="#products"
                onClick={() => setActiveCategory("Strength Equipment")}
              >
                Strength Equipment
              </a>

              <a
                href="#products"
                onClick={() => setActiveCategory("Free Weights")}
              >
                Free Weights
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Prime Fitness Pakistan. All rights reserved.</span>

            <span>PREMIUM FITNESS EQUIPMENT</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="WhatsApp Prime Fitness"
      >
        <MessageCircle size={27} />
      </button>
    </>
  );
}

export default App;
