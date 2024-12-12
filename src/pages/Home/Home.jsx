import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../../public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Discovering his ties to a secret ancient order,a young man living in
            modern Istanbul embarks on a quest to save the city from an imortal
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards className="title_cards" />
        </div>
      </div>
      <div className="more_cards">
        <TitleCards title={"BlockBuster Movies"} category={"popular"} />
        <TitleCards title={"Only on Netflix"} category={"top_rated"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Pick Movies For You"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
