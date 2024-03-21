import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import TeamMemberCard from "../components/card/TeamMemberCard";
import MainTitle from "../components/title/MainTitle";
import PageHeader from "../components/headers/PageHeader";
import ButtonOne from "../components/button/ButtonOne";

const About = () => {
  return (
    <>
      <NavBar />

      <div className="">
        <div className="">
          <PageHeader
            image="../../assets/images/hero-background.png"
            heading="About Us"
            des="BidWiz is an online auction website that provides a platform for users to bid on a wide range of products and items."
          />
        </div>
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <MainTitle main="Who We Are?" />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%]">
          <div className="flex max-w-[1140px]  justify-center">
            <p className="text-center">
              At Lockit, we're passionate about enhancing the safety and
              security of cyclists everywhere. Our mission is to provide
              innovative solutions that protect your bicycle and give you peace
              of mind, whether you're commuting to work, cruising through the
              city, or embarking on an epic adventure.At Lockit, we're
              passionate about enhancing the safety and security of cyclists
              everywhere. Our mission is to provide innovative solutions that
              protect your bicycle and give you peace of mind, whether you're
              commuting to work, cruising through the city, or embarking on an
              epic adventure.At Lockit, we're passionate about enhancing the
              safety and security of cyclists everywhere. Our mission is to
              provide innovative solutions that protect your bicycle and give
              you peace of mind, whether you're commuting to work, cruising
              through the city, or embarking on an epic adventure. whether
              you're commuting to work, cruising through the city, or embarking
              on an epic adventure.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <MainTitle main="Development Team" />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1140px]  justify-center pb-8">
            <TeamMemberCard
              name="Yasith Eranda"
              des="Web Devoloper, UI/UX Designer, Graphic Designer"
              image="images/team/yasith-2.png"
              linkedin="https://www.linkedin.com/in/yasith-eranda-yapa-amarasekara/"
              github="https://github.com/yashEra"
              fb="https://web.facebook.com/yash.era1998/"
              portfolio="https://cv.yasitheranda.me/"
            />
            <TeamMemberCard
              name="Niwandi Githma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/niwandi.jpg"
              linkedin="https://www.linkedin.com/in/niwandi-hewagama/"
              github="#"
              fb="https://www.facebook.com/githma.hewagama?mibextid=LQQJ4d"
              // portfolio="#"
            />
            <TeamMemberCard
              name="Malith Rathnayake"
              des="Web Developer, Tech Enthusiest, Videographer"
              image="images/team/malith.jpg"
              linkedin="https://www.linkedin.com/in/malith-rathnayake-07b7b721a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="#"
              fb="https://www.facebook.com/malithpromoddaya.rathnayake?mibextid=ZbWKwL"
              // portfolio="#"
            />
            <TeamMemberCard
              name="Thanujaa Venkadakrishnasharma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/thanujaa.jpg"
              linkedin="https://www.linkedin.com/in/thanujaa-venkadakrishnasharma-68164323b/"
              github="https://github.com/Thanujaavks"
              // fb=""
              // portfolio="#"
            />
            <TeamMemberCard
              name="MRF Nuwaifa"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/nuwaifa.jpg"
              linkedin="https://web.facebook.com/profile.php?id=61555082611608"
              github="https://github.com/mrf017 "
              fb="https://www.linkedin.com/in/mrf-nuwaifa-a0b267290/?msgOverlay=true"
              // portfolio="#"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <MainTitle main="Join the Lockit Community" />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%] pb-16">
          <div className="flex flex-col items-center max-w-[1140px]  justify-center">
            <p className="text-center">
              Join thousands of cyclists around the world who trust Lockit to
              keep their bikes safe and secure. Whether you're a seasoned
              commuter, a weekend warrior, or a casual rider, we invite you to
              experience the difference that our smart locks can make. Explore
              our range of products today and ride with confidence knowing that
              your bicycle is in good hands.
            </p>
            <ButtonOne />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
