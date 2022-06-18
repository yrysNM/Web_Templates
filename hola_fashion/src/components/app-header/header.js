const Header = () => {
    return(
            <header className="header absolute inset-0 flex items-center justify-center">
                <div className="container text-8xl text-white font-thin">
                    <div className="header__line">
                        <div className="header__logo">
                            <a href="#main">Hola Fashion</a>
                        </div>

                        <div className="header__menu">
                            <ul className="header__list">
                                <li>
                                    <a className="header__link" href="#home">Home</a> 
                                </li>
                                <li>
                                    <a className="header__link" href="#home">Product</a> 
                                </li>
                                <li>
                                    <a className="header__link" href="#home">Services</a> 
                                </li>
                                <li>
                                    <a className="header__link" href="#home">Blog</a> 
                                </li>
                                <li>
                                    <a className="header__link" href="#home">Contact Us</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;