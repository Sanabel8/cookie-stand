'use strict';

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let container = document.getElementById('container');

// let table = document.createElement('table');
// container.appendChild(table);

// let headingRow = document.createElement('tr');
// table.appendChild(headingRow);


// //create first heading is space
// let th1 = document.createElement('th');
// headingRow.appendChild(th1);
// th1.textContent = '           ';

// // create the  first line of table
// for (let i = 0; i < hours.length; i++) {

//     let thElement = document.createElement('th');
//     headingRow.appendChild(thElement);
//     thElement.textContent = hours[i];

// }
// // create the final heading in the first line of table
// let dailyTotal = document.createElement('th');
// headingRow.appendChild(dailyTotal);
// dailyTotal.textContent = 'daily total of cookies';




// let shopeArry = ['seattle', 'Tokyo', 'Dubai', 'paris', 'lima'];


// function Shope(name, minCustomers, maxcustomers, avgcustomers) {
//     this.name = name;
//     this.minCustomers = minCustomers;
//     this.maxcustomers = maxcustomers;
//     this.avgcustomers = avgcustomers;
//     this.numberOfCustomers = [];
//     this.numberOfCookies = [];
//     this.total = 0;
//     console.log(this);

// }

// // to show the tabel
// Shope.prototype.render = function () {

//     //create the second line  
//     let shopeRow = document.createElement('tr');
//     table.appendChild(shopeRow);

//     let nameData = document.createElement('td');
//     shopeRow.appendChild(nameData);
//     nameData.textContent = this.name;


//     let footerTabel = document.createElement('td');
//     table.appendChild(footerTabel);
//     footerTabel.textContent = 'total';
// }
// // let totalForAllShopesEveryHour;
// // for (let i = 0; i < hours.length; i++) {

// //     totalForAllShopesEveryHour = 0

// //     for (let j = 0; j < shopeArry.length; j++) {
// //         totalForAllShopesEveryHour += Shope[j].numberOfCookies[i];
// //     }
// // }

// for (let i = 0; i < hours.length; i++) {
//     this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
// }

// numOfRandomCookeis = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//         this.total += this.numberOfCookies[i];

//     }
// }
// Shope.render = function () {
//     //get the parent by its id
//     let parent = document.getElementById('parent');
//     console.log(parent);

//     //create name
//     let nameElement = document.createElement('h2');

//     //appended to the parent
//     parent.appendChild(nameElement);



//     //  let thElement = document.createElement('th');
//     //headingRow.appendChild(thElement);
//     // thElement.textContent = hours[i];

//     //create the data for table
//     let tdElement = document.createElement('td');
//     shopeRow.appendChild(tdElement);

//     tdElement.textContent = this.numberOfCookies[i];
// }


// Shope.prototype.numOfRandomCustomers = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//     }


//     Shope.prototype.numOfRandomCookeis = function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }

//         shope.prototype.render = function () {
//             //get the parent by its id
//             let parent = document.getElementById('parent');
//             console.log(parent);

//             //create name
//             let nameElement = document.createElement('h2');

//             //appended to the parent
//             parent.appendChild(nameElement);

//         }

//         Shope.prototype.numOfRandomCookeis = function () {
//             for (let i = 0; i < hours.length; i++) {
//                 this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//                 this.total += this.numberOfCookies[i];

//             }
//         }

//     }
// }
// //     let totalForAllShopesEveryHour;
// //     for (let i = 0; i < hours.length; i++) {

// //         totalForAllShopesEveryHour = 0

// //         for (let j = 0; j < shopeArry.length; j++) {
// //             totalForAllShopesEveryHour += Shope[j].numberOfCookies[i];
// //         }
// //     }



// let seattle = new Shope('seattle', 23, 65, 6.3);
// console.log(seattle);
// seattle.numOfRandomCustomers();
// seattle.numOfRandomCookeis();
// seattle.render();




// let tokyo = new Shope('tokyo', 3, 24, 1.2);
// console.log(tokyo);
// tokyo.numOfRandomCustomers();
// tokyo.numOfRandomCookeis();
// tokyo.render();




// let dubai = new Shope('dubai', 11, 38, 3.7);
// console.log(seattle);
// dubai.numOfRandomCustomers();
// dubai.numOfRandomCookeis();
// dubai.render();




// let paris = new Shope('paris', 20, 38, 3.7);
// console.log(paris);
// paris.numOfRandomCustomers();
// paris.numOfRandomCookeis();
// paris.render();



// let lima = new Shope('lima', 2, 16, 4.6);
// console.log(lima);
// lima.numOfRandomCustomers();
// lima.numOfRandomCookeis();

// lima.render();

