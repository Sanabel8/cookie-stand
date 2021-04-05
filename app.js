'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// const seattle = {
//     name: 'seattle',
//     minCustomers: 23,
//     maxcustomers: 65,
//     avgcustomers: 6.3,
//     numberOfCustomers: [],
//     numberOfCookies: [],
//     total: 0,
//     numOfRandomCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//         }
//     },
//     numOfRandomCookeis: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }
//     },
//     render: function () {
//         //get the parent by its id
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         //create name
//         let nameElement = document.createElement('h2');

//         //appended to the parent
//         parent.appendChild(nameElement);

//         //add text content
//         nameElement.textContent = this.name;

//         //create unorder list
//         let ultElement = document.createElement('ul');

//         parent.appendChild(ultElement);
//         //create li's
//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');
//             ultElement.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
//         }
//         let totalElement = document.createElement('li');

//         ultElement.appendChild(totalElement);
//         totalElement.textContent = `total:  ${this.total} cookies`;


//     }

// }

// seattle.numOfRandomCustomers();
// seattle.numOfRandomCookeis();
// seattle.render();
// console.log(seattle);





// const tokyo = {
//     name: 'tokyo',
//     minCustomers: 3,
//     maxcustomers: 24,
//     avgcustomers: 1.2,
//     numberOfCustomers: [],
//     numberOfCookies: [],
//     total: 0,
//     numOfRandomCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//         }
//     },
//     numOfRandomCookeis: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }
//     },
//     render: function () {
//         //get the parent by its id
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         //create name
//         let nameElement = document.createElement('h2');

//         //appended to the parent
//         parent.appendChild(nameElement);

//         //add text content
//         nameElement.textContent = this.name;

//         //create unorder list
//         let ultElement = document.createElement('ul');

//         parent.appendChild(ultElement);
//         //create li's
//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');
//             ultElement.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
//         }
//         let totalElement = document.createElement('li');

//         ultElement.appendChild(totalElement);
//         totalElement.textContent = `total:  ${this.total} cookies`;


//     }

// }

// tokyo.numOfRandomCustomers();
// tokyo.numOfRandomCookeis();
// tokyo.render();
// console.log(tokyo);




// const dubai = {
//     name: 'dubai',
//     minCustomers: 11,
//     maxcustomers: 38,
//     avgcustomers: 3.7,
//     numberOfCustomers: [],
//     numberOfCookies: [],
//     total: 0,
//     numOfRandomCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//         }
//     },
//     numOfRandomCookeis: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }
//     },
//     render: function () {
//         //get the parent by its id
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         //create name
//         let nameElement = document.createElement('h2');

//         //appended to the parent
//         parent.appendChild(nameElement);

//         //add text content
//         nameElement.textContent = this.name;

//         //create unorder list
//         let ultElement = document.createElement('ul');

//         parent.appendChild(ultElement);
//         //create li's
//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');
//             ultElement.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
//         }
//         let totalElement = document.createElement('li');

//         ultElement.appendChild(totalElement);
//         totalElement.textContent = `total:  ${this.total} cookies`;


//     }

// }




// dubai.numOfRandomCustomers();
// dubai.numOfRandomCookeis();
// dubai.render();
// console.log(dubai);





// const paris = {
//     name: 'paris',
//     minCustomers: 20,
//     maxcustomers: 38,
//     avgcustomers: 2.3,
//     numberOfCustomers: [],
//     numberOfCookies: [],
//     total: 0,
//     numOfRandomCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//         }
//     },
//     numOfRandomCookeis: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }
//     },
//     render: function () {
//         //get the parent by its id
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         //create name
//         let nameElement = document.createElement('h2');

//         //appended to the parent
//         parent.appendChild(nameElement);

//         //add text content
//         nameElement.textContent = this.name;

//         //create unorder list
//         let ultElement = document.createElement('ul');

//         parent.appendChild(ultElement);
//         //create li's
//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');
//             ultElement.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
//         }
//         let totalElement = document.createElement('li');

//         ultElement.appendChild(totalElement);
//         totalElement.textContent = `total:  ${this.total} cookies`;


//     }

// }




// paris.numOfRandomCustomers();
// paris.numOfRandomCookeis();
// paris.render();
// console.log(paris);





