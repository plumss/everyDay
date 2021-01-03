import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Layout extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="commonContent">{this.props.children}</div>
                <div className="commonFooter">
                    <Link to="/home">首页1111</Link>
                    <Link to="/detail">详情</Link>
                </div>
            </Fragment>
        )
    }
}