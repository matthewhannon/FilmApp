console.log('app.js test');

const titleSearch = document.querySelector('.title-search');
const yearSearch = document.querySelector('.year-search');
const buttonClick = document.querySelector('button');

const title = document.querySelector('.title');
const year = document.querySelector('.year');
const rating = document.querySelector('.rating');
const img = document.querySelector('img');

buttonClick.addEventListener('click', e => {

    e.preventDefault();
    
    // console.log('test');
    // console.log(titleSearch.value)
    // console.log(yearSearch.value)

    getMovie(titleSearch.value, yearSearch.value)
    .then(data => {
        console.log(data);
        title.innerHTML = (`This movie is titled ${data.Title}`);
        year.innerHTML = (`This movie was released in ${data.Released}`);
        rating.innerHTML = (`It is Rated ${data.Rated}`);
        updatePoster(data.Poster);
    })
    .catch(err => console.log(err))
});

const updatePoster = (poster) => {
    if(poster == 'N/A'){
        img.style="display: none";
    }else{
        img.src = `${poster}`;
    }
}


/*
    search top 10 films by length given in input field
    search by genre
    sort by rating
    sort by awards?

*/







