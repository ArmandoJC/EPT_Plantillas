import images from '../../constants/images';
import "./Footer.css";
import { ListMenuFooter } from './ListMenuFooter/ListMenuFooter';

export const Footer = () => (
    <div className="app__footer app__wrapper app__banner app__footer__padding">
        <div className="app__footer__Info-menu">
            <div className="app__footer-logo">
                <img src={images.contasheetLogo} alt="app logo" />
            </div>
            <ul className="app__footer__menu-links">
                <ListMenuFooter description={'Políticas de privacidad'} route={"/about"} />
                <ListMenuFooter description={'Términos y condiciones'} route={"/services"} />
                <ListMenuFooter description={'Sobre ContaSheets'} route={"/contact"} />
            </ul>
        </div>
        <div className="app__footer__SocialMedia">
            <h2 className="app__footer-h2">Síguenos</h2>
            <ul className="app__footer__Info-links">
                <li className="p__poppins p__poppins__footer">
                    <a className="app__footer-link-icon" href="#">
                        <img className={`app__footOverlay-icons`} src={images.icon_1} alt="facebook-icon" />Facebook
                    </a>
                </li>
                <li className="p__poppins p__poppins__footer">
                    <a className="app__footer-link-icon" target="_self" href="#" >
                        <img className={`app__footOverlay-icons`} src={images.icon_2} alt="instagram-icon" />Instagram
                    </a>
                </li>
                <li className="p__poppins p__poppins__footer">
                    <a className="app__footer-link-icon" target="_self" href="#" >
                        <img className={`app__footOverlay-icons`} src={images.icon_3} alt="linkedin-icon" />Linkedin
                    </a>
                </li>
            </ul>
        </div>
        <div className="app__footer__Info-contact">

            <h2 className="app__footer-h2">Contáctanos</h2>
            <div className="app__footer__Info-message-information">
                <p className="p__poppins  message app__footer-contact-icon">
                    <img className={`app__footOverlay-icons`} src={images.icon_4} alt="instagram-icon" />contasheet@gmail.com
                </p>
                <p className="p__poppins  message app__footer-contact-icon">
                    <img className={`app__footOverlay-icons`} src={images.icon_8} alt="instagram-icon" />www.contasheets.com
                </p>
                <p className="p__poppins  message app__footer-contact-icon">
                    <img className={`app__footOverlay-icons`} src={images.icon_5} alt="instagram-icon" />(123) 456-7890
                </p>
            </div>
        </div>
        <div className="app__footer__Info-copyright">
            <p className="p__poppins p__poppins__footer message">
                {new Date().getFullYear()} <code>&#169;</code> Contasheets. Todos los derechos reservados
            </p>
        </div>
    </div>
);

