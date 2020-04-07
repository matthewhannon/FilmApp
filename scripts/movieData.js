//API DATA
const key = config.MY_KEY;

const getData = async (title) => {
    //Broad Search
    const source = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;
    const response = await fetch(source+title);
    const data = await response.json();

    //less details data
    const firstResult = data.results[0];
    // console.log(firstResult);

    //Search after getting ID
    const idNum = data.results[0].id;

    //Full Details
    const sourceID = `https://api.themoviedb.org/3/movie/${idNum}?api_key=${key}&append_to_response=credits`;
    const getDetails = await fetch(sourceID);
    const dataDetails = await getDetails.json();
    const credits = dataDetails.credits;

    return [firstResult, dataDetails, credits];


    //notes
    // I could add this to end of the link if I want links to video
    // const videos = `&append_to_response=videos`;
}