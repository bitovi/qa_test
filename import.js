const data = require('./test_data.json');

data.forEach((person) => {
	const name = `${person['firstName']} ${person['lastName']}`;

	const hobbies = person['hobbies'].filter((hobby) => {
		return (hobby.indexOf('basketball') === -1);
	}).map((hobby) => {
		return hobby.substring(0, (hobby.length - 1))
	});

	const output = `${name} enjoys ${hobbies.join(', ')}`;
	console.log(output);
});
