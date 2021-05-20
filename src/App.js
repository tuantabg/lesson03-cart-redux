import React, {Component} from "react";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
