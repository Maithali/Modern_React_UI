import "./Hero.css";
import arrow from "../../assets/arrow.png";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrow} alt="" style={{ width: "80px" }} />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(3)}
            className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(4)}
            className={heroCount === 4 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(5)}
            className={heroCount === 5 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause : play}
            alt=""
            style={{ width: "80px" }}
          />
          <p>Watch the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
