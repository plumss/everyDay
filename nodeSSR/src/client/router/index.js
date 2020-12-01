import Layout from '../layout/layout';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
export default function App(data){
    const {routeList} = data
    console.log('routeList===',routeList)
    return(
        <Layout>
            <Switch>
                {routeList.map(item=><Route key={item.path} {...item}></Route>)}
            </Switch>
        </Layout>
    )
}