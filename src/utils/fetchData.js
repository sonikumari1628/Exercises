export const exerciseOptions ={
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1ac58c11damshfd713dda7f820c6p172e4bjsn581f0af2d7d9',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ac58c11damshfd713dda7f820c6p172e4bjsn581f0af2d7d9',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();


    return data;
}