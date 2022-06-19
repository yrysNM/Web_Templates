import { Component } from "react";

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isActiveHamburger: false,
            isActiveMenu: false
        }; 
    }

    switchHamburger = () =>{
        this.setState({isActiveHamburger: !this.state.isActiveHamburger, isActiveMenu: !this.state.isActiveMenu})
    }


    render() {
      
        const {isActiveHamburger, isActiveMenu} = this.state;
        return (
            <header className="header absolute inset-0 flex items-center justify-center">
                <div className="container text-8xl text-white font-thin">
                    <div className="header__line">
                        <div className="header__logo">
                            <a href="#main">Hola Fashion</a>
                        </div>

                        <div className={`header__menu ${isActiveMenu ? 'header__menu_active' : ""}`} id="menu">
                            <ul className="header__list">
                                <li onClick={this.switchHamburger}>
                                    <a className="header__link" href="#home">Home</a>
                                </li>
                                <li onClick={this.switchHamburger}>
                                    <a className="header__link" href="#home">Product</a>
                                </li>
                                <li onClick={this.switchHamburger}>
                                    <a className="header__link" href="#home">Services</a>
                                </li>
                                <li onClick={this.switchHamburger}> 
                                    <a className="header__link" href="#home">Blog</a>
                                </li>
                                <li onClick={this.switchHamburger}>
                                    <a className="header__link" href="#home">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`hamburger ${(isActiveHamburger) ? 'hamburger_active' : ""} `} onClick={this.switchHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        );
    }
}


export default Header;