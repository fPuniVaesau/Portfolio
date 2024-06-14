import profilePic from '../../images/filovaesau.jpg';
import style from '../../styles/AboutMeStyles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <div className={style.container}>

        <img src="https://i.pinimg.com/originals/0a/dd/5a/0add5a26394fa458118f96c0bb49e840.gif" alt="banner" />
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
