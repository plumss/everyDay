/*versions 是一个项目的版本号列表*/
var versions = ['1.45.0.7','1.45.0','1.55.7','1.5','6','3.3.3.3.3.3.3'];
//要求从小到大排序,注意'1.45'比'1.5'大
function sortVersion(versions){
    let arr = versions
    return arr.sort(function(a,b){
       const oneA = a.split('.')
       const oneB = b.split('.')
       const len = oneA.length>oneB.length?oneA.length:oneB.length;
       for(let i=0;i<len;i++){
           let a = oneA[i] || 0
           let b = oneB[i] || 0
           if(a-b>0){
              return true
           }else if(a-b===0){
               continue
           }else{
               return false
           }
       }
    })
}
console.log('sortVersion===',sortVersion(versions))
//=>['1.5','1.45.0','3.3.3.3.3.3.3','6']