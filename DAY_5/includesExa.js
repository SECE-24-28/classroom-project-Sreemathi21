let employee=[
    {id:101,name:"sree",age:22},
                {id:102,name:"ajay",age:19},
                {id:103,name:"vijay",age:21}
            ];

    let newemp=employee.filter((emp)=> {
         return emp.name.includes("a")  //TO SEARCH NAMES WITH a IN IT(KEY)
    }
    );
    console.log(newemp);