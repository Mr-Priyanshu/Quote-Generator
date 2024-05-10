const api = 'https://api.quotable.io/random'

// let element = document.getElementsByClassName("Quote");

const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const buttonElement = document.getElementById('btn')

// console.log(quoteElement);
// console.dir(quoteElement);

function getQuote() {
   
	fetch('https://hindi-quotes.vercel.app/random')
    .then(function (responce) {
			if (!responce.ok) {
				throw new Error('Network response was not ok')
			}
			return responce.json()
		})
		.then(function (data) {

			quoteElement.textContent = data.quote
			authorElement.textContent = '- ' + data.type
            // console.log(data);
		})

		.catch(function (error) {
			console.error('Error: ', error)
		})
}

 getQuote();

buttonElement.addEventListener("click",function(){
    getQuote();
})




