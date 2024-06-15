import profilePic from '../../images/filovaesau.jpg';
import Profile from '../Profile/Profile';
import style from '../../styles/MainSectionStyles/MainSection.module.css';
import AboutMeSection from '../AboutMeSection/AboutMeSection';

export default function MainSection() {
  return (
    <div className={style.container}>
      {/* This is the card section */}
      <div className={style.cardWrapper}>
        <Profile profilePicture={profilePic} />
        <AboutMeSection />
      </div>
    </div>
  );
}
