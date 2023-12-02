const inventors = [
	{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
	{first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
	{first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
	{first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
	{first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
	{first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
	{first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = ['Care, Ann', 'Gurnel, Peter', 'Manson, Rick', 'Wonder, Woman', 'Super, Man', 'Bat, Man', 'Barrie, Allen', 'Some, Alian', 'Mr, Gudvin', 'Kent, Clark', 'Wayne, Bruce', 'Odinson, Thor', 'Stark, Tonny', 'Black, Adam', 'Dark, Side', 'Gucci, Gang', 'Some, Name', 'Script, Java', 'CSS, HTML', 'Fury, Nick', 'Odinson, Loky', 'Lodbrok, Ragnar', 'Sin, Lee',]

//filter
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen);

//map
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames)

//sort
/*const ordered = inventors.sort(function(a, b) {
	if(a.year > b.year) {
		return 1;
	} else {
		return -1;
	}
})
*/
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//reduce
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//sort 
const oldest = inventors.sort(function(a, b) {
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

//create list
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
// 				.map(link => link.textContent)
// 				.filter(streetName => streetName.includes('de'));

//sort2
const alpha = people.sort((lastOne, nextOne) => {
	const [aLast, aFirst] = lastOne.split(', ');
	const [bLast, bFirst] = nextOne.split(', ');
	return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//reduce2

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
	if(!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++
	return obj;
}, {});
console.log(transportation);