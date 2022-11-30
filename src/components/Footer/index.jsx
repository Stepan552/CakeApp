import React from "react";
import { useSelector } from "react-redux";
import "../../styles/footer.css";
import masterCardImg from "../../images/payment/MasterCard.png";
import visaImg from "../../images/payment/Visa.png";
import facebookImg from "../../images/social/facebook.png";
import instagramImg from "../../images/social/instagram.png";
import vkImg from "../../images/social/vk.png";
import youtubeImg from "../../images/social/youtube.png";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  return (
    <footer className={`footer  ${isDarkMode ? "dark_mode" : "light_mode"}`}>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__social">
              <img src={youtubeImg} alt="youtube icon" />
              <img src={vkImg} alt="vk icon" />
              <img src={facebookImg} alt="facebook icon" />
              <img src={instagramImg} alt="instagram icon" />
            </div>
            <address className="address">
              Головний магазин - м.Київ, Проспект Науки 32а
            </address>
            <div className="footer__btn-connect-block">
              <a href="#" className="footer__btn-connect">
                Передзвонити на консультацію
              </a>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__added-info">
              <div className="footer__main-links main-links">
                <div className="main-link__title title-footer-info">
                  Основні посилання
                </div>
                <div className="main-links__body">
                  <div className="main-links__link">
                    <a href="#">Наші спеціалісти</a>
                  </div>
                  <div className="main-links__link">
                    <a href="#">Про магазин</a>
                  </div>
                  <div className="main-links__link">
                    <a href="#">Стаж на ринку</a>
                  </div>
                </div>
              </div>
              <div className="footer__payment payment">
                <div className="payment__title title-footer-info">Оплата</div>
                <div className="payment__body">
                  <img src={visaImg} alt="Visa logo" />
                  <img src={masterCardImg} alt="MasterCard logo" />
                </div>
              </div>
              <div className="footer__contacts contacts">
                <div className="contacts__title title-footer-info">
                  Контакти
                </div>
                <div className="contacts__body">
                  <div className="contact-footer-block">
                    <a href="tel:+380661111111">+380661111111</a>
                  </div>
                  <div className="contact-footer-block">
                    <a href="tel:+380661111111">+380661111111</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__schedule schedule">
              <div className="schedule__title">Графік роботи</div>
              <div className="schedule__days">
                <p>
                  Понеділок - П’ятниця<span>9:00 - 17:00</span>
                </p>
                <p>
                  Субота<span>9:00 - 15:00</span>
                </p>
              </div>
              <div className="schedule__weekend-days">
                <p>Неділя та інші святкові дні - вихідні</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