// const lima = {
//     name: 'lima',
//     minCustomers: 2,
//     maxcustomers: 16,
//     avgcustomers: 4.6,
//     numberOfCustomers: [],
//     numberOfCookies: [],
//     total: 0,
//     numOfRandomCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//         }
//     },
//     numOfRandomCookeis: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//             this.total += this.numberOfCookies[i];

//         }
//     },
//     render: function () {
//         //get the parent by its id
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         //create name
//         let nameElement = document.createElement('h2');

//         //appended to the parent
//         parent.appendChild(nameElement);

//         //add text content
//         nameElement.textContent = this.name;

//         //create unorder list
//         let ultElement = document.createElement('ul');

//         parent.appendChild(ultElement);
//         //create li's
//         for (let i = 0; i < hours.length; i++) {

//             let liElement = document.createElement('li');
//             ultElement.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
//         }
//         let totalElement = document.createElement('li');

//         ultElement.appendChild(totalElement);
//         totalElement.textContent = `total:  ${this.total} cookies`;

//     }

// }
// lima.numOfRandomCustomers();
// lima.numOfRandomCookeis();
// lima.render();
// console.log(lima);


let container = document.getElementById('container');

let table = document.createElement('table');
container.appendChild(table);

let headingRow = document.createElement('tr');
table.appendChild(headingRow);




let thElement = document.createElement('th');
headingRow.appendChild(thElement);
thElement.textContent = '        ';
for (let i = 0; i < hours.length; i++) {

    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = hours[i];

}

let shopeArry = ['seattle', 'Tokyo', 'Dubai', 'paris', 'lima'];

function Shope(name, minCustomers, maxcustomers, avgcustomers) {
        this.name = name;
        this.minCustomers = minCustomers;
        this.maxcustomers = maxcustomers;
        this.avgcustomers = avgcustomers;
        this.numberOfCustomers = [];
        this.numberOfCookies = [];
        this.total = 0;
        console.log(this);

Shope.prototype.render = function () {


 let shopeRow = document.createElement('tr');
 table.appendChild(shopeRow);

 let nameData = document.createElement('td');
shopeRow.appendChild(nameData);
 nameData.textContent =this.name;


     
for (let i = 0; i < hours.length; i++) {

              //  let thElement = document.createElement('th');
                //headingRow.appendChild(thElement);
               // thElement.textContent = hours[i];

                let tdElement = document.createElement('td');
                shopeRow.appendChild(tdElement);

                tdElement.textContent = this.numberOfCookies[i];
            }
        }

        Shope.prototype.numOfRandomCustomers = function () {
            for (let i = 0; i < hours.length; i++) {
                this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
            }

        Shope.prototype.numOfRandomCookeis = function () {
                for (let i = 0; i < hours.length; i++) {
                    this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
                    this.total += this.numberOfCookies[i];

                }
            }

        }


    }


let seattle = new Shope('seattle', 23, 65, 6.3);
console.log(seattle);
seattle.numOfRandomCustomers();
seattle.numOfRandomCookeis();
seattle.render();



let tokyo = new Shope('tokyo', 3, 24, 1.2);
console.log(tokyo);
tokyo.numOfRandomCustomers();
tokyo.numOfRandomCookeis();
tokyo.render();




let dubai = new Shope('dubai', 11, 38, 3.7);
console.log(seattle);
dubai.numOfRandomCustomers();
dubai.numOfRandomCookeis();
dubai.render();




let paris = new Shope('paris', 20, 38, 3.7);
console.log(paris);
paris.numOfRandomCustomers();
paris.numOfRandomCookeis();
paris.render();



let lima = new Shope('lima', 2, 16, 4.6);
console.log(lima);
lima.numOfRandomCustomers();
lima.numOfRandomCookeis();

lima.render();

    // for (let i = 0; i < shopeArr.length; i++) {

    //     shopeArr[i].getNumberOfCustomer;

    //     let shopeRow = document.createElement('tr');
    //     table.appendChild(shopeRow);

    //     let nameData = document.createElement('td');
    //     shopeRow.appendChild(nameData);
    //     nameData.textContent = shopeArr[i].name;
    // 
