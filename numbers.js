const List1 = [["Zero", "0"], ["Reciprocal of Croutonplex (ill-defined)", "<sup>1</sup>&frasl;<sub>Croutonplex</sub>"], ["2 divided by Croutonplex (ill-defined)", "<sup>2</sup>&frasl;<sub>Croutonplex</sub>"], ["Croutonillionth (ill-defined)", "<sup>1</sup>&frasl;<sub>Croutonillion</sub>"],
               ["2 divided by Croutonillion (ill-defined)", "<sup>2</sup>&frasl;<sub>Croutonillion</sub>"]]
var x = 0;
for(x = 0; x < List1.length(); x++) {
   document.body.innerHTML += '<p id=Number(1,'+(x+1).toString()+')>'+List1[x][0]+', '+List1[x][1]+'</p>'
}

