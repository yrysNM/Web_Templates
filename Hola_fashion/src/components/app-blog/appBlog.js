import { Fade } from "react-reveal";

import person1 from "../../img/people/person1.png";
import person2 from "../../img/people/person2.png";
import person3 from "../../img/people/person3.png";
import person4 from "../../img/people/person4.png";
import person5 from "../../img/people/person5.png";
import person6 from "../../img/people/person6.png";

const AppBlog = () => {
    return (
        <section className="product blog">
            <div className="container">
                <div className="product_header">
                    <Fade right>

                        <div className="product_title">

                            <span>Blog</span>
                        </div>
                    </Fade>

                    <Fade right>

                        <h2 className="product_subTitle blog__subtitle">Hola Fashion - Newest Designers, Lowest Prices</h2>
                    </Fade>
                </div>

                <div className="blog__people">
                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person1} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            This Shirt Will Save
                            You $40 On Your
                            Next Online Purchase
                        </div>
                    </div>

                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person2} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            Guide to Buying a
                            Suit: What You
                            Need To Know
                        </div>
                    </div>

                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person3} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            The Story Behind
                            Hola Fashion: The
                            Cotton Movement
                        </div>
                    </div>

                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person4} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            Making A Social
                            Impact Through
                            Your Business
                        </div>
                    </div>

                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person5} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            What to Wear in
                            Madrid: 8 Outfits To
                            Make You Look Local
                        </div>
                    </div>

                    <div className="blog__person">
                        <div className="blog__person_img">
                            <img src={person6} alt="person img" />
                        </div>

                        <div className="blog__descr">
                            The World's
                            Most Famous Street
                            Style Bloggers
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppBlog; 