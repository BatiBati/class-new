import style from "../styles/about.module.css";
export default function about() {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <div>
          <h1>Hi, I’m Tom 👋</h1>
          <p className={style.pTag}>
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className={style.leftSideMiddle}>
          <div>
            <div className={style.imgCont}>
              <img src="./image/LocationIcon.png" />
            </div>
            <div>Ulaanbaatar, Mongolia</div>
          </div>
          <div>
            <div className={style.dotCont}>
              <div className={style.dott}></div>
            </div>
            <div> Available for new projects </div>
          </div>
        </div>

        <div>
          <img src="/image/Links.png" />
        </div>
      </div>
      <div className={style.rightSide}>
        <img src="/image/pic.png" />
      </div>
    </div>
  );
}
