import imgChair from "../../img/chair.png";

const AppContacts = () => {
    return (
        <section className="product contacts">
            <div className="container">
                <div className="product_header">
                    <div className="product_title">
                        <span>CONTACT US</span>
                    </div>
                </div>
            </div>

            <div className="contacts__base">
                <div className="container">
                    <div className="contacts__base_temp">
                        <div className="contacts__subtitle">
                            Do not hesitate to
                            contact us
                        </div>

                        <div className="contacts__wrapper">
                            <div className="contacts__wrapper_img">
                                <img src = {imgChair} alt="chair img" />
                            </div>

                            <div className="contacts__form">
                                <form action=".">
                                    <div className="contacts__form_name">
                                        <input type="text" name="firstname" placeholder="First name" />
                                        <input type="text" name="secondname" placeholder="Second name" />
                                    </div>

                                    <div className="contacts__form_otherinputs">
                                        <input type="email" name="email" placeholder="Email"/>
                                        <input type="text" name="subject" placeholder="Subject" />

                                        <button type="submit">Send Message</button>    
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppContacts;