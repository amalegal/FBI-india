import React from 'react';
import { AspectRatio } from '@chakra-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../assets/about/abouthero.jpg';
import about1 from '../assets/about/about1.png';
import about2 from '../assets/about/about2.jpeg';
import about3 from '../assets/about/about3.png';
import about4 from '../assets/about/about4.png';
import YT1 from '../assets/about/YT(1).jpeg';
import YT2 from '../assets/about/YT(2).jpeg';
import YT3 from '../assets/about/YT(3).jpeg';
import YT4 from '../assets/about/YT(4).jpeg';
import YT5 from '../assets/about/YT(5).jpeg';
import YT6 from '../assets/about/YT(6).jpeg';
import './About.css';

function Contact() {
  return (
    <>
      <Header />
      <div className="About"
      >
        <div className="About-hero">
          <img src={Hero} />
        </div>
        <div className="About-flex">
          <img src={about1} alt="" />
          <div className="About-flex-content">
            <h1>
              <strong> Unique Dining Concept </strong>
            </h1>
            <p>
            Food Bus of India introduces a truly unique dining concept with its double-decker bus restaurant, setting it apart from traditional restaurants and attracting a broad audience.
            </p>
          </div>
        </div>
        <div className="About-flex">
          <div className="About-flex-content">
            <h1>
              <strong> Diverse Menu </strong>
            </h1>
            <p>
              Our menu is a culinary journey that spans Indian, Contiental ,
              Chinese, and more, offering a wide variety of around 50+ SKUs
            </p>
          </div>
          <img src={about2} alt="" />
        </div>
        <div className="About-flex">
          <img src={about3} alt="" />
          <div className="About-flex-content">
            <h1>
              <strong> Tech and Chef’s Collaboration</strong>
            </h1>
            <p>
            Our Technologists collaborate closely with our chef’s to ensure a top-notch dining experience combining the best of technology and culinary expertise
            </p>
          </div>
        </div>
        <div className="About-flex">
          <div className="About-flex-content">
            <h1>
              <strong> Location Flexibility</strong>
            </h1>
            <p>
            We eliminate location constraints, allowing it to adapt to various settings, such as hospitals, universities, and high-traffic areas, expanding its customer base.
            </p>
          </div>
          <img src={about4} alt="" />
        </div>
        {/* <div className="About-services">
                    <h1>Our Comprehensive Services</h1>
                <div className="About-services-flex">
                <div className="About-services-card">
                <strong> Consultation Services </strong> <br />
                Our team of experts is ready to provide you with personalized consultation services tailored to your specific grievance. Whether you're facing consumer complaints, GST issues, or other challenges, we offer professional advice to help you navigate the complexities and find solutions.
                </div>
                <div className="About-services-card">
                <strong> Grievance Filing Assistance</strong> <br />
                We take the guesswork out of the filing process. Whether it's submitting a consumer complaint, managing GST-related matters, or addressing any other grievance mentioned in our portal, we offer hands-on assistance to ensure your filings are accurate and efficient.
                </div>
                <div className="About-services-card">
                <strong> Expert Support</strong> <br />
                With Daily Samadhan, you have access to a team of seasoned professionals who are well-versed in resolving a wide range of grievances. We're here to answer your questions, address your concerns, and guide you toward successful resolutions.
                </div>
                </div>
                </div> */}
        {/* <div className="About-why-us">
                    <img src={Whyus} alt="" />
                </div> */}
        {/* <div className="Why-choose">
                    <div className="typography">
                        <h1>Why Choose Daily Samadhan</h1>
                        <p>
                            <strong>Reliable Resources: </strong>We curate and provide the most reliable and up-to-date resources to ensure you have the information you need at your fingertips.
                            <br />
                            <strong>Empowerment Through Information: </strong>We firmly believe that an informed individual is an empowered individual. Our goal is to equip you with the knowledge required to tackle life's challenges head-on.
                            <br />
                            <strong>Simplicity and Convenience: </strong>We understand that resolving grievances can be complex, so we strive to simplify the process by offering straightforward, easy-to-follow solutions.
                            <br />
                            <strong>Your Everyday Companion: </strong>Think of us as your partner in your daily journey toward resolution. We're here for you every day, ready to help you overcome your struggles.
                        </p>
                    </div>
                    <div className="question-marks">
                        <img src={question} alt="" />
                    </div>
                </div> */}
        <div className="About-starting">
          <h1>
            Wanna Know More About <br /> Food Bus India???
          </h1>
          <div className="About-starting-box">
            <div className="box1">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/uKROkBX2Ohc"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="box2">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/Mz0XZlmajFo"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="box3">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/HBZaEOKkC18"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>
          <div className="About-Starting-Box">
            <div className="box4">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/H3ShgL1Gyaw"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="box5">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/8OJmZeqa80k"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="box6">
              <AspectRatio h="35vh" w="25vw">
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/gGPn92wLmmA"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
