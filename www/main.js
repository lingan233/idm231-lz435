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
const helpObj = document.getElementById('help');

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
const userNameObj = document.getElementById('userName');
// const fNameObj = document.getElementById('fName');
const userSubmitObj = document.getElementById('userSubmit');

// Sound Control Code
const meow1Obj = document.getElementById('meow1');
const meow2Obj = document.getElementById('meow2');
const meow3Obj = document.getElementById('meow3');
const meow4Obj = document.getElementById('meow4');
const meow5Obj = document.getElementById('meow5');
const meow6Obj = document.getElementById('meow6');
const meow7Obj = document.getElementById('meow7');
const meow8Obj = document.getElementById('meow8');
const meow9Obj = document.getElementById('meow9');
const meow10Obj = document.getElementById('meow10');
const meow11Obj = document.getElementById('meow11');
const meow12Obj = document.getElementById('meow12');

// var dob;            // User's birthday
// var dob_month;      // dob: month value
// var dob_day;        // dob: day value
// var selected_sign;  // Currently selected sign

const modal = document.getElementById('modal');
const helpModal = document.getElementById('help-modal');

const closeModalObj = document.getElementById('modal-close');
closeModalObj.addEventListener('click', function () {
    modal.hidden = !modal.hidden;
    // return userSubmitObj to default
});

const helpCloseModalObj = document.getElementById('help-modal-close');
helpCloseModalObj.addEventListener('click', function () {
    helpModal.hidden = !helpModal.hidden;
    // return userSubmitObj to default
});

helpObj.addEventListener('click', function () {
    console.log('help clicked on');
    userNeed('help');
});

cat1obj.addEventListener('click', function () {
    console.log('Cat1 clicked on');
    userPicked('cat1');
});

cat2obj.addEventListener('click', function () {
    console.log('Cat2 clicked on');
    userPicked('cat2');
});

cat3obj.addEventListener('click', function () {
    console.log('Cat3 clicked on');
    userPicked('cat3');
});

cat4obj.addEventListener('click', function () {
    console.log('Cat4 clicked on');
    userPicked('cat4');
});

cat5obj.addEventListener('click', function () {
    console.log('Cat5 clicked on');
    userPicked('cat5');
});

cat6obj.addEventListener('click', function () {
    console.log('Cat6 clicked on');
    userPicked('cat6');
});

cat7obj.addEventListener('click', function () {
    console.log('Cat7 clicked on');
    userPicked('cat7');
});

cat8obj.addEventListener('click', function () {
    console.log('Cat8 clicked on');
    userPicked('cat8');
});

cat9obj.addEventListener('click', function () {
    console.log('Cat9 clicked on');
    userPicked('cat9');
});

cat10obj.addEventListener('click', function () {
    console.log('Cat10 clicked on');
    userPicked('cat10');
});

cat11obj.addEventListener('click', function () {
    console.log('Cat11 clicked on');
    userPicked('cat11');
});

cat12obj.addEventListener('click', function () {
    console.log('Cat12 clicked on');
    userPicked('cat12');
});

function userNeed(whichOne) {
    helpModal.hidden = !helpModal.hidden;
}

