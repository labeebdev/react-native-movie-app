import axios from 'axios';

// endpoints
export const apiBaseUrl = 'https://api.themoviedb.org/3';

// fallback images
export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';


// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath=> posterPath? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
export const image342 = posterPath=> posterPath? `https://image.tmdb.org/t/p/w342${posterPath}` : null;
export const image185 = posterPath=> posterPath? `https://image.tmdb.org/t/p/w185${posterPath}` : null;

export const apiCall = async (endpoint: string, params?: unknown) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const response = await axios.request(options);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error: ', error);
    return {};
  }
};
