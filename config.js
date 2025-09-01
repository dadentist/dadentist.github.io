

const config = {
	symbol: "/symbol.jpg",
	symbolAlt: "Gnosis via Trivium et Quadrivium",
	quote: "Quote",
	title: "TITLE ?",
	authorName: "SOMEONE"
};


const getEssay = function(id) {
	// Load/read the essays.json
	// Pass the ID of the essay you want to get as a parameter
	//Return an Array with all the essay's data, including the essay itself
	return id
}

// window.location.href is passed as parameter
const getPage = function(loc) {
	const url=loc.href;
	const cleanURL = location.href.replace('https://', '');
	return cleanURL.split('/')[1].split('?')[1].split('=');
}



