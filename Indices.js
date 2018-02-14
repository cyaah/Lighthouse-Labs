function indice(str) 
{//Removing the spaces
 var split = str.split(" ").join("");
 //Removing the case
 var lCase = split.toLowerCase();
 //removing the special characters
 var special = lCase.replace(/[^a-zA-Z0-9]/g, '');

 var letters = {};
 //Going through eac
 for( var i = 0; i < special.length; i++)
 {
 	if (special[i] in letters )
 	{
 		letters[special[i]].push(i);
       
 	}
  	else
  	{
 		letters[special[i]] = [i];
  	}
 	}
	return letters;
 }


console.log(indice("lighthouse in the house"));



