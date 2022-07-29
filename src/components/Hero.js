import hero from "../assets/hero.jpg";
import dechire from "../assets/dechire.webp";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={hero} alt='hero'></img>
      <img src={dechire} alt='dechiré' className='dechire'></img>
      <div className='hero-card'>
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Commencer à vendre </button>
      </div>
    </div>
  );
};

export default Hero;
