import { City } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const chiaturaId = uuid();
export const sachkhereId = uuid();
export const qutaisiId = uuid();

export const chiatura: City = {
  id: chiaturaId,
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
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const sachkhere: City = {
  id: sachkhereId,
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
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const qutaisi: City = {
  id: qutaisiId,
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
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const cities: City[] = [chiatura, sachkhere, qutaisi];
