import profilePic from "../../images/filovaesau.jpg"
import style from "../../styles/AboutMeStyles/AboutMe.module.css"

export default function AboutMe(){
  return(
    <>
      <div className={style.container}>
        <img className={style.profilePic} src={profilePic} alt="profile picture" />

        <div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}