const url = 'https://open-weather13.p.rapidapi.com/city/${input.value}';
const button = document.getElementById('button')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93e0491683msh0f0e3a92c8b3e18p179f05jsn8b7ca6e4e1cc',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
button.addEventListener('click', function(e){
 e.preventDefault();
 console.log(input.value.weather);
})