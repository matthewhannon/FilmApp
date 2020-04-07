// DOM EVENTS
const titleInput = document.querySelector('.title-search');
const titleButton = document.querySelector('button');
const searchDisplay = document.querySelector('.search-display');
const showPoster = document.querySelector('.poster');
const actorList = document.querySelector('.actors');
const director = document.querySelector('.director').childNodes;

//Pressing Enter Key
titleInput.addEventListener("keyup", e => {
    if(event.keyCode === 13){
        //cancel the default action, if needed
        event.preventDefault();
        //'clicks' button for us
        titleButton.click();
        titleInput.value="";
    }
});

//Clicking Search Button
titleButton.addEventListener('click',(e) => {
    const titleSearch = `&query=${titleInput.value}`;

    getData(titleSearch).then((data)=>{
        console.log(data[0]); //first data
        console.log(data[1]); //data details
        console.log(data[2]); //credits

        const title = data[0].original_title;
        const posterLink = data[1].poster_path;
        const actorCredits = data[2];
        const crew = data[2].crew;
        
        searchTitleDisplay(title);
        showImage(posterLink);
        updateActors(actorCredits);
        showDirector(crew)
    });
});

//Displays Search Title
const searchTitleDisplay = (title) => {
    searchDisplay.innerHTML= `${title}`;
    searchDisplay.style.visibility= "visible";
};

//Shows film poster
const showImage = (link) => {
    const imageLink = `http://image.tmdb.org/t/p/w300/${link}`
    showPoster.src = `${imageLink}`;
};

const updateActors = (actorsArray) => {
    const actors = actorsArray.cast;
    console.log(actors);

    const actorsText = actorList.childNodes[1].children;
    // console.log(actorsText[0])
    // console.log(actors[0].name)

    // console.log(actors.length);

    for(var i = 0; i < 5; i++){
        let image = `http://image.tmdb.org/t/p/w200/${actors[i].profile_path}`;
        actorsText[i].innerHTML = `<img class="actor-img" src=${image}><p>${actors[i].name} as ${actors[i].character}</p>`;
    }
}

const showDirector = (crewArray) => {
    for(var i = 0; i < crewArray.length; i++){
        if(crewArray[i].job === "Director"){
            console.log(i, crewArray[i].name);
            director[1].innerHTML = "Directed By"
            director[3].innerHTML = `${crewArray[i].name}`;
        }
    }
}
