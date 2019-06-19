

export const moviesURL = () => `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}&language=en-US&include_adult=false&include_video=false`;


export const moviesParamsURL = (
  rMax: number,
  rMin: number,
  yrMax: number,
  yrMin: number,
  rtMax: number,
  rtMin: number,
  seletedGenre: string,
) => `https://api.themoviedb.org/3/discover/movie?api_key=bac128078ed572b3da5ccecc59685054&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${yrMin}&primary_release_date.lte=${yrMax}&vote_average.gte=${rtMin}&vote_average.lte=${rtMax}&with_runtime.gte=${rMin}&with_runtime.lte=${rMax}${seletedGenre}`;


export const imageURL = (image: string) => `https://image.tmdb.org/t/p/original${image}`;

export const genreURL = () => `https://api.themoviedb.org/3/genre/movie/list?api_key=${DB_KEY}&language=en-US`;

export const movieURL = (id: number) => `https://api.themoviedb.org/3/movie/${id}?api_key=${DB_KEY}&language=en-US&append_to_response=credits,reviews,similar`;

export const missing = () => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png';

export const userImg = () => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png';
