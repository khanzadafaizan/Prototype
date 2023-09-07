

const markSheet =["Name", "Father Name", "Subject", "Max Number", "obtained", "Percentage", "Grade"];

 const tableContainer = document.getElementById("table-container");
 const table = document.createElement('table');

 tableContainer.append(table);
  
 const thead = document.createElement("thead");
 const tr = document.createElement("tr");

 markSheet.forEach(function(detail){
    const th = document.createElement("th");
    th.innerText = detail;
    tr.append(th);
 })
 thead.append(tr);
 table.append(thead);

 
 

const tbody = document.createElement('tbody');
table.append(tbody);

function submit(){
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let subjectName = document.getElementById('subjectName');
    let maxNumber = document.getElementById('maxNumber');
    let obtained = document.getElementById('obtained');
   firstName =(firstName.value)
   lastName = (lastName.value)
   subjectName = (subjectName.value)
   maxNumber = Number(maxNumber.value)
   obtained =  Number(obtained.value)

   const per = obtained * 100 / maxNumber;  
   
   const trTbody = document.createElement('tr');


      const firstNameTd = document.createElement('td');
      const lastNameTd = document.createElement('td');
      const subjectNameTd = document.createElement('td');
      const maxNumberTd = document.createElement('td');
      const obtainedTd = document.createElement('td');
      const perTd = document.createElement('td');
      const gradTd = document.createElement('td');

      firstNameTd.innerText = firstName;
      lastNameTd.innerHTML = lastName;
      subjectNameTd.innerText = subjectName;
      maxNumberTd.innerText = maxNumber;
      obtainedTd.innerText = obtained;
      perTd.innerText = per + '%';
  tbody.append(trTbody);
   
    if(per >=90 ){
        gradTd.innerText = 'A';
     
    }
    else if (per >=80) {
        gradTd.innerText = 'B';
        
    }
    
    else if (per >=70) {
        gradTd.innerText = 'C';
        
    }else if (per >=60) {
        gradTd.innerText = 'D';
        
    }
    else {
        gradTd.innerText = 'Fail';
        
    }
    trTbody.append(firstNameTd, lastNameTd, subjectNameTd, maxNumberTd, obtainedTd, perTd, gradTd);

}
 
  


// const studentName = ['Faizan', 'Awais', 'Nabeel', 'Tahir', 'Rameez', 'Abul Ahad', 'Bilal Bhatti'];





// // Add new element to the tail of an array - Push()
// studentName.push('Shaid', 'Ashraf', 'Aqeel')

// console.log(studentName);


// // // Add new element to the head of an array - unshift()
// studentName.unshift('Name')
// console.log(studentName);

// // //  Add new element within ary position in the array - splice()
// studentName.splice(1, 2, 'Name')
// console.log(studentName);

// // //  remove one element to the tail of an array - pop()
// studentName.pop()
// console.log(studentName);

// // //  remove one element to the head of an array - shift()
// studentName.shift()
// console.log(studentName);

// // //  remove element from any position in the  array - splice()
// studentName.splice(3, 3)
// console.log(studentName);


// // //  The sort() method sorts the elements of an array in place order is ascending
// studentName.sort()
// console.log(studentName);

// // //  The reverse() method reverses an array in place
// studentName.reverse()
// console.log(studentName);

// // // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const indexCheck = studentName.indexOf('Awais')
// console.log(indexCheck);

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// console.log(array.lastIndexOf('Haris'));


// // // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const includes = studentName.includes('Awais')
// console.log(includes);


// let nums = [1, 8, 2, 1, 15];
// let highest = 0;

// const newArry = [];

// // for (let number of nums) {

// //   if (number > highest) {
// //     highest = number;
// //   }
// // }

// // console.log(highest);


// // for (const newArrayData of nums) {
// //   newArry.push(newArrayData.toString());
// // }

// // console.log(newArry);


// // for (const newArrayData of nums) {
// //   if (newArrayData % 2 == 0) {

// //     newArry.push(newArrayData);
// //   }
// // }
// // console.log(newArry);

// // const stringNumber = nums.map(number => number.toString());
// // console.log(stringNumber);

// // const evenNum = nums.filter(number => number % 2 == 0);
// // console.log(evenNum);


// // const max = nums.reduce((pre, number) => pre > number ? pre : number);
// // console.log(max);


// // const newArray = nums.map((number, index) => number * index);

// // console.log(newArray);


// const array = ['Awais', 'kashan', 'Haris'];
// const array2 = ['Shahid', 'kashan', 'Haris'];

// const array3 = array.concat(array2+'<br>');
// // console.log(array3);


// const array4 = array3.join(' ');
// // console.log(array4);

// const slice =array.slice(2,3);

// // console.log(slice);


// const checkOut = Array.isArray(array);

// // console.log(checkOut);


// // if(Array.isArray(array)== true){

// //     console.log('This is an Array');
// // }else{
// //     console.log('This is not an Array');

// // }

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const some = nums.some(checkAdult);

// function checkAdult (age){
//   return age >= 3;
// }
// console.log(some);

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const every = nums.every(checkAdult);

// function checkAdult (age){
//   return age >= 4;
// }
// console.log(every);


// const find = nums.find(checkAdult);

// function checkAdult (age){
//   return age >= 4;
// }
// console.log(find);

// findindex() returns the index of the first element in the array

// const findIndex = nums.findIndex(checkAdult);

// function checkAdult (age){
//   return age >= 2;
// }
// console.log(findIndex);

// const filter = nums.filter(checkAdult);

// function checkAdult (age){
//   return age >= 3;
// }
// console.log(filter);