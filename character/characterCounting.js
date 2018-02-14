function count(str) 
{//Removing the spaces
 var split = str.split(" ").join("");
 //Removing the case
 var lCase = split.toLowerCase();
 //removing the special characters
 var special = lCase.replace(/[^a-zA-Z0-9]/g, '');

 var letters = {}
 for( var i = 0; i < special.length; i++)
 {
 	if (special[i] in letters )
 	{
       letters[special[i]]++;   
 	}
 	else
 	{
 		letters[special[i]] = 1;
 	}
	}
	return letters;
 }


console.log(count("lighthouse in the house!!!"));