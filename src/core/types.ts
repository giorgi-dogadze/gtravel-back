export interface User {
  id: string;
  slug: string;
  email: string;
  passwordHash: string;
  name: string;
  lastName: string;
  personalNumber: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface Region {
  id: string;
  slug: string;
  name: string;
  area: number;
  regionCenter: City;
  population: number;
  populationDensity: number;
  history: string;
  cuisine: string;
  description: string;
  cities: City[];
  dishes: Dish[];
  createdAt: string;
  updatedAt: string;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  area: number;
  population: number;
  populationDensity: number;
  description: string;
  sightseeing: Sightseeing;
  history: string;
  restaurants: Restaurant[];
  hotels: Hotel[];
  createdAt: string;
  updatedAt: string;
}

export interface TravelSchedule {
  id: string;
  slug: string;
  type: TransportType;
  workDays: string;
  workYours: string;
  ticketPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface Dish {
  id: string;
  slug: string;
  name: string;
  composition: string;
  createdAt: string;
  updatedAt: string;
}

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  rating: number;
  address: string;
  imageUrl: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  rating: number;
  address: string;
  imageUrl: string[];
  price: number | null;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sightseeing {
  description: string;
  imageUrl: string;
}

export enum TransportType {
  Train = 'Train',
  Bus = 'Bus',
  Airplane = 'Airplane',
}

export interface ResultList<T> {
  items: T[];
  count: number;
}
