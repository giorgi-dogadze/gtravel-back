import { Dish } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const imeruliKhachapuriId = uuid();
export const imeruliLobianiId = uuid();

export const imeruliKhachapuri: Dish = {
  id: imeruliKhachapuriId,
  slug: slugify('imeruli khachapuri'),
  name: 'imeruli khachapuri',
  composition: 'იმერული ყველი და ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const imeruliLobiani: Dish = {
  id: imeruliLobianiId,
  slug: slugify('imeruli lobiani'),
  name: 'imeruli lobiani',
  composition: 'იმერული ლობიო და ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const dishes: Dish[] = [imeruliKhachapuri, imeruliLobiani];
