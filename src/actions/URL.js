export const moviesURL = () => `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}&language=en-US&include_adult=false&include_video=false`;


export const moviesParamsURL = (
  rMax: number,
  rMin: number,
  yrMax: number,
  yrMin: number,
  rtMax: number,
  rtMin: number,
  seletedGenre: string,
) => `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}4&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${yrMin}&primary_release_date.lte=${yrMax}&vote_average.gte=${rtMin}&vote_average.lte=${rtMax}&with_runtime.gte=${rMin}&with_runtime.lte=${rMax}${seletedGenre}`;


export const imageURL = (image: string) => `https://image.tmdb.org/t/p/w500${image}`;
