const key = config.MY_KEY;

const getMovie = async (title, year) => {
    const searchQ = `?t=${title}&y=${year}`;
    const baseURL = `http://www.omdbapi.com/${searchQ}&apikey=${key}&`;
    
    // console.log(baseURL);
    const response = await fetch(baseURL);
    const data = await response.json();

    return data;
}