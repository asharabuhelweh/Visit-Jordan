
function printPlace(place){
    prompt("do you prefer petra or aqaba?");
}

while(printPlace() != "petra" && printPlace() != "aqaba" )
{
    promptplace = prompt("do you prefer petra or aqaba?");
}
var placename = '';
if(printPlace() == "petra")
{
    placename = '<img src="images/petra.jpg" />';
}

    else if(place=="aqaba")
    {
        placename = '<img src="images/aqaba.jpg" />';
    }

var numpetra = prompt("how many times you visit petra?");

function gitResult(result){
    '';}
for(var i=0; i<numpetra; i++)
{
    result = result + placename;
}
document.write(gitResult());
