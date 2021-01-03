import Detail from '../src/pages/Detail'
import Login from '../src/pages/Login'
import Home from '../src/pages/Home'
export default [
    {
        path:'/detail',
        component:Detail,
        exact:true, //是否精准匹配
    },{
        path:'/login',
        component:Login,
        exact:true, //是否精准匹配
    },
    {
        path:'/home',
        component:Home,
        exact:true, //是否精准匹配
    }
]