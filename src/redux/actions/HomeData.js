
import axios from 'axios';

const homeAction = (data) =>  async(dispatch) => {
    try {
        const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    //relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    q: data,
    //type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'c62878f1c6msh9fa1c3dc9343c98p146e84jsn6ae0f157a1cf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


	await axios.request(options).then(function(response){
        dispatch({type: 'GET_VIDEOS', payload: response.data})
    }).catch(function(error) {
        console.error(error);
    });	
} catch (error) {
        console.log(error);
    }
}

export default homeAction
