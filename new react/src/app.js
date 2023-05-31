

import { useState } from 'react';
import './app.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({

            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode("dark")
            document.body.style.backgroundColor = 'gray'
            showAlert("Dark mode has been enabled", "success")
            // document.title = "TextUtils - Dark Mode"
        } else {
            setMode("light")
            document.body.style.backgroundColor = 'white'
            showAlert("light mode has been enabled", "success")
            //  document.title = "TextUtils - Light  Mode"

        }
    }
    return (
        <>
            <Router>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className='container my-3'>
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode} />}>
                        </Route>
                        <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils - World Counter,Character Counter, Remove extra Spaces" mode={mode} />} >
                        </Route>
                    </Routes>
                </div >
            </Router>

        </>
    );
}

export default App;
