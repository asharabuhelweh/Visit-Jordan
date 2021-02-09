
function printPlace(){
   return prompt("do you prefer petra or aqaba?");
}
var newSt =printPlace()

while(newSt!= "petra" && newSt != "aqaba" )
{
    newSt  = prompt("do you prefer petra or aqaba?");
    }

var placename = '';
if(newSt == "petra")
{
    placename = '<img src="images/petra.jpg" />';
}

    else if(newSt=="aqaba")
    {
        placename = '<img src="images/aqaba.jpg" />';
    }

var numpetra = prompt("how many times you visit it");
var result = '';

function gitResult(){
    '';}


for(var i=0; i<numpetra; i++)
{
    result = result + placename;
}
document.write(result);
