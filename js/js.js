var person1 = {
	"name" : "safa",
	"height" : 176
};
var person2 = {
	"name" : "Diana",
	"height" : 170
};
var person3 = {
	"name" : "dotan",
	"height" : 180
};
var persons = [];
persons.push(person1);
persons.push(person2);
persons.push(person3);
console.log(persons);
for (var i = 0; i < persons.length; i++) {
	var currentPerson = persons[i];
	var name = currentPerson.name;
	var height = currentPerson.height=175;
	document.write(name + " height is " + height + "<br>");
}