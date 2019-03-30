function groupAdultsByAgeRange(users) {
    
    const categories = {}


   users= users.filter(user=>
        {return user.age>18 && user.hasOwnProperty("age")})

    if (users.length === 0) {
        return {}
    }
   
    return users.reduce((categories,currentUser)=>{
        if(currentUser.age<20){
            categories["20 and younger"].push(currentUser)
        } else if(currentUser.age>=20 && currentUser.age<31){
            categories["21-30"].push(currentUser)
        } else if (currentUser.age>=31 && currentUser.age<41){
            categories["31-40"].push(currentUser)
        } else if (currentUser.age>=41 && currentUser.age<=51){
            categories["41-50"].push (currentUser)
        }else  categories["51 and older"].push(currentUser)
        return categories
    },{
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
    })
}


// const users=[{ name: "pete", age: 10 },
// { name: "dove", age: 17 },
// { name: "dave", age: 18 },
// { name: "hall", age: 19 }]

// console.log(groupAdultsByAgeRange(users))

module.exports.groupAdultsByAgeRange=groupAdultsByAgeRange




