import React from "react";
import App from '../App';
import { 
    BrowserRouter as ReactRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import HomePage from '../pages/home'
import DetailPage from '../pages/detail'

const Router = () =>{
    return(
        <ReactRouter>
            <App>
                <Routes>
                    <Route path="*" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/detail/:id" element={<DetailPage/>} />
                </Routes>
            </App>
        </ReactRouter>
    )
}


export default Router;