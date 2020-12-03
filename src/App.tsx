import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";

// core components
 import AdminNavbar from "./components/Common/AdminNavbar";
 import Footer from "./components/Common/Footer";

import routes,{RouteType} from "../src/routes/routes";

function App (){
    const getRoutes = (routes: RouteType[]) =>{
        return routes.map(
            (props:RouteType,key:number)=>{
                return (
                  <Route
                    exact
                    path={props.path}
                    component={props.component}
                    key={key}
                  />
                );
            }
        );
    };
    return(
        <>
            <div className="wrapper">
                <div className="main-panel">
                    <AdminNavbar
                        brandText = "KHU-CARE"
                        toggleSidebar = {true}
                        sidebarOpened = {true}
                    />
                    <div className="content">
                        <Switch>
                            {getRoutes(routes)}
                            <Redirect from="*" exact to="/"/>
                        </Switch>       
                    </div>
                    <Footer/>  
                </div>
            </div>
        </>
    );
}

export default App;