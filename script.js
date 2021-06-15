const containerPersonagens = document.querySelector('.container-personagens');
const numeroMaximoDePersonagens = 671;

generateRandomNumber = () => {
	return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

display = (id, imagem, name) => {
	containerPersonagens.innerHTML += 
	`
	<div class='container'>
		<p>N°: ${id}</p>
		<img class='personagem' alt='imagem do personagem; ${name}' src='${imagem}'/>
		<h2>${name}</h2>
	</div>
	`
}

getCharacter = () => {
	const id = generateRandomNumber();
	return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type": 'application/json'
		}
	
	}).then((response) => response.json()).then((data) => {
		imagemDoPersonagem = data.image;
		nomeDoPersonagem = data.name;
		display(id, imagemDoPersonagem, nomeDoPersonagem);
	})
	.catch(function(error){
		console.log('Error: '+ error);
	})
}

generate = () => {
	containerPersonagens.innerHTML = "";
	for(i = 1; i <= 4; i++)  {
		getCharacter();
	}
}
generate();