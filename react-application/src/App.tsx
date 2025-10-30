import React from 'react';
import './App.css';
import PersonManagement from "./person-mng/person-management";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
            <div className="container">
                <header className="App-header">
                    <PersonManagement/>
                </header>
            </div>
    );
}

export default App;
