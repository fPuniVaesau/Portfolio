import style from './styles/AppStyles/App.module.css';
import Hero from './components/HeroComponents/Hero';

export default function App() {
  return (
    <>
      <div className={style.MainContainer}>
        <Hero />
        <Hero />
        <Hero />
      </div>
    </>
  );
}
