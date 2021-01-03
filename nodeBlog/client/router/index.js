import Layout from '../Layout';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
export default function App(data){
    const {routeList} = data
    console.log('rou',routeList)
    return(
        <Layout>
            <Switch>
                {routeList.map(item=><Route key={item.path} {...item}></Route>)}
            </Switch>
        </Layout>
    )
}