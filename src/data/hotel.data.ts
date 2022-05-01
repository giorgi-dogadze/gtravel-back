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
  price: Math.random() * 5,
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const hotels: Hotel[] = [hotel1, hotel2, hotel3];
