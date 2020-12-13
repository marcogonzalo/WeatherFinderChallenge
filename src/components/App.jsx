import React from "react";
import "./App.css";
import TitleContainer from './TitleContainer/TitleContainer';
import FormContainer from './FormContainer/FormContainer';

function App(props) {
    return (
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container-fluid">
                        <div className="row">
                            <TitleContainer
                                title="Weather Finder"
                                subtitle="Find out temperature, conditions and more..."
                            />
                            <FormContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
