var words = ["ground", "control", "to", "major", "tom"];
function map(words,action) {
	var x = [];
	words.forEach(function(word) {
		x.push(action(word))
	})
	return x
}


var change = map(words, function(word) {
  return word.length;
});

console.log(change);