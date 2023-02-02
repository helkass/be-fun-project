import "./about.css"
import glassCup from "../../assets/glass-cup.png";
import placticCup from "../../assets/plastic-cup.png";
import { articles } from '../../constants/about';


const About = () => {
  return (
    <section className='container about' id='about'>
        <main className='content-about'>
            <div className='flex-about'>
                <div className='image-container-about-1'>
                    <img className="glass-cup" src={glassCup}/>
                    <span className='title title-rotate'>About us</span>
                </div>
                <div className='column article-content'>
                    <p className="article-title">{articles[0].title}</p>
                    <article>{articles[0].article}</article>
                </div>
            </div>
            <div className='flex-about flex-about-reverse'>
                <div className='column article-content'>
                    <p className="article-title">{articles[1].title}</p>
                    <article>{articles[1].article}</article>
                    <button className="about-btn-order">Order Now</button>
                </div>
                <div className='image-container-about-1 bg-light-grey'>
                    <img className="about-plastic-img" src={placticCup}/>
                    <span className='title about-promotion-rotate'>Promotion</span>
                </div>
            </div>  
        </main>
    </section>
  )
}

export default About