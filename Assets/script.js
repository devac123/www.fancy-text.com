fetch("https://ajith-fancy-text-v1.p.rapidapi.com/text?text=This%20is%20funny.", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "53d61a4f67msh4c4cb115bd62fc3p13efb4jsnc1794ad3a4fc",
		"x-rapidapi-host": "ajith-Fancy-text-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});