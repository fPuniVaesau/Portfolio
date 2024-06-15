import profilePic from '../../images/filovaesau.jpg';
import Profile from '../Profile/Profile';
import style from '../../styles/MainSectionStyles/MainSection.module.css';
import AboutMeSection from '../AboutMeSection/AboutMeSection';

export default function MainSection() {
  return (
    <div className={style.container}>
      <div className={style.componentOne}>
        <Profile profilePicture={profilePic} />
      </div>
      <div className={style.componentTwo}>
        <AboutMeSection />
      </div>

      <div>
        <img className ={style.test} src="https://i.pinimg.com/originals/71/3c/bf/713cbf391b7830d6d50738ebf0b91091.gif" alt="" />
      </div>

    </div>
  );
}
