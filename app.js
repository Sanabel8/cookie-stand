// 'use strict';

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// //create the f for random customer number
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }





// //let shopeArry = ['seattle', 'Tokyo', 'Dubai', 'paris', 'lima'];
// let collecter = [];
// function Shope(name, minCustomers, maxcustomers, avgcustomers) {
//     this.name = name;
//     this.minCustomers = minCustomers;
//     this.maxcustomers = maxcustomers;
//     this.avgcustomers = avgcustomers;
//     //this.numberOfCustomers = [];

//     // randomenumber();
//     this.numberOfCookies = [];
//     this.total = 0;
//     collecter.push(this);
// }
// //another way to solve total of totals
// let globalTotal = 0;

// //calculate the random number for customers
// Shope.prototype.numOfRandomCustomers = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numberOfCustomers.push(random(this.minCustomers, this.maxcustomers));
//     }
// }
// //calculate the avg per cutomers for each hour
// Shope.prototype.numOfRandomCookeis = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.avgcustomers));
//         this.total += this.numberOfCookies[i];

//         //globalTotal+=this.numberOfCookies[i];

//     }
// }





// let seattle = new Shope('seattle', 23, 65, 6.3);


// let tokyo = new Shope('tokyo', 3, 24, 1.2);

// let dubai = new Shope('dubai', 11, 38, 3.7);


// let paris = new Shope('paris', 20, 38, 3.7);


// let lima = new Shope('lima', 2, 16, 4.6);




// //making table
// let container= document.getElementById('container');

// let table = document.createElement('table');
// container.appendChild(table);




// //making header function
// function makingHeader() {
//     let headingRow = document.createElement('tr');
//     table.appendChild(headingRow);


//     //create first heading is space
//     let th1 = document.createElement('th');
//     headingRow.appendChild(th1);
//     th1.textContent = '    ';

//     // create the  first line of table
//     for (let i = 0; i < hours.length; i++) {

//         let thElement = document.createElement('th');
//         headingRow.appendChild(thElement);
//         thElement.textContent = hours[i];

//     }
//     // create the final heading in the first line of table
//     let dailyTotal = document.createElement('th');
//     headingRow.appendChild(dailyTotal);
//     dailyTotal.textContent = 'daily total of cookies';

// }




// //creat function by using cons (method with const)
// // to show the tabel
// Shope.prototype.render = function () {

//     //create the second line  (second row)
//     let shopeRow = document.createElement('tr');
//     table.appendChild(shopeRow);

//     let nameData = document.createElement('td');
//     shopeRow.appendChild(nameData);
//     nameData.textContent = this.name;



//     for (let i = 0; i < hours.length; i++) {

//         //make td for every hour
//         let dataOfCoocies = document.createElement('td');
//         shopeRow.appendChild(dataOfCoocies);
//         dataOfCoocies.textContent = this.cookiesperhour[i];

//     }



//     //create td for tatal for every shope
//     let totalTd = document.createElement('td');
//     shopeRow.appendChild(totalTd);
//     totalTd.textContent = this.total;



// }



// //footer function
// function makingFooter() {
//     let footerRow = document.createElement('tr');
//     table.appendChild(footerRow);

//     //ceate first th for footer
//     let oneTh = document.createElement('th');
//     footerRow.appendChild(oneTh);
//     oneTh.textContent = 'total';


//     //making the totals
//     let totalForAllShopesEveryHour;
//     let megaTotal = 0;

//     for (let i = 0; i < hours.length; i++) {

//         totalForAllShopesEveryHour = 0

//         for (let j = 0; j < container.length; j++) {
//             totalForAllShopesEveryHour += container[j].numberOfCookies[i];

//             megaTotal += containar[j].numberOfCookies[i];
//         }

//         //create last th 
//         let lastThForFooter = document.createElement('th');
//         footerRow.appendChild(lastThForFooter);
//         lastThForFooter.textContent = totalForAllShopesEveryHour;


//     }



//     //create final th for total of total

//     let totalOfTotalTh = document.createElement('th');
//     footerRow.appendChild(totalOfTotalTh);
//     totalOfTotalTh.textContent = megaTotal;

//     //solve by global tatal
//     //totalOfTotalTh.textContent =globalTotal;



// }






// for (let i = 0; i < container.length; i++) {

//     collecter[i].numOfRandomCookeis();
//     collecter[i].render();
// }
// makingFooter();





'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create the function for random custemer number
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let stores = [];
//create the constructor for all object store cookies

function Cookie(name, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;

    this.total = 0;
    // randomnumber();
    this.cookiesperhour = [];

    stores.push(this);

}
// another way of solving total of toals
// let globalTotal=0;

//calculate the random custumer per hour
Cookie.prototype.calcCustomerPerHour=function () {
    return randomnumber(this.min, this.max);
}

//  and the average per customer for each hour
Cookie.prototype.calcookiesperhour = function () {
    for (let i = 0; i < hours.length; i++) {
        //here calculate the number cookies and multiply with avg in same function 
        this.cookiesperhour.push(Math.floor( this.calcCustomerPerHour() * this.avg));
        this.total += this.cookiesperhour[i];
        // globalTotal+=this.cookiesperhour[i];
    }
}

const Seattle = new Cookie('Seattle', 23, 65, 6.3);
// console.log(Seattle);

const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
// console.log(Tokyo);

const Dubai = new Cookie('Dubai', 11, 38, 3.7);
// console.log(Dubai);

const Paris = new Cookie('Paris', 20, 38, 2.3);
// console.log(Paris);

const Lima = new Cookie('Lima', 2, 16, 4.6);
// console.log(Lima);

console.log('stores',stores);




let parent = document.getElementById('parent');
//create table in globel
let table = document.createElement('table');
//appeand
parent.appendChild(table);


// making header function

function makingHeader() {
    //create tr element in table
    let headingrow = document.createElement('tr');
    //append tr to table
    table.appendChild(headingrow);
    
    
    let firstTh = document.createElement('th');
    headingrow.appendChild(firstTh);
    firstTh.textContent='Name';
    
    for (let i = 0; i < hours.length; i++) {
        // create the first row
        let hoursTh = document.createElement('th');
        //appeanding
        headingrow.appendChild(hoursTh);
        //give the element the contant
        hoursTh.textContent = hours[i];
    
    }
    
    let finalTh = document.createElement('th');
    headingrow.appendChild(finalTh);
    finalTh.textContent = "Daily Location Total";

    
}    





//creating function by using cons (methode with const)

Cookie.prototype.render = function () {
    // make a store row 
    let storeRow = document.createElement('tr');
    // append to the table
    table.appendChild(storeRow);

    // first td element
    let nameTd = document.createElement('td');
    // append to the store row
    storeRow.appendChild(nameTd);
    // give text content
    nameTd.textContent=this.name;


    for (let i = 0; i < hours.length; i++) {
        // make a td element for every hour
        let cookiesTd = document.createElement('td');
        // append to store row
        storeRow.appendChild(cookiesTd);
        // give text content of the avarage cookies per hour
        cookiesTd.textContent = this.cookiesperhour[i];
    }

    // made total td for every shop
    let totalTd = document.createElement('td');
    // append total to the store row
    storeRow.appendChild(totalTd);
    // give text content
    totalTd.textContent = this.total;

}



// footer function
function makingFooter() {
    // making footer row
    let footerRow=document.createElement('tr');

    // append footer row to the table
    table.appendChild(footerRow);

    // make first th for footer

    let firstTh = document.createElement('th');

    // append th to the footer row
    footerRow.appendChild(firstTh);

    // give text content
    firstTh.textContent='Totals';

    let totalForEachHour;
    let megaTotal=0;
    // making the totals
    for (let i = 0; i < hours.length; i++) {
        totalForEachHour=0;
        for (let j = 0; j < stores.length; j++) {
            // console.log(hours[i]);
            // console.log(stores[j]);
            totalForEachHour+=stores[j].cookiesperhour[i];
            megaTotal+=stores[j].cookiesperhour[i];
         
        }
        console.log(totalForEachHour);
        // create final th
        let footerTh=document.createElement('th');

        // append to footer row
        footerRow.appendChild(footerTh);

        // give text conent
        footerTh.textContent=totalForEachHour;

    }

    // make final th total of totals
    let totalTh= document.createElement('th');

    // append to the footer row
    footerRow.appendChild(totalTh);

    // give text content:
    totalTh.textContent=megaTotal;
     
    // if you want to solve it with global total
    // totalTh.textContent=globalTotal;


}


makingHeader();
for (let i = 0; i < stores.length; i++) {
    stores[i].calcookiesperhour();
    stores[i].render();
}
makingFooter();








