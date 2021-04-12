import React from 'react';
import {Link} from 'react-router-dom';
//import './index.css'
export default function(props){
        return(
            <>
                <div className="commonContent">{props.children}</div>
                <div>
                    <Link to="/home" style={{marginRight:'10px'}}>首页1111</Link>
                    <Link to="/detail">详情22211</Link>
                </div>
            </>
        )
}