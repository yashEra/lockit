import recat from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero-section/HeroSection";
import MainTitle from "../components/title/MainTitle";
import FeaturesCard from "../components/card/FeaturesCard";
import ContactForm from "../components/forms/ContactForm";
import ButtonOne from "../components/button/ButtonOne";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MainTitle main="What We Do?" />
      <div className="flex flex-col items-center pb-8 px-6">
        <p className="text-[16px] text-justify lg:text-center text-[#555555] max-w-[1140px]">
          At Lockit, we're passionate about enhancing the safety and security of
          cyclists everywhere. Our mission is to provide innovative solutions
          that protect your bicycle and give you peace of mind, whether you're
          commuting to work, cruising through the city, or embarking on an epic
          adventure.
        </p>
      </div>
      <MainTitle main="Why Choose Us?" />

      <div className="flex flex-col items-center pb-8 px-6">
        <div className="text-[16px] text-center text-[#555555] max-w-[1140px] grid lg:grid-cols-3 gap-4 pt-6">
          <FeaturesCard
            icon={require('../assets/images/icon-1.png')}
            title="Smart Lock Technology"
            description="Gone are the days of fumbling with keys or worrying about lost combinations. Our smart bicycle locks utilize state-of-the-art technology to offer convenient, keyless access. With features like fingerprint recognition, Bluetooth connectivity, and smartphone control, you can lock and unlock your bike with ease, all while keeping it safe from theft."
          />
          <FeaturesCard
            icon={require('../assets/images/icon-2.png')}
            title="Robust Security Features"
            description="We understand that your bicycle is more than just a mode of transportation—it's an investment, a means of freedom, and a reflection of your lifestyle. That's why our locks are engineered with robust security features to deter even the most determined thieves. From tamper alerts and motion sensors to hardened steel construction, we've got you covered."
          />
          <FeaturesCard
            icon={require('../assets/images/icon-3.png')}
            title="User-Friendly Design"
            description="Our commitment to usability extends beyond just security. We believe that your bicycle lock should enhance your riding experience, not hinder it. That's why we've designed our locks to be user-friendly and intuitive, with features like compact designs, easy installation, and long-lasting battery life."
          />
        </div>
      </div>
      <MainTitle main="Join the Lockit Community" />
      <div className="flex flex-col items-center pb-8">
        <p className="text-[16px] text-justify lg:text-center text-[#555555] max-w-[1140px] px-6">
          Join thousands of cyclists around the world who trust Lockit to keep
          their bikes safe and secure. Whether you're a seasoned commuter, a
          weekend warrior, or a casual rider, we invite you to experience the
          difference that our smart locks can make. Explore our range of
          products today and ride with confidence knowing that your bicycle is
          in good hands.
        </p>
        <ButtonOne />
      </div>
      <MainTitle main="Getting Touch With Us" />
      <div className="flex flex-col lg:items-center pb-8 px-6">
      <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