function userPicked(whichOne) {
    console.log('User Picked Called ' + whichOne);
    //if whichOne is entered, show modal
    modal.hidden = !modal.hidden;
    //Display large img
    //Display Date Range
    //Play item sound
    switch (whichOne) {
        case 'cat1':
            // display image
            zDisplayObj.src = 'images/cat1.jpg';
            // display title
            zTitleObj.innerHTML = 'Ragdoll Cat';
            // display date range
            zDateRangeObj.innerHTML = '22 December – 19 January';
            // display description
            zMoreInfo.innerHTML = 'Ragdoll cat, also known as the “dog-like cats” due to their tendency to follow people around. The name "Ragdoll" is derived from the tendency of individuals from the original breeding stock to go limp and relaxed when picked up. The Ragdoll is one of the largest domesticated cat breeds, with a sturdy body, large frame, and proportionate legs. The genes for point coloration are responsible for the distinctive blue eyes of the Ragdoll.';
            // play sound
            meow1Obj.play();
            break;
        case 'cat2':
            // display image
            zDisplayObj.src = 'images/cat2.jpg';
            // display title
            zTitleObj.innerHTML = 'American Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '23 November – 21 December';
            // display description
            zMoreInfo.innerHTML = 'American Shorthair cats are active and are one of the most healthy cat breeds that are formed naturally. They descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. The American Shorthair has a large, powerfully-built body. They have round faces and short ears. The American Shorthair is a true breed of working cat.';
            // play sound
            meow2Obj.play();
            break;
        case 'cat3':
            // display image
            zDisplayObj.src = 'images/cat3.jpg';
            // display title
            zTitleObj.innerHTML = 'Munchkin Cat';
            // display date range
            zDateRangeObj.innerHTML = '23 October – 21 November';
            // display description
            zMoreInfo.innerHTML = 'Munchkin cat is a relatively new breed of cat characterized by its very short legs, which are caused by a genetic mutation. Munchkin cat is outgoing, intelligent, and responds well to being handled. It is a small to medium-sized cat with a moderate body type and medium-plush coat. Munchkin has similar characteristics to normal domestic cats and comes in all coat colors and patterns, due to their frequent use as outcrosses.';
            // play sound
            meow3Obj.play();
            break;
        case 'cat4':
            // display image
            zDisplayObj.src = 'images/cat4.jpg';
            // display title
            zTitleObj.innerHTML = 'Exotic Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '23 September – 22 October';
            // display description
            zMoreInfo.innerHTML = 'The Exotic Shorthair is a breed of cat developed as a short-haired version of the Persian. The Exotic is similar to the Persian in many ways, including temperament and conformation, a flat nose, and face with the exceptions of the short dense coat. In the late 1950s, the Persian was used as an outcross by some American Shorthair breeders. Exotic Shorthairs have a gentle and calm personality reminiscent of the Persian but are generally livelier than their longhaired ancestors.';
            // play sound
            meow4Obj.play();
            break;
        case 'cat5':
            // display image
            zDisplayObj.src = 'images/cat5.jpg';
            // display title
            zTitleObj.innerHTML = 'Peterbald Cat';
            // display date range
            zDateRangeObj.innerHTML = '23 August – 22 September';
            // display description
            zMoreInfo.innerHTML = 'The Peterbald Cat has a hair-losing gene and can be born bald, flocked, velour, brush, or with a straight coat. Those born with hair, excepting the straight-coats, can lose their hair over time. Members of the breed have a slim and muscular build. Peterbalds are sweet-tempered, affectionate, peaceful, curious, smart, and energetic. They are medium vocal and tend to follow their owners and want to be with them. Peterbalds typically live in harmony with other cats and pets, and also with children.';
            // play sound
            meow5Obj.play();
            break;
        case 'cat6':
            // display image
            zDisplayObj.src = 'images/cat6.jpg';
            // display title
            zTitleObj.innerHTML = 'American Curl';
            // display date range
            zDateRangeObj.innerHTML = '23 July – 22 August';
            // display description
            zMoreInfo.innerHTML = 'The American Curl is a breed of cat characterized by its unusual ears, which curl back from the face toward the center of the back of the skull. The American Curl is a medium-sized cat. American Curl kittens are born with straight ears, which begin to curl within forty-eight hours. American Curl is lively and gets along with people. ';
            // play sound
            meow6Obj.play();
            break;
        case 'cat7':
            // display image
            zDisplayObj.src = 'images/cat7.jpg';
            // display title
            zTitleObj.innerHTML = 'Russian Blue';
            // display date range
            zDateRangeObj.innerHTML = '21 June – 22 July';
            // display description
            zMoreInfo.innerHTML = 'The Russian Blue is a naturally occurring breed that may have originated in the port of Arkhangelsk in Russia. Russian Blues are plush short-haired, shimmering pale blue-gray cats with emerald green eyes. The Russian Blue has bright green eyes, pinkish lavender or mauve paws, two layers of short thick fur, and a blue-grey-black coat.[6] The color is bluish-gray that is the dilute expression of the black gene. The Russian Blue is a curious and tranquil animal. They are known for their friendliness and intelligence and are somewhat reserved. ';
            // play sound
            meow7Obj.play();
            break;
        case 'cat8':
            // display image
            zDisplayObj.src = 'images/cat8.jpg';
            // display title
            zTitleObj.innerHTML = 'British Shorthair';
            // display date range
            zDateRangeObj.innerHTML = '21 May – 20 June';
            // display description
            zMoreInfo.innerHTML = 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar color variant is the "British Blue", with a solid grey-blue coat, orange eyes, and a medium-sized tail. The breed has also been developed in a wide range of other colors and patterns, including tabby and colorpoint. They are an easygoing and dignified breed, not as active and playful as many. They require only minimal grooming and take well to being kept as indoor-only cats; however, they can be prone to obesity unless care is taken with their diet.';
            // play sound
            meow8Obj.play();
            break;
        case 'cat9':
            // display image
            zDisplayObj.src = 'images/cat9.jpg';
            // display title
            zTitleObj.innerHTML = 'Birman Cat';
            // display date range
            zDateRangeObj.innerHTML = '20 April – 20 May';
            // display description
            zMoreInfo.innerHTML = 'The Birman is a long-haired cat distinguished by a dark face, silky coat, deep blue eyes, and contrasting white "gloves" or "socks" on each paw. Their coat color will get darker gradually when the temperature is cold. The Birman is sociable, gentle, quiet, loving, and companionable. They love to be with people and are playful and desirous of attention. They are social with both people and other animals.';
            // play sound
            meow9Obj.play();
            break;
        case 'cat10':
            // display image
            zDisplayObj.src = 'images/cat10.jpg';
            // display title
            zTitleObj.innerHTML = 'Persian Cat';
            // display date range
            zDateRangeObj.innerHTML = '21 March – 19 April';
            // display description
            zMoreInfo.innerHTML = 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. They are known for their flat face and their quiet and sweet nature. While they are affectionate and enjoy the attention, they are not usually the type to demand constant attention. In fact, they can be standoffish and reserved around new people until they get to know them.';
            // play sound
            meow10Obj.play();
            break;
        case 'cat11':
            // display image
            zDisplayObj.src = 'images/cat11.jpg';
            // display title
            zTitleObj.innerHTML = 'Scottish Fold';
            // display date range
            zDateRangeObj.innerHTML = '19 February – 20 March';
            // display description
            zMoreInfo.innerHTML = 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold". Scottish Folds are typically good-natured and placid and adjust to other animals within a household extremely well. They tend to become very attached to their human caregivers and are by nature quite affectionate. Loneliness is something they heavily dislike and which makes them feel depressed. It is also common for Scottish Folds to be stubborn.';
            // play sound
            meow11Obj.play();
            break;
        case 'cat12':
            // display image
            zDisplayObj.src = 'images/cat12.jpg';
            // display title
            zTitleObj.innerHTML = 'Egyptian Mau';
            // display date range
            zDateRangeObj.innerHTML = '20 January – 18 February';
            // display description
            zMoreInfo.innerHTML = 'Egyptian Maus are a small to medium-sized short-haired cat breed. They are one of the few naturally spotted breeds of domesticated cats. The spots of the Mau occur on only the tips of the hairs of its coat. It is considered a rare breed. The Egyptian Mau is the fastest of the domestic cats, with its longer hind legs, and unique flap of skin extending from the flank to the back knee, which assists in running by allowing the legs to stretch back farther, providing for greater agility and length of stride. Egyptian Maus are shy, friendly, and loving with their main owners, but they are slow to warm up to other people or pets.';
            // play sound
            meow12Obj.play();
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
    userNameObj.innerHTML = 'Hi ' + userFirstName + '! ';

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

    if (isNaN(whichMonth) == false) {
        userPicked(AstroSign);
    }
    
    // Display custom image based on zodiac sign

}); 