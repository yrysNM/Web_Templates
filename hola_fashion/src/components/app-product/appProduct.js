import Slider from "react-slick";
import prevArrow from "../../icons/prevArrow.svg";
import nextArrow from "../../icons/nextArrow.svg";
import imgSlide from "../../img/imgSlide.png";


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button style={{ background: "#E5A985", width: "58px", height: "58px", borderRadius: "100%" }}
            type="button" className={className} onClick={onClick}>
            <img src={nextArrow} alt="nextArrow img" />
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button style={{ background: "#E5A985", width: "58px", height: "58px", borderRadius: "100%" }}
            type="button" className={className} onClick={onClick}>
            <img src={prevArrow} alt="nextArrow img" />
        </button>
    );
}

const AppProduct = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="product">
            <div className="container">
                <div className="product_header">
                    <div className="product_title">
                        <span>Product</span>
                    </div>

                    <h2 className="product_subTitle">Hola Fashion - Newest Designers, Lowest Prices</h2>
                </div>

                <div className="carousel">
                    <Slider {...settings} className="carousel__inner">
                        <div className="carousel__img">
                            <img src={imgSlide} alt="imgSlide" />

                            <div className="carousel__descr">
                                The World's Most Famous Street Style Bloggers

                            </div>
                        </div>
                        <div className="carousel__img">
                            <img src={imgSlide} alt="imgSlide" />

                            <div className="carousel__descr">
                                The World's Most Famous Street Style Bloggers

                            </div>
                        </div>
                        <div className="carousel__img">
                            <img src={imgSlide} alt="imgSlide" />

                            <div className="carousel__descr">
                                The World's Most Famous Street Style Bloggers

                            </div>
                        </div>

                        <div className="carousel__img">
                            <img src={imgSlide} alt="imgSlide" />

                            <div className="carousel__descr">
                                The World's Most Famous Street Style Bloggers

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default AppProduct;