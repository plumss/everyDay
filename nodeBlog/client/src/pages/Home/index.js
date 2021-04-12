import React from 'react';
export default function(props){
    const list = ['不被定义，是三八节最好的祝福','拜登签署行政命令纪念“血腥星期天”','苹果确认将停售iMac Pro，现有售完即止']
 return <ul>
     {list.map(k=><li>
         <img onClick={()=>{console.log('图片点击')}} src="https://pics4.baidu.com/feed/21a4462309f79052f1a559918cd9fec27acbd59d.jpeg?token=00082283774ffdc37a67884726873545&s=2392C3239C3733AD02AD81820300A083"/>
     </li>
     )}
 </ul>
}