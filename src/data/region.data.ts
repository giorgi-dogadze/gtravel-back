import { Region } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';
import { chiatura, sachkhere, qutaisi } from './city.data';
import { imeruliKhachapuri, imeruliLobiani } from './dish.data';

export const imeretiId = uuid();

export const imereti: Region = {
  id: imeretiId,
  slug: slugify('imereti'),
  name: 'imereti',
  area: 3054.5,
  regionCenter: chiatura,
  population: 528030,
  populationDensity: 234.9,
  history: 'დაარსა აკაკიმ 1879წელს',
  cuisine: 'ყველაფერი კარგი',
  description: 'დიდებული კუთხე',
  cities: [chiatura, sachkhere, qutaisi],
  dishes: [imeruliKhachapuri, imeruliLobiani],
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const regions: Region[] = [imereti];
