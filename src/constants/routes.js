import Explorer from "../pages/Explorer";
import Transaction from "../pages/Transaction";
import Block from "../pages/Block";

export const routes = [
    {
        id: 1,
        component: <Explorer />,
        path: "/"
    },
    {
        id: 2,
        component: <Transaction />,
        path: "/tx/:hash"
    },
    {
        id: 3,
        component: <Block />,
        path: "/block/:hash"
    }
]