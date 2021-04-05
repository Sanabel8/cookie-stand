'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
const seattle = {
    name: 'seattle',
    minCustomers: 23,
    maxcustomers: 65,
    avgcustomers: 6.3,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,
    numOfRandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
        }
    },
    numOfRandomCookeis: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
            this.total+=this.numberOfCookies[i];

        }
    },
    render: function () {
        //get the parent by its id
        let parent = document.getElementById('parent');
        console.log(parent);

        //create name
        let nameElement = document.createElement('h2');

        //appended to the parent
        parent.appendChild(nameElement);

        //add text content
        nameElement.textContent = this.name;

        //create unorder list
        let ultElement = document.createElement('ul');

        parent.appendChild(ultElement);
        //create li's
        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            ultElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let totalElement=document.createElement('li');

        ultElement.appendChild(totalElement);
        totalElement.textContent=`total:  ${this.total} cookies`;


    }
        
}
   
seattle.numOfRandomCustomers();
seattle.numOfRandomCookeis();
seattle.render();
console.log(seattle);




const tokyo = {
    name: 'tokyo',
    minCustomers: 23,
    maxcustomers: 65,
    avgcustomers: 6.3,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,
    numOfRandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
        }
    },
    numOfRandomCookeis: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
            this.total+=this.numberOfCookies[i];

        }
    },
    render: function () {
        //get the parent by its id
        let parent = document.getElementById('parent');
        console.log(parent);

        //create name
        let nameElement = document.createElement('h2');

        //appended to the parent
        parent.appendChild(nameElement);

        //add text content
        nameElement.textContent = this.name;

        //create unorder list
        let ultElement = document.createElement('ul');

        parent.appendChild(ultElement);
        //create li's
        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            ultElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let totalElement=document.createElement('li');

        ultElement.appendChild(totalElement);
        totalElement.textContent=`total:  ${this.total} cookies`;


    }
        
}
   
tokyo.numOfRandomCustomers();
tokyo.numOfRandomCookeis();
tokyo.render();
console.log(tokyo);







const dubai = {
    name: 'dubai',
    minCustomers: 11,
    maxcustomers: 38,
    avgcustomers: 3.7,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,
    numOfRandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
        }
    },
    numOfRandomCookeis: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
            this.total+=this.numberOfCookies[i];

        }
    },
    render: function () {
        //get the parent by its id
        let parent = document.getElementById('parent');
        console.log(parent);

        //create name
        let nameElement = document.createElement('h2');

        //appended to the parent
        parent.appendChild(nameElement);

        //add text content
        nameElement.textContent = this.name;

        //create unorder list
        let ultElement = document.createElement('ul');

        parent.appendChild(ultElement);
        //create li's
        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            ultElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.numberOfCustomers[i]} cookies`;
        }
        let totalElement=document.createElement('li');

        ultElement.appendChild(totalElement);
        totalElement.textContent=`total:  ${this.total} cookies`;


    }
        
}

dubai.numOfRandomCustomers();
dubai.numOfRandomCookeis();
dubai.render();
console.log(dubai);





const paris = {
    name: 'paris',
    minCustomers: 20,
    maxcustomers: 38,
    avgcustomers: 2.3,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,
    numOfRandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
        }
    },
    numOfRandomCookeis: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
            this.total+=this.numberOfCookies[i];

        }
    },
    render: function () {
        //get the parent by its id
        let parent = document.getElementById('parent');
        console.log(parent);

        //create name
        let nameElement = document.createElement('h2');

        //appended to the parent
        parent.appendChild(nameElement);

        //add text content
        nameElement.textContent = this.name;

        //create unorder list
        let ultElement = document.createElement('ul');

        parent.appendChild(ultElement);
        //create li's
        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            ultElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.numberOfCustomers[i]} cookies`;
        }
        let totalElement=document.createElement('li');

        ultElement.appendChild(totalElement);
        totalElement.textContent=`total:  ${this.total} cookies`;


    }
        
}
   



paris.numOfRandomCustomers();
paris.numOfRandomCookeis();
paris.render();
console.log(paris);





const lima = {
    name: 'lima',
    minCustomers: 2,
    maxcustomers: 16,
    avgcustomers: 4.6,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,
    numOfRandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
        }
    },
    numOfRandomCookeis: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
            this.total+=this.numberOfCookies[i];

        }
    },
    render: function () {
        //get the parent by its id
        let parent = document.getElementById('parent');
        console.log(parent);

        //create name
        let nameElement = document.createElement('h2');

        //appended to the parent
        parent.appendChild(nameElement);

        //add text content
        nameElement.textContent = this.name;

        //create unorder list
        let ultElement = document.createElement('ul');

        parent.appendChild(ultElement);
        //create li's
        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            ultElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.numberOfCustomers[i]} cookies`;
        }
        let totalElement=document.createElement('li');

        ultElement.appendChild(totalElement);
        totalElement.textContent=`total:  ${this.total} cookies`;


    }
        
}
   



lima.numOfRandomCustomers();
lima.numOfRandomCookeis();
lima.render();
console.log(lima);