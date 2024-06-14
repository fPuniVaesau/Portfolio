import style from './styles/AppStyles/App.module.css';
import Hero from './components/HeroComponents/Hero';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.scrollWatcher}></div>
        <div>
          <Hero />
        </div>
        <div className={style.AboutMeContainer}>
          <AboutMe />
        </div>
      </div>
    </>
  );
}
