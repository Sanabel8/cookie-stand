


'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create the f for random customer number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





//let shopeArry = ['seattle', 'Tokyo', 'Dubai', 'paris', 'lima'];
let collecter = [];
function Shope(name, minCustomers, maxcustomers, avgcustomers) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxcustomers = maxcustomers;
    this.avgcustomers = avgcustomers;
    this.numberOfCustomers = [];
    this.total = 0;

    // randomenumber();
    this.numberOfCookies = [];
    collecter.push(this);
}
//another way to solve total of totals
//let globalTotal = 0;

//calculate the random number for customers
Shope.prototype.numOfRandomCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.numberOfCustomers.push(Math.floor(random(this.minCustomers, this.maxcustomers)));
        console.log(this.numberOfCustomers);
    }
}
Shope.prototype.numOfRandomCookeis = function () {
    for (let i = 0; i < hours.length; i++) {
        //calculate the avg per cutomers for each hour
        this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
        this.total += this.numberOfCookies[i];
        console.log(this.numberOfCustomers[i]);

        //globalTotal+=this.numberOfCookies[i];

    }
}





let seattle = new Shope('seattle', 23, 65, 6.3);


let tokyo = new Shope('tokyo', 3, 24, 1.2);

let dubai = new Shope('dubai', 11, 38, 3.7);


let paris = new Shope('paris', 20, 38, 3.7);


let lima = new Shope('lima', 2, 16, 4.6);




//making table
let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);




//making header function
function makingHeader() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);


    //create first heading is space
    let th1 = document.createElement('th');
    headingRow.appendChild(th1);
    th1.textContent = '    ';

    // create the  first line of table
    for (let i = 0; i < hours.length; i++) {

        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = hours[i];

    }
    // create the final heading in the first line of table
    let dailyTotal = document.createElement('th');
    headingRow.appendChild(dailyTotal);
    dailyTotal.textContent = 'daily total of cookies';

}




//creat function by using cons (method with const)
// to show the tabel
Shope.prototype.render = function () {

    //create the second line  (second row)
    let collecterRow = document.createElement('tr');
    table.appendChild(collecterRow);

    let nameData = document.createElement('td');
    collecterRow.appendChild(nameData);
    nameData.textContent = this.name;





    for (let i = 0; i < hours.length; i++) {

        //make td for every hour
        let dataOfCoocies = document.createElement('td');
        collecterRow.appendChild(dataOfCoocies);
        dataOfCoocies.textContent = this.numberOfCookies[i];

    }


    //create td for tatal for every shope
    let totalTd = document.createElement('td');
    collecterRow.appendChild(totalTd);
    totalTd.textContent = this.total;



}


//footer function
function makingFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    //ceate first th for footer
    let oneTh = document.createElement('th');
    footerRow.appendChild(oneTh);
    oneTh.textContent = 'total';


    //making the totals
    let totalForAllShopesEveryHour;
    let megaTotal = 0;

    for (let i = 0; i < hours.length; i++) {

        totalForAllShopesEveryHour = 0

        for (let j = 0; j < collecter.length; j++) {
            totalForAllShopesEveryHour += collecter[j].numberOfCookies[i];

            megaTotal += collecter[j].numberOfCookies[i];
        }

        //create last th 
        let lastThForFooter = document.createElement('th');
        footerRow.appendChild(lastThForFooter);
        lastThForFooter.textContent = totalForAllShopesEveryHour;


    }



    //create final th for total of total

    let totalOfTotalTh = document.createElement('th');
    footerRow.appendChild(totalOfTotalTh);
    totalOfTotalTh.textContent = megaTotal;

    //solve by global tatal
    //totalOfTotalTh.textContent =globalTotal;



}

//get element id for the form
let shopeForm = document.getElementById('shopeForm');
console.log(shopeForm);

//add the event listener
shopeForm.addEventListener('submit', submitter);

//create submitter function
function submitter(event) {
    event.preventDefault()
    let name = event.target.nameField.value;
    console.log(nameField);

    let minField = event.target.minField.value;
    console.log(minField);

    let maxFiled = event.target.maxField.value;
    console.log(maxFiled);

    let avgField = event.target.avgField.value;
    console.log(avgField);

    //make new instance of the constructer with new info
    let addedShope = new Shope(name, minField, maxFiled, avgField)
    console.log(addedShope);




    let cotainer = document.getElementById(shopeForm)

    //call methods for the added shope
    addedShope.numOfRandomCustomers();
    addedShope.numOfRandomCookeis();
    addedShope.render();



    let parent = document.getElementById('shopeForm');
    parent.textContent = '  ';


    makingFooter();

    for (let i = 0; i < collecter.length; i++) {
        collecter[i].numOfRandomCustomers();

        collecter[i].numOfRandomCookeis();
        collecter[i].render();
    }
    makingFooter();

}




makingHeader();

for (let i = 0; i < collecter.length; i++) {
    collecter[i].numOfRandomCustomers();

    collecter[i].numOfRandomCookeis();
    collecter[i].render();
}

makingFooter();






