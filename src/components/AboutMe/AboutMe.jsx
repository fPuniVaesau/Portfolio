import profilePic from '../../images/filovaesau.jpg';
import style from '../../styles/AboutMeStyles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={style.container}>
      {/* This is the card section */}
      <div className={style.cardWrapper}>
        <img
          className={style.banner}
          src='https://i.pinimg.com/originals/0a/dd/5a/0add5a26394fa458118f96c0bb49e840.gif'
          alt='banner'
        />
        <div>
          <img
            className={style.profilePic}
            src={profilePic}
            alt='profile picture'
          />
        </div>
      </div>

      {/* this is the about me section */}
      <div>
        <div>
          <h3 class='aboutMeInfoTitle'>who am I?</h3>
          <p className={style.aboutMeInfo}>
            My name is Filo Vaesau, I come from a small island in the middle of
            the Pacific Ocean, the island of Samoa, I currently reside in
            Dublin, Ca. I am a developer who started out developing Frontend and
            progressed into Backend Development
          </p>
        </div>
        <div>
          <h3 class='aboutMeInfoTitle'>my goals.</h3>
          <p className={style.aboutMeInfo}>
            I aim to further my knowledge of the industry and its standards,
            continue to develope my skills and remain agile in my overall
            development. Become an assist to my future employers and team
            members. Collaborate and build meaningful projects that will benefit
            society.
          </p>
        </div>
        <div>
          <h3 class='aboutMeInfoTitle'>the WHY.</h3>
          <p className={style.aboutMeInfo}>
            To become a <strong>Beacon of light</strong> for the future
            generations of <strong>Polynesians and People of Color</strong> who
            may pursue a field in <strong>STEM</strong>. To establish myself in
            the industry and{' '}
            <strong>reach back to help those who will come after me.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
