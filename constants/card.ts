

import hyouka from '/public/anime-images/hyouka.jpg';
import attack from '/public/anime-images/attack.jpg';
import death from '/public/anime-images/death.jpg';
import honey from '/public/anime-images/honey.jpg';
import five from '/public/anime-images/5sec.jpg';

{/* at main component */}

import { StaticImageData } from 'next/image';


{/*  Types  */}
interface Anime {
    id : number;
    name: string;
    rating: number;
    episodes: number;
    description: string;
    imagePath: StaticImageData;
  }



{/* constant data */}
export const animeConstants = [
    {   
        id: 1,
        name: "Hyouka",
        rating: 5, // Please provide the rating for Hyouka
        episodes: 23, // Please provide the number of episodes for Hyouka
        description: "A reserved high schooler reluctantly delves into mysteries surrounding his school's Classics Club, uncovering hidden secrets and solving enigmatic cases alongside his curious peers. Their journey intertwines with personal histories and the discovery of unexpected truths, showcasing the intrigue found in everyday life.",
        imagePath: hyouka// Example image path for Hyouka
    },
]