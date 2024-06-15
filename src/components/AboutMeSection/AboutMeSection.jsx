import style from "../../styles/AboutMeSectionStyles/AboutMeSection.module.css"

export default function AboutMeSection(){

  return(
    <div className={style.aboutMeContainer}>
      <div className={style.aboutMeWrapper}>
          <h2 className={style.subTitle}>about me.</h2>
          <div className={style.aboutMeDiscriptionWrapper}>
            <div>
              <h3 className={style.aboutMeInfoTitle}>who am I?</h3>
              <p className={style.aboutMeInfo}>
                My name is Filo Vaesau, I come from a small island in the middle
                of the Pacific Ocean, the island of Samoa, I currently reside in
                Dublin, Ca. I am a developer who started out developing Frontend
                and progressed into Backend Development
              </p>
            </div>
            <div>
              <h3 className={style.aboutMeInfoTitle}>my goals.</h3>
              <p className={style.aboutMeInfo}>
                I aim to further my knowledge of the industry and its standards,
                continue to develope my skills and remain agile in my overall
                development. Become an assist to my future employers and team
                members. Collaborate and build meaningful projects that will
                benefit society.
              </p>
            </div>
            <div>
              <h3 className={style.aboutMeInfoTitle}>the WHY.</h3>
              <p className={style.aboutMeInfo}>
                To become a <strong>Beacon of light</strong> for the future
                generations of <strong>Polynesians and People of Color</strong>{' '}
                who may pursue a field in <strong>STEM</strong>. To establish
                myself in the industry and{' '}
                <strong>
                  reach back to help those who will come after me.
                </strong>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}