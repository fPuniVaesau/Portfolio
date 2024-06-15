import style from "../../styles/ProfileStyles/Profile.module.css"

export default function Profile({profilePicture}){
  return(
    <div className={style.ProfileContainer}>
      <div className={style.imageAndLinksWrapper}>
          {/* profile image */}
          <div>
            <img
              className={style.profilePic}
              src={profilePicture}
              alt='profile picture'
            />
          </div>
          {/* links */}
          <div className={style.links}>
            <a href='https://github.com/fPuniVaesau' target='_blank'>
              <span className={style.linkTitle}>github</span>
            </a>
            <a href='https://www.linkedin.com/in/filovaesau/' target='_blank'>
              <span className={style.linkTitle}>linkedIn</span>
            </a>
            <a href='mailto:filopunivaesau@gmail.com'>
              <span className={style.linkTitle}>email</span>
            </a>

            <a href='#'>
              <span className={style.linkTitle}>resume</span>
            </a>
          </div>
        </div>
    </div>

    
  )
}