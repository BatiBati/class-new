import style from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <div className={style.navBar}>
      <h1>TOM</h1>
      <div className={style.categore}>
        <h3 className={style.h3Color}>About</h3>
        <h3 className={style.h3Color}>Work</h3>
        <h3 className={style.h3Color}>Testimonials</h3>
        <h3 className={style.h3Color}>Contact</h3>
        <div className={style.divider}>|</div>
        <img src="/image/icon.png" />
        <div className={style.downloadCv}>Download CV</div>
      </div>
    </div>
  );
}
