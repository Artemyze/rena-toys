import linkedIn from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";
import gitLight from "../../img/icons/gitHub.svg";
import insta from "../../img/icons/instagram.svg";
import vk from "../../img/icons/vk.svg";
import "./footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={gitLight} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 mironovarym@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

