window.my_redux = {
    createStore:function(reducer,preState){
        let curReducer = reducer; //存储reducer
        let curState = preState;  //初始化state
        let curLister = []; //事件存储
        let nextLister = curLister;
        let isDispatching = false; //是否派发完毕
        function dispatch(action){
            isDispatching = true
            curState = curReducer(curState,action)
            isDispatching = false
            let listerList = curLister = nextLister
            for(let i=0;i<listerList.length;i++){
                listerList[i]();
            }
            return action
        }
        function subscribe(lister){
            nextLister.push(lister); //注册监听事件
            return function unsubscribe(){ //返回一个用于注销当前订阅者的函数

            }
        }
        function getState(){
            return curState
        }
        return {
            dispatch,
            subscribe,
            getState
        }
    } 
}