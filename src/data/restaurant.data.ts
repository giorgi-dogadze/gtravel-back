import { Restaurant } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const gazafxuli: Restaurant = {
  id: uuid(),
  slug: slugify('gazafxuli'),
  name: 'gazafxuli',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kalauri: Restaurant = {
  id: uuid(),
  slug: slugify('kalauri'),
  name: 'kalauri',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const darkvetis: Restaurant = {
  id: uuid(),
  slug: slugify('darkvetis'),
  name: 'darkvetis',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurants: Restaurant[] = [gazafxuli, kalauri, darkvetis];
