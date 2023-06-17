let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    // Task is to print all the employee which have profession Developer using map function
    const employeeFilter = arr.filter(obj => obj.profession === "developer");
    employeeFilter.map(obj => {
        console.log(obj);
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

    // Task is to print all the employee which have profession Developer using forEach function
    arr.forEach(obj => {
        if(obj.profession === "developer"){
            console.log(obj);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log

    // Task is to another such employee object and append it in array
    const employee = {
        id : 4,
        name : "susan",
        age : "20", 
        profession : "intern"
    };
    arr.push(employee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

    // Task is to remove the object where profession is admin and log the changed array
    arr = arr.filter(obj => obj.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    // Task is to Make an another array with 3 objects but objects should be different with all ids, parameters too.
    // and concatinate these 2 arrays & log it
    let arr2 = [
        {id : 100, name : "victor", age : "25", profession : "Data_Engineer"},
        {id : 400, name : "billy", age : "30", profession : "Manual_Tester"},
        {id : 300, name : "brad", age : "28", profession : "Manager"}
    ];
    
    let concatenatedArray = arr.concat(arr2);
    console.log(concatenatedArray);

  }