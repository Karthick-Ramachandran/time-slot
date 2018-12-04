document.getElementById('set').addEventListener('click', func);


function func(){


    var slot1 = document.getElementById('slot1').value;
    var slot2 = document.getElementById('slot2').value;
    var slot3 = document.getElementById('slot3').value;
    var slot4 = document.getElementById('slot4').value;
    var slot5 = document.getElementById('slot5').value;
    var slot6 = document.getElementById('slot6').value;
    var slot7 = document.getElementById('slot7').value;
    

var data = [];
var val = [];
var some = [];


for(var i = slot1; i <= slot2; i++){
    data.push(i);
}
for(var j = slot3; j <= slot4; j++){
    val.push(j);
}

for(var k = slot5; k <= slot6; k++){
    some.push(k);
}
if(slot7 === slot1 || data.includes(parseInt(slot7))){
    alert('found on slot one and two');
}else if(slot7 === slot3 || val.includes(parseInt(slot7))){
    alert('found on slot three and four')
}else if(slot7 === slot5 || some.includes(parseInt(slot7))){
    alert('found on five and six')
    
}else{
    alert('not found anywhere');
}


}