import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Ul1Icon } from './ul1.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Ul2Icon } from './ul2.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Ul3Icon } from './ul3.svg';
import { ReactComponent as sec3sc2 } from './sec3sc2.png';
import sec3sc1 from './sec3sc1.png';
import { ReactComponent as Rightvector } from './right.svg';
import { ReactComponent as Leftvector } from './left.svg';
import { ReactComponent as Follow1 } from './follow1.svg';
import { ReactComponent as Follow2 } from './follow2.svg';
import { ReactComponent as Call } from './call.svg';
import sec6sc1 from './sec6sc1.png';
import footersc1 from './footersc1.png';
import footersc2 from './footersc2.png';
import footersc3 from './footersc3.png';
import footersc4 from './footersc4.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShouldShowDropdown(!isDropdownOpen);
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      const timer = setTimeout(() => {
        setShouldShowDropdown(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isDropdownOpen]);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
         <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="nav">
          <ul>
            <li className="dropdown">
              <a href="#" onClick={toggleDropdown} className='M'>
                Services <span className="arrow">{isDropdownOpen ? '∧' : '∨'}</span>
              </a>
              {shouldShowDropdown && (
                <ul className={`dropdown-content ${isDropdownOpen ? 'show' : 'hide'}`}>
                  <li><a href="#">Cabinet Refacing</a></li>
                  <li><a href="#">Cabinet Doors Replacement</a></li>
                  <li><a href="#">Thermofoil Cabinet Door Repair</a></li>
                  <li><a href="#">Decorative Wall Panels</a></li>
                </ul>
              )}
            </li>
            <li className='M'><a href="#">Commercial</a></li>
            <li className='M'><a href="#">Gallery</a></li>
            <li className='M'><a href="#">About Us</a></li>
            <li className='M'><a href="#">Areas We Serve</a></li>
            <li className='M'><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="contact">
          <a href="#">(800) 809-7197</a>
          <button className='get-button'>Get a Free Estimate</button>
        </div>
        <button className="menu-toggle-call">
          <Call />
        </button>
        <button className="menu-toggle" onClick={toggleMenu}>
            ☰
        </button>
      </header>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className='heading5'><a href="#">Services</a></li>
          <li className='heading5'><a href="#">Commercial</a></li>
          <li className='heading5'><a href="#">Gallery</a></li>
          <li className='heading5'><a href="#">About Us</a></li>
          <li className='heading5'><a href="#">Contact Us</a></li>
        </ul>
        <a href="#" className="get-button-mobile">Get Your Free Estimate</a>
      </div>
      <body>
        <div className='section1'>
          <div className="section1-content">
            <h1 className="heading1">Your Kitchen Refacing Solution</h1>
            <p className="L">Bringing New Life to Your Kitchen Cabinets: American-Made, Family-Owned Company</p>
            <div className="section1-buttons">
              <button className="get-button">Get a Free Estimate</button>
              <button className="view-button">View Our Process</button>
            </div>
           </div>
        </div>
        <div className='section2'>
          <ul>
            <li className='M'>
              <div className='circlebuttonsec2'>
                <Ul1Icon />
              </div>
              Unlock 70% savings: <br />reface instead of replace</li>
            <li className='M'>
              <div className='circlebuttonsec2'>
                <Ul2Icon />
              </div>
              Transform your kitchen <br /> in 3-5 days</li>
            <li className='M'>
              <div className='circlebuttonsec2'>
                <Ul3Icon />
              </div>
              Kitchen financing <br /> options available</li>
          </ul>
        </div>
        <div className='section3'>
          <p className='heading2'>Our Services</p>
          <div className="section3-content">
            <img src={sec3sc1} className='section3scr' />
            <div className='section3-text'>
              <p className='Subheading'>Refresh Your Existing Kitchen with</p>
              <p className='heading2'>Cabinet Refacing</p>
              <p className='XS'>Keep Your Existing Doors</p>
              <p className='S'>Our cabinet refacing service transforms the appearance of your kitchen while preserving its original layout and the structure of your existing cabinets and drawer fronts.</p>
              <a href="#" className="learnmore">Learn More</a>
            </div>
          </div>
          <div className="section3-content">
            <div className='section3-text'>
              <p className='Subheading'>Replace Your Cabinet Doors with </p>
              <p className='heading2'>Cabinet Door Replacement</p>
              <p className='XS'>Custom-made Doors & Drawer Fronts</p>
              <p className='S'>If your cabinet doors and drawer fronts require a refresh, our team can manufacture new cabinet doors in-house. We ensure the new elements seamlessly blend with your existing kitchen, providing an affordable and efficient upgrade.</p>
              <a href="#" className="learnmore">Learn More</a>
            </div>
            <img src={sec3sc1} />
          </div>
          <div className="section3-content">
            <img src={sec3sc1}  />
            <div className='section3-text'>
              <p className='Subheading'>Renew Your Peeling Cabinet Doors with</p>
              <p className='heading2'>Thermofoil Cabinet Door Repair</p>
              <p className='XS'>Nationwide Shipping</p>
              <p className='S'>We are one of very few cabinet refacing companies who can do this service at our workshop here in West Chicago, without disrupting your daily routine. Just ship your peeling or delaminating doors and fronts and get them back updated in less time than ordering new ones. We offer 48h repairs for Illinois residents.</p>
              <a href="#" className="learnmore">Learn More</a>
            </div>
          </div>
        </div>
        <div className='section4'>
          <div className="section4-content">
            <div className='section4-header'>
              <div className='section4-text1'>
                <li className='heading2'>Gallery</li>
              </div>
              <div className='section4-text2'>
                <li>Browse our gallery to see before and after photos of our previous cabinet refacing projects. Our transformative work speaks for itself.</li>
                <a href="#" className="view-button">Browse The Gallery</a>
              </div>
            </div>
            <div className='section4-screens'>
              <div className='screen'>
                <img src={sec3sc1} />
                <button className='screen-button'>Before</button>
              </div>
              <div className='screen'>
                <img src={sec3sc1} />
                <button className='screen-button'>After</button>
              </div>
            </div>
            <div className='section4-text-bottom'>
              <div>
                <p className='S'>View The Project</p>
              </div>
              <div className='sec4-buttons'>
              <button className='buttons-lr'>
                <Leftvector />
              </button>
              <button className='buttons-lr'>
                <Rightvector />
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <div className="testimonials-header">
            <h2 className='heading2'>Testimonials</h2>
            <p className='M'>Read what our satisfied clients say about their experience with Kitchen Cabinet Guys and the quality of our work.</p>
          </div>
          <div className="testimonials-content">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="M">THE Kitchen Cabinet Guys ARE GREAT! HIGHLY RECOMMENDED! I found them on the Web (Google Search) and filled out a "Contact" form on a Sat. I couldn't believe that Andrei called me on Sunday morn. - I told my wife "I already like these guys!".</p>
              <p className="S">Christopher Torre</p>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="M">Andre and the team @ Kitchen Cabinet Guys LLC did a stunning transformation of my family’s kitchen. Our realtor said we easily increased the value of our home by $30k for less than a third of the cost. If anyone is considering a new kitchen,</p>
              <p className="S">Michael Jason</p>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="M">THE Kitchen Cabinet Guys ARE GREAT! HIGHLY RECOMMENDED! I found them on the Web (Google Search) and filled out a "Contact" form on a Sat. I couldn't believe that Andrei called me on Sunday morn. - I told my wife "I already like these guys!".</p>
              <p className="S">Christopher Torre</p>
            </div>
          </div>
        </div>
        <div className='section6'>
        <div className="kitchen-makeover-section">
          <div className="kitchen-image">
          <img src={sec6sc1} />
          </div>
            <div className="form-container">
              <h2 className='heading2'>Take the First Step Towards Your Kitchen Makeover</h2>
              <p className='M'>Ready to transform your kitchen? Contact us today to get started with your free estimate!</p>
              <form action="#">
                <div className="form-row">
                  <input type="email" placeholder="Firstname" required className='InputHeading'></input>
                  <input type="email" placeholder="Secondname" required className='InputHeading'></input>
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email" required className='InputHeading'></input>
                  <input type="tel" placeholder="Phone" required className='InputHeading'></input>
                </div>
                <input type="text" placeholder="Address" required className='InputHeading'></input>
                <textarea placeholder="Message" required className='InputHeading'></textarea>
                <button type="submit" className='S'>Get a Free Estimate</button>
              </form>
            </div>
        </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className='S'>Physical Address:</h3>
              <p className='M'>245 W. Roosevelt Rd 4 Unit 29,<br />West Chicago, IL 60185</p>
              <h3 className=''>Phone:</h3>
              <p className='M'>(800) 809-7197</p>
              <h3 className='S'>Hours of Operation:</h3>
              <p className='M'>Our Online Support is available 24/7<br />
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed</p>
            </div>
            <div className="footer-column">
              <h3 className='S'>Follow Us:</h3>
              <div className="social-icons">
                <button className='followusbuttons'>
                  <Follow1 />
                  <a href="#"></a>
                </button>
                <button className='followusbuttons'>
                  <Follow2 />
                  <a href="#"></a>
                </button>
              </div>
              <h3 className='S'>Brought to you by</h3>
              <img src={footersc1} />
              <div className="certifications">
              <img src={footersc2} />
              <img src={footersc3} />
              <img src={footersc4} />
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-links">
                <a href="#" className='M'>Blog</a>
                <a href="#" className='M'>FAQ</a>
                <a href="#" className='M'>Privacy Policy</a>
                <a href="#" className='M'>Terms & Conditions</a>
              </div>
            </div>
          </div>
  <div className="footer-bottom">
    <p>Copyright © 2023 Kitchen Cabinet Guys - All Rights Reserved</p>
    <p>Created By <a href="#">Comrade Digital Marketing Agency</a></p>
  </div>
</footer>
      </body>
    </div>
  );
}

export default App;
