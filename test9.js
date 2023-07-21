function mapping(arr){
let obj={}
// for (const key of arr) {
//     obj[key] = { [key[0]]: 'P', [key[1]]: 'S'};
//   }
  
let   keys11 =  String(arr).toLowerCase().split(',')

let keys9 =  String(arr).toUpperCase().split(',')

// for (let keys9 of arr){
//     String(keys9).toUpperCase()

//     for (let keys11 of arr){
//         String(keys11).toLowerCase()
//         obj[keys11] = keys9 , keys9
  
//   }
    
// }
obj = { [keys11[0]]:keys9[0],[keys11[1]]:keys9[1]}

return obj
}
console.log(mapping(['p','s']))


// // 2)
function minColor(obj){
 let values = Object.values(obj)
 let minimumvalues = Math.min.apply(null,values)

 return minimumvalues

 }
 console.log(minColor({'cyan':23,'magenta':12,'yellow':10}))

 // 3)
 function keysAndValues(obj2){
  let values1= Object.values(obj2)
  let keys1=Object.keys(obj2)
 return[ keys1,values1]


 }

 console.log(keysAndValues({a:1,b:2,c:3,d:4}))
// // 4)

function equalOnject(obj3,obj4){


 if(Object.values(obj3) == Object.values(obj4) ){
     console.log('true')
}else{
     console.log('false')
 }

 }

 console.log(equalOnject(
     {
 name:'Benny',
 phone:'3325558745',
 email:"benny@edabit.com"
     },
     {
         name:'Benny',
        phone:'3325558745',
         email:"benny@edabit.com"
     },
 ))
 // name:'Jason',
 // phone:'9853759720',
// // email:"jason@edabit.com"

 // 5)

 function expensiveOrders(obj5,cost){
    
    for (let i = 0;i < cost.lenght;i++){
        if(Object.values(obj5) >= cost[i]){
            return { obj5},console.log('most expensive')
        }else{
            console.log('there is not any satisfying element')
        }

    }
    return {obj5}
    
 }
 console.log(expensiveOrders({'a':3000,'b':200,'c':1050},1000))