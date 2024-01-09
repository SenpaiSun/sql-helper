import React from "react";
import '../Footer/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a className="footer__link" href="https://github.com/SenpaiSun/sql-helper" target='_blank'>GitHub URL</a>
      <div className="footer__container">
      <p className="footer__name">Report an error:&nbsp;</p>
      <a className="footer__link" href="mailto:senpai0316@gmail.com" target='_blank'>senpai0316@gmail.com</a>
      </div>
    </footer>
  )
}

export default Footer