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
            data: [{
                firstName: "", 
                secondName: "",
                email: "", 
                subject: "", 
            }]
        };
    }
    
    onSubmitValue = (e, items) => {
        e.preventDefault();
        this.setState({data: items});
    }

    render() {
        return(
            <div className="app">
                <Header />

                <AppPromo />

                <AppProduct />

                <AppServices />

                <AppBlog />

                <AppContacts onSubmitValue= {this.onSubmitValue}/>
            </div>
        );
    }
}

export default App;