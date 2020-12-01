const React = require('react');
export default class Index extends React.Component{
    onClickFn(){
        alert('一起来玩的阿萨德的啊')
    }
    render(){
        return <h1 onClick={this.onClickFn}>首页</h1>
    }
}