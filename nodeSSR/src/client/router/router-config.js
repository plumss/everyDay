import Sing from '../pages/Sing'
import Mine from '../pages/Mine'
import Home from '../pages/Home'
import Find from '../pages/Find'
export default [
    {
        path:'/find',
        component:Find,
        exact:true, //是否精准匹配
    },{
        path:'/mine',
        component:Mine,
        exact:true, //是否精准匹配
    },
    {
        path:'/home',
        component:Home,
        exact:true, //是否精准匹配
    },
    {
        path:'/sing',
        component:Sing,
        exact:true, //是否精准匹配
    },
]