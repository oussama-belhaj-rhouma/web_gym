export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63f655692emsh3e34cbeac852508p1874c8jsn9feb16061828',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'}
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cc880e8df8mshdca6ef88d9c3534p12a529jsn78354db06579',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch (url , options);
    const data = await response.json();

    return data;  
}

