import { Hotel } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const hotel1: Hotel = {
  id: uuid(),
  slug: slugify('hotel1'),
  name: 'hotel1',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel2: Hotel = {
  id: uuid(),
  slug: slugify('hotel2'),
  name: 'hotel2',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel3: Hotel = {
  id: uuid(),
  slug: slugify('hotel3'),
  name: 'hotel3',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel4: Hotel = {
  id: uuid(),
  slug: slugify('hotel4'),
  name: 'hotel4',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel5: Hotel = {
  id: uuid(),
  slug: slugify('hotel5'),
  name: 'hotel5',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel6: Hotel = {
  id: uuid(),
  slug: slugify('hotel6'),
  name: 'hotel6',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotel7: Hotel = {
  id: uuid(),
  slug: slugify('hotel7'),
  name: 'hotel7',
  rating: 3.5,
  address: 'univermagtan',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'nice place',
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotels: Hotel[] = [
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
];
