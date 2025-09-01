

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
	
	const json = fetch('/essays.json')
		.then((response) => { response.json().then( (data) => { return data; } ) } )
		.catch( (err) => { console.log(err); } );

	return json;
}

// window.location.href is passed as parameter
const getPage = function(loc) {
	const url=loc.href;
	const cleanURL = location.href.replace('https://', '');
	const parts = cleanURL.split('/')[1]
	const _get = parts.split('?')[1];
	if (_get == undefined) return '&nbsp;';
	const page = _get.split('=')[1];
	if (page == undefined) return '&nbsp;';

	// /^[0-9]+$/
	// /^\d+$/
	const regexp = new RegExp(/^[0-9]+$/);
	const isNum = regexp.test(page);
	if (isNum == undefined || isNum == false) return '&nbsp;';
	return (page == undefined ? '&nbsp;' : page);
}



