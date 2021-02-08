var place= prompt("do you prefer petra or aqaba?");
while(place !== "petra" && place !== "aqaba" )
{
    place = prompt("do you prefer petra or aqaba?");
}
var placename = '';
if(place == "petra")
{
    placename = '<img src="images/petra.jpg" />';
}

    else if(place=="aqaba")
    {
        placename = '<img src="images/aqaba.jpg" />';
    }

var numpetra = prompt("how many times you visit petra?");

var result = '';
for(var i=0; i<numpetra; i++)
{
    result = result + placename;
}
document.write(result);