import { Component } from "react";
import { Fade } from "react-reveal";

import imgChair from "../../img/chair.png";



class AppContacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "", 
            secondName: "",
            email: "", 
            subject: "", 
        };
    }
    
    
    getValue = (e) =>{
        e.preventDefault();
        const value= e.target.value;

       

        this.setState({
            [e.currentTarget.name]: value
        });
    };


    render() {
        
        const {onSubmitValue} = this.props;

        return (
            <section className="product contacts">
                <div className="container">
                    <div className="product_header">
                        <Fade left>
        
                            <div className="product_title">
                                <span>CONTACT US</span>
                            </div>
                        </Fade>
                    </div>
                </div>
        
                <div className="contacts__base">
                    <div className="container">
                        <div className="contacts__base_temp">
                            <Fade left>
        
                                <div className="contacts__subtitle">
                                    Do not hesitate to
                                    contact us
                                </div>
                            </Fade>
        
                            <div className="contacts__wrapper">
                                <div className="contacts__wrapper_img">
                                    <img src={imgChair} alt="chair img" />
                                </div>
        
                                <div className="contacts__form">
                                    <form action=".">
                                        <div className="contacts__form_name">
                                            <input type="text" name="firstName" placeholder="First name" onChange={this.getValue}/>
                                            <input type="text" name="secondName" placeholder="Second name" onChange={this.getValue}/>
                                        </div>
        
                                        <div className="contacts__form_otherinputs">
                                            <input type="email" name="email" placeholder="Email" onChange={this.getValue}/>
                                            <input type="text" name="subject" placeholder="Subject" onChange={this.getValue}/>
        
                                            <button type="submit" onClick={(e) => {e.preventDefault(); onSubmitValue(e, this.state)}}>Send Message</button>
                                        </div>
        
        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppContacts;