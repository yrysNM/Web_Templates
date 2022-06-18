import { Fade } from "react-reveal";
import promoImg from "../../img/promoImg.png";

const AppPromo = () => {
    return (

        <section className="promo">
            <div className="container">
                <div className="promo__main">
                    <div className="promo__img">
                        <img src={promoImg} alt="promo img" />

                    </div>
                    <div className="promo__info">
                        <Fade left>
                            <h1 className="promo__title">
                                The one-stop solution
                                for your clothing needs
                            </h1>
                        </Fade>
                        <Fade left>

                            <div className="promo__descr">
                                All you need to find the perfect piece of clothing is at Hola Fashion. We offer clothes from top brands
                            </div>
                        </Fade>

                        <div className="promo__form ">
                            <form action=".">
                                <input type="email" className="promo__form_input" placeholder="Email" />
                                <button className="promo__form_btn" type="submit">Show now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppPromo;