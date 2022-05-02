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
  description: 'nice place',
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
  description: 'nice place',
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
  description: 'nice place',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurant1: Restaurant = {
  id: uuid(),
  slug: slugify('restaurant1'),
  name: 'restaurant1',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurant2: Restaurant = {
  id: uuid(),
  slug: slugify('restaurant2'),
  name: 'restaurant2',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurant3: Restaurant = {
  id: uuid(),
  slug: slugify('restaurant3'),
  name: 'restaurant3',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurant4: Restaurant = {
  id: uuid(),
  slug: slugify('restaurant4'),
  name: 'restaurant4',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const restaurants: Restaurant[] = [
  gazafxuli,
  kalauri,
  darkvetis,
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
];
