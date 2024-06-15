import style from './styles/AppStyles/App.module.css';
import Hero from './components/HeroComponents/Hero';
import MainSection from './components/MainSection/MainSection';

export default function App() {
  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.scrollWatcher}></div>
        <div>
          <Hero />
        </div>
        <div className={style.AboutMeContainer}>
          <MainSection />
        </div>
      </div>
    </>
  );
}
