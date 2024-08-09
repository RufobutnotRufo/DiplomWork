export interface UserInterface {
  name?: string;
  surname?: string;
  email?: string;
  password?: string | number;
  repeatPassword?: number | string;
}

export interface Movie {
  rank: number;
  title: string;
  description: string;
  image: string;
  big_image: string;
  genre: string[];
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  imdbid: string;
  imdb_link: string;
  new?:boolean;
}
