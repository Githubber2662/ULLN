const List1 = [["Zero", "0"], ["Reciprocal of Croutonplex (ill-defined)", "<sup>1</sup>&frasl;<sub>Croutonplex</sub>"], ["2 divided by Croutonplex (ill-defined)", "<sup>2</sup>&frasl;<sub>Croutonplex</sub>"], ["Croutonillionth (ill-defined)", "<sup>1</sup>&frasl;<sub>Croutonillion</sub>"],
               ["2 divided by Croutonillion (ill-defined)", "<sup>2</sup>&frasl;<sub>Croutonillion</sub>"], ["10 divided by Croutonillion (ill-defined)", "<sup>10</sup>&frasl;<sub>Croutonillion</sub>"], ["100 divided by Croutonillion (ill-defined)", "<sup>100</sup>&frasl;<sub>Croutonillion</sub>"],
               ["1000 divided by Croutonillion (ill-defined)", "<sup>1000</sup>&frasl;<sub>Croutonillion</sub>"], ["1000000 divided by Croutonillion (ill-defined)", "<sup>1000000</sup>&frasl;<sub>Croutonillion</sub>"], ["10<sup>10</sup> divided by Croutonillion (ill-defined)", "<sup>10<sup>10</sup></sup>&frasl;<sub>Croutonillion</sub>"],
               ["Googol divided by Croutonillion (ill-defined)", "<sup>10<sup>100</sup></sup>&frasl;<sub>Croutonillion</sub>"], ["Trialogue divided by Croutonillion (ill-defined)", "<sup>10<sup>10<sup>10</sup></sup></sup>&frasl;<sub>Croutonillion</sub>"], ["Googolplex divided by Croutonillion (ill-defined)", "<sup>10<sup>10<sup>100</sup></sup></sup>&frasl;<sub>Croutonillion</sub>"],
               ["Decker divided by Croutonillion (ill-defined)", "<sup>10&uarr;&uarr;10</sup>&frasl;<sub>Croutonillion</sub>"], ["Giggol divided by Croutonillion (ill-defined)", "<sup>10&uarr;&uarr;100</sup>&frasl;<sub>Croutonillion</sub>"], ["Deka-taxis divided by Croutonillion (ill-defined)", "<sup>10&uarr;&uarr;&uarr;10</sup>&frasl;<sub>Croutonillion</sub>"]];
var x = 0;
for(x = 0; x < List1.length; x++) {
   document.body.innerHTML += '<p id=`Number${x}`>'+List1[x][0].toString()+', '+List1[x][1].toString()+'</p>';
}
   document.body.innerHTML += '<p id=`TotalNumbers1`>'+'Total Entries: '+(x+1).toString()+'</p>';
