import profilePic from '../../images/filovaesau.jpg';
import style from '../../styles/AboutMeStyles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <div className={style.container}>
        <div>
          <img
            className={style.profilePic}
            src={profilePic}
            alt='profile picture'
          />
        </div>
       
        <div>
          <a href=''>GitHub
          </a>
          <a href=''>LinkedIn</a>
          <a href=''>Email</a>
        </div>
      </div>
    </>
  );
}
