import React, { useState, useEffect } from "react";
import Stocklist from "./stockList";
import carData from "./carData";
import "../css/homepage.css";
import { Link } from "react-router-dom";
import RightSidebar from "./rightsidebar";
import SearchForm from "./searchContainer";
import MediaSlider from "./slider";
import Makestypes from "./makestypes";
import { FaHandPointer } from "react-icons/fa";
import useCheckScreenSize from "./screenSize";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    location: "",
    searchTerm: "",
  });

  const isSmallScreen = useCheckScreenSize();

  useEffect(() => {
    setCars(carData);
  }, []);

  const cards = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/howToBuy.png`,
      link: "/help?topic=How%20to%20Buy%20used%20cars",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/howtopay.png`,
      link: "/help?topic=About%20payement",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/Thumbnails/security.png`,
      link: "/help?topic=security",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/Thumbnails/eco.png`,
      link: "/help?topic=Sustainability",
    },
  ];

  const links1 = [
    { text: "OVERVIEW", path: "/help?topic=Overview" },
    { text: "COMPANY PROFILE", path: "/help?topic=Company%20Profile" },
    { text: "BANK INFORMATION", path: "/help?topic=Bank%20Information" },
    { text: "WHY ARTISBAY INC", path: "/help?topic=Why%20Artisbay%20Inc." },
    {
      text: "TERMS AND CONDITIONS",
      path: "/help?topic=Terms%20%26%20Conditions",
    },
    {
      text: "ANTI SOCIAL FORCES POLICY",
      path: "/help?topic=Anti-Social%20Force%20Policy",
    },
    {
      text: "HOW TO BUY CARS ON ARTISBAY INC",
      path: "/help?topic=How%20to%20Buy%20used%20cars",
    },
  ];

  const links2 = [
    { text: "ABOUT USED TIRES", path: "/help?topic=about%20used%20Tires" },
    {
      text: "ABOUT DISMANTLED CARS",
      path: "/help?topic=about%20Dismantled%20Cars",
    },
    { text: "ABOUT PAYMENT", path: "/help?topic=About%20payement" },
    { text: "SECURITY", path: "/help?topic=security" },
    { text: "PRIVACY", path: "/help?topic=privacy%20policy" },
    {
      text: "TELEGRAPHIC TRANSFER",
      path: "/help?topic=telegraphic%20transfer",
    },
    {
      text: "SELL ON ARTISBAY INC.",
      path: "/help?topic=sell%20on%20artisbay%20Inc.",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="homepage">
            <MediaSlider />
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="row g-2">
        {cards.map((card, index) => (
          <div key={index} className="col-6 col-md-3">
            <Link to={card.link} className="info-card-link">
              <div className="info-card h-100">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="img-fluid info-card-image"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Makestypes />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <div className="usefulLinks_wrapper">
            <div className="usefulLinks_container">
              <img
                className="title-img img-fluid"
                src={`${process.env.PUBLIC_URL}/images/usefullLinksTitle.png`}
                alt="usefullLinks"
                loading="lazy"
              />
              <div className="row g-2">
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled">
                    {links1.map((link, index) => (
                      <li key={index} className="mb-2">
                        <Link to={link.path} className="text-decoration-none">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled">
                    {links2.map((link, index) => (
                      <li key={index} className="mb-2">
                        <Link to={link.path} className="text-decoration-none">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="image-usefulLinks_container">
                <img
                  alt="Company Profile"
                  src={`${process.env.PUBLIC_URL}/images/companyprofile.jpg`}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12">
          <div className="ad-header-container">
            <picture>
              <source
                srcSet={`${process.env.PUBLIC_URL}/images/tiresbannerhome.webp`}
                type="image/webp"
              />
              <source
                srcSet={`${process.env.PUBLIC_URL}/images/tiresbannerhome.jpeg`}
                type="image/jpeg"
              />
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/tiresbannerhome.jpeg`}
                alt="Tires banner"
              />
            </picture>
            <Link to="/help?topic=about%20used%20Tires">
              <button className="btn btn-primary order-now">read more</button>
            </Link>
          </div>
        </div>

        <div className="col-12">
          <div className="ad-header-container">
            <picture>
              <source
                srcSet={`${process.env.PUBLIC_URL}/images/dismantlinghome.webp`}
                type="image/webp"
              />
              <source
                srcSet={`${process.env.PUBLIC_URL}/images/dismantlinghome.jpeg`}
                type="image/jpeg"
              />
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/dismantlinghome.jpeg`}
                alt="dismantling banner"
              />
            </picture>
            <Link to="/car-dismantling">
              <button className="btn btn-primary dismantling-btn">
                read more
              </button>
            </Link>
          </div>
        </div>

        <div className="col-12">
          <div className="ad-header-container">
            <div className="bordered">
              <img
                src={`${process.env.PUBLIC_URL}/images/paymentmethodshome.png`}
                className="img-fluid"
                alt="Payment Methods"
              />
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <Link to="/help?topic=security">
                  <button className="btn btn-primary security-btn">
                    read more
                  </button>
                </Link>
                <Link to="/help?topic=paypal">
                  <button className="btn btn-primary paypal-btn">
                    read more
                  </button>
                </Link>
                <Link to="/help?topic=telegraphic%20transfer">
                  <button className="btn btn-primary bank-btn">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="ad-header-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/sellhome.jpeg`}
              className="img-fluid"
              alt="sell banner"
            />
            <Link to="/help?topic=sell%20on%20artisbay%20Inc.">
              <button className="btn btn-primary sell-btn">Read more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <div className="newsupdates">
            <img
              className="title-img img-fluid"
              src={`${process.env.PUBLIC_URL}/images/news&updatestitle.png`}
              alt="News & Updates"
            />
            <div className="news-item-container">
              <div className="news-items">
                <p className="news-item">2024/11/15 Artisbay Inc was born</p>
                <p className="news-item">
                  2024/12/02 Artisbay Inc website published
                </p>
                <p className="news-item">
                  Holidays from 28 December to 5 January
                </p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/homepage/companynewsicon.png`}
                className="img-fluid"
                alt="Company News"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <div className="ad-header-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/ecohome2.jpeg`}
              className="img-fluid"
              alt="eco friendly banner"
            />
            <Link to="/help?topic=Sustainability">
              <button className="btn btn-primary small-banner-btn eco-btn">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12">
          <section className="why-choose-us">
            <h2 className="mb-4">Why Choose Us?</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/whychooseushome.png`}
              alt="Why Choose Us"
              className="img-fluid mb-4"
            />
            <p className="bold-text">
              With over 40 years of experience and a passion for quality, we
              deliver high-standard used vehicles, tires, and parts tailored to
              your needs. Our transparent processes and detailed documentation
              ensure confidence and trust in every transaction.{" "}
              <Link className="cta-link" to="/help?topic=Why%20Artisbay%20Inc.">
                Read more
              </Link>
            </p>
          </section>
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <section className="contact-cta">
            <h2 className="mb-3">Need help?</h2>
            <p className="mb-4">
              Contact us today and let us help you import your next car with
              ease!
            </p>
            <Link className="btn btn-primary cta-button" to="/contact">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
