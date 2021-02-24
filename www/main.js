const cat1obj = document.getElementById('cat1');
const cat2obj = document.getElementById('cat2');
const cat3obj = document.getElementById('cat3');
const cat4obj = document.getElementById('cat4');
const cat5obj = document.getElementById('cat5');

cat1obj.addEventListener('click', function(){
    console.log('Cat1 clicked on')
    UserPicked('cat1');
});

cat2obj.addEventListener('click', function(){
    console.log('Cat2 clicked on')
});

cat3obj.addEventListener('click', function(){
    console.log('Cat3 clicked on')
});

cat4obj.addEventListener('click', function(){
    console.log('Cat4 clicked on')
});

cat5obj.addEventListener('click', function(){
    console.log('Cat5 clicked on')
});

function UserPicked(whichOne){
    console.log('User Picked Called ' + whichOne);
    //Display large img
    //Display Date Range
    //Play item sound
}
