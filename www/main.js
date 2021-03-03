const cat1obj = document.getElementById('cat1');
const cat2obj = document.getElementById('cat2');
const cat3obj = document.getElementById('cat3');
const cat4obj = document.getElementById('cat4');
const cat5obj = document.getElementById('cat5');
const cat6obj = document.getElementById('cat6');
const cat7obj = document.getElementById('cat7');
const cat8obj = document.getElementById('cat8');
const cat9obj = document.getElementById('cat9');
const cat10obj = document.getElementById('cat10');
const cat11obj = document.getElementById('cat11');
const cat12obj = document.getElementById('cat12');

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
const userNameObj = document.getElementById('userName');
// const fNameObj = document.getElementById('fName');
const userSubmitObj = document.getElementById('userSubmit');

// var dob;            // User's birthday
// var dob_month;      // dob: month value
// var dob_day;        // dob: day value
// var selected_sign;  // Currently selected sign

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('modal-close');
closeModalObj.addEventListener('click', function () {
    modal.hidden = !modal.hidden;
    // return userSubmitObj to default
});

cat1obj.addEventListener('click', function () {
    console.log('Cat1 clicked on')
    userPicked('cat1');
});

cat2obj.addEventListener('click', function () {
    console.log('Cat2 clicked on')
    userPicked('cat2');
});

cat3obj.addEventListener('click', function () {
    console.log('Cat3 clicked on')
    userPicked('cat3');
});

cat4obj.addEventListener('click', function () {
    console.log('Cat4 clicked on')
    userPicked('cat4');
});

cat5obj.addEventListener('click', function () {
    console.log('Cat5 clicked on')
    userPicked('cat5');
});

cat6obj.addEventListener('click', function () {
    console.log('Cat6 clicked on')
    userPicked('cat6');
});

cat7obj.addEventListener('click', function () {
    console.log('Cat7 clicked on')
    userPicked('cat7');
});

cat8obj.addEventListener('click', function () {
    console.log('Cat8 clicked on')
    userPicked('cat8');
});

cat9obj.addEventListener('click', function () {
    console.log('Cat9 clicked on')
    userPicked('cat9');
});

cat10obj.addEventListener('click', function () {
    console.log('Cat10 clicked on')
    userPicked('cat10');
});

cat11obj.addEventListener('click', function () {
    console.log('Cat11 clicked on')
    userPicked('cat11');
});

cat12obj.addEventListener('click', function () {
    console.log('Cat12 clicked on')
    userPicked('cat12');
});

function userPicked(whichOne) {
    console.log('User Picked Called ' + whichOne);
    modal.hidden = !modal.hidden;
    //Display large img
    //Display Date Range
    //Play item sound
    switch (whichOne) {
        case 'cat1':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Ragdoll Cat';
            // display date range
            zDateRangeObj.innerHTML = '22 December – 19 January';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat2':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'American Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '23 November – 21 December';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat3':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Munchkin Cat';
            // display date range
            zDateRangeObj.innerHTML = '23 October – 21 November';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat4':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Exotic Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '23 September – 22 October';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat5':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Peterbald Cat';
            // display date range
            zDateRangeObj.innerHTML = '23 August – 22 September';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat6':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'American Curl';
            // display date range
            zDateRangeObj.innerHTML = '23 July – 22 August';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat7':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Russian Blue';
            // display date range
            zDateRangeObj.innerHTML = '21 June – 22 July';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat8':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'British Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '21 May – 20 June';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat9':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Birman Cat';
            // display date range
            zDateRangeObj.innerHTML = '20 April – 20 May';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat10':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Persian Cat';
            // display date range
            zDateRangeObj.innerHTML = '21 March – 19 April';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat11':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Scottish Fold';
            // display date range
            zDateRangeObj.innerHTML = '19 February – 20 March';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
        case 'cat12':
            // display image
            // zDisplayObj.src = 'placeholder.jpg';
            // display title
            zTitleObj.innerHTML = 'Egyptian Cat';
            // display date range
            zDateRangeObj.innerHTML = '20 January – 18 February';
            // display description
            zMoreInfo.innerHTML = 'Pisces are cool, they swim in water.';
            // play sound
            break;
    }
}

function playSound() {
    // Play a sound based on the `selected_sign`
}

userSubmitObj.addEventListener('click', function () {
    console.log('User submit button clicked');
    // Get the user first name and store it in a variable
    const userFirstName = document.getElementById('fName').value;
    console.log('userFirstName is: ' + userFirstName);
    userName.hidden = !userName.hidden;
    userNameObj.innerHTML = 'Hi ' + userFirstName + ', ';

    // Get the user date and extract the month of year and day of month
    const userBday = new Date(document.getElementById('bDay').value);
    console.log('userBday is: ' + userBday);

    // Figure out the zodiac sign based on month and of year and day of month
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);

    let AstroSign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "cat1";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "cat2";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "cat3";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "cat4";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "cat5";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "cat6";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "cat7";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "cat8";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "cat9";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "cat10";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "cat11";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "cat12";
    }

    console.log('AstroSign is: ' + AstroSign);

    userPicked(AstroSign);
    // Display custom image based on zodiac sign

}); 