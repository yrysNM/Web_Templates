import { Fade } from "react-reveal";

import imgService from "../../img/servicesImg.png";
import imgService3 from "../../img/servicesImg3.png";


const AppServices = () => {
    return (
        <section className="product services">
            <div className="container">
                <div className="product_header">
                    <Fade left>

                        <div className="product_title">
                            <span>SERVICES</span>
                        </div>
                    </Fade>

                    <Fade left>

                        <h2 className="product_subTitle clService">Hola Fashion is a High-quality Cotton Garment</h2>
                    </Fade>
                </div>

                <div className="services__blocks">
                    <div className="services__block1">
                        <div className="services__img">
                            <img src={imgService} alt="services img" />
                        </div>

                        <div className="services__descr">
                            Shop for the best and
                            latest in clothing

                        </div>
                    </div>

                    <div className="services__block1 block2">
                        <div className="services__img">
                            <img src={imgService} alt="services img" />
                        </div>

                        <div className="services__descr txtWhite">
                            Providing clothes for both men and women
                        </div>
                    </div>

                    <div className="services__block1">
                        <div className="services__img">
                            <img src={imgService3} alt="services img" />
                        </div>

                        <div className="services__descr">
                            Shop for the best and
                            latest in clothing

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppServices;