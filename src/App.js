import React from "react";
import './App.css'

import { Header, Content, Footer } from './containers'

const App = () => {
    return(
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App