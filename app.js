// Part 1
//Refactoring the old code.
const code = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
new_code = code.split('\n')
console.log(new_code)



//Part 2: Expanding Functionality
// Assigned the csv code a variable
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// Created a function with a parameter name str
function formatIntoArray(str){
    // Seperate the code at every \n.
    const arr = str.split('\n')
    //Create an empty array.
    let new_arr = []
    // Loop over the code.
    for(let i = 0 ; i <= arr.length-1 ; i++){
        // Seperate at every comma.
        const subArr = arr[i].split(",")
       // Combine the two arrays together.
        new_arr.push(subArr)
    }
    //Return the combined variable.
    return new_arr
}

finishedArr = (formatIntoArray(csv))
console.log(finishedArr)

// Part 3: Transforming Data
const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
function transformingData(str1){
    const arr1 = str.split ('\n')
    let new_arr1 = []
    let myObj = {}
    for (let i = 0; i <= new_arr1.length-1; i++){
        const subArr1 = 
    }

}
const myObj = {};
for (i=0; i < subArr.length; i++){
    myObj[i] = subArr[i]
}
console.log(myObj)