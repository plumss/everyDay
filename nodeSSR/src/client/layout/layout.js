import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Layout extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="commonContent">{this.props.children}</div>
                <div className="commonFooter">
                    <Link to="/find">发现</Link>
                    <Link to="/home">首页</Link>
                    <Link to="/sing">K歌</Link>
                    <Link to="/mine">我的</Link>
                </div>
            </Fragment>
        )
    }
}