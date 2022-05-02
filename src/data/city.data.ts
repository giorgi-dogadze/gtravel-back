import { City } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';
import {
  gazafxuli,
  kalauri,
  darkvetis,
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
} from './restaurant.data';
import {
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
} from './hotel.data';

export const chiatura: City = {
  id: uuid(),
  slug: slugify('chiatura'),
  name: 'chiatura',
  area: 54.5,
  population: 12803,
  populationDensity: 234.9,
  description: 'დიდებული ქალაქი',
  sightseeing: {
    description: 'კაცხის სვეტი',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katskhi_Pillar.jpg/250px-Katskhi_Pillar.jpg',
  },
  history: 'დაარსა აკაკიმ 1879წელს',
  hotels: [hotel1, hotel2, hotel3],
  restaurants: [gazafxuli],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const sachkhere: City = {
  id: uuid(),
  slug: slugify('sachkhere'),
  name: 'sachkhere',
  area: 54.5,
  population: 12803,
  populationDensity: 234.9,
  description: 'დიდებული ქალაქი',
  sightseeing: {
    description: 'კაცხის სვეტი',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katskhi_Pillar.jpg/250px-Katskhi_Pillar.jpg',
  },
  history: 'დაარსა აკაკიმ 1879წელს',
  hotels: [hotel4, hotel5, hotel6, hotel7],
  restaurants: [restaurant1, restaurant2, restaurant3, restaurant4, kalauri],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const qutaisi: City = {
  id: uuid(),
  slug: slugify('qutaisi'),
  name: 'qutaisi',
  area: 54.5,
  population: 12803,
  populationDensity: 234.9,
  description: 'დიდებული ქალაქი',
  sightseeing: {
    description: 'კაცხის სვეტი',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katskhi_Pillar.jpg/250px-Katskhi_Pillar.jpg',
  },
  history: 'დაარსა აკაკიმ 1879წელს',
  hotels: [],
  restaurants: [darkvetis],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const cities: City[] = [qutaisi, sachkhere, chiatura];
