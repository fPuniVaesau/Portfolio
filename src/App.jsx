import style from './styles/AppStyles/App.module.css';
import Hero from './components/HeroComponents/Hero';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  return (
    <>
      <div className={style.MainContainer}>

        <div className={style.scrollWatcher}></div>
        <Hero />
        <AboutMe />
        <h1>testing</h1>
      </div>
    </>
  );
}
