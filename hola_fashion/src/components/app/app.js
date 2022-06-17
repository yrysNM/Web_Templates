import { Component } from "react";

import Header from "../app-header/header";
import AppPromo from "../app-promo /appPromo";
import AppProduct from "../app-product/appProduct";
import AppServices from "../app-services/appServices";
import AppBlog from "../app-blog/appBlog";
import AppContacts from "../app-contacts/appContacts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <div className="app">
                <Header />

                <AppPromo />

                <AppProduct />

                <AppServices />

                <AppBlog />

                <AppContacts />
            </div>
        );
    }
}

export default App;