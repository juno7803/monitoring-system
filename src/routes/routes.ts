import Home from "./Home";
import SignIn from "./SignIn";

export type RouteType = {
    path: string;
    component: any;
};

var routes:RouteType[] =[
    {
        path: "/Signin",
        component: SignIn
    },
    {
        path: "/",
        component: Home
    }
];

export default routes;