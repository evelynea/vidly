import React from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";
import SideBar from "./sidebar";

const Dashboard =({match})=>{
    return(
        <div>
            <h1>admin Dashboard</h1>
            <SideBar/>
            <Route path="/admin/users" component={Users}/>
            <Route path="/admin/posts" component={Posts}/>
        </div>
    )
}
export default Dashboard