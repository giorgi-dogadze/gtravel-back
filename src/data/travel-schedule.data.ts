import { TravelSchedule, TransportType } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const tbilisiChiatura: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiChiatura'),
  type: TransportType.Bus,
  startDestination: 'თბილისი',
  endDestination: 'ჭიათურა',
  address: 'თბილისი, დიდუბე, ოკრიბის ავტოსადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 15,
  description:
    'მარშუტკა გადის ყოველ საათში ერთხელ, აკეთებს მოთხოვნისამებრ ერთ გაჩერებას ჭერათხევზე',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const chiaturaTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('chiaturaTbilisi'),
  type: TransportType.Bus,
  startDestination: 'ჭიათურა',
  endDestination: 'თბილისი',
  address: 'ჭიათურა, აბაშიძის ქუჩის ავტოსადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 15,
  description:
    'მარშუტკა გადის ყოველ საათში ერთხელ, აკეთებს მოთხოვნისამებრ ერთ გაჩერებას ჭერათხევზე',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kobuletiTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('kobuletiTbilisi'),
  type: TransportType.Train,
  startDestination: 'ქობულეთი',
  endDestination: 'თბილისი',
  address: 'ქობულეთის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 25,
  description:
    'მატარებელი გადის დღეში ორჯერ 1) გასვლა 18:12 და ჩასვლა 23:38 2) გასვლა 20:24 და 01:48 ჩასვლა ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiKobuleti: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiKobuleti'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'ქობულეთი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 25,
  description:
    'მატარებელი გადის დღეში ორჯერ 1) გასვლა 18:12 და ჩასვლა 23:38 2) გასვლა 20:24 და 01:48 ჩასვლა ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const batumiTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('batumiTbilisi'),
  type: TransportType.Train,
  startDestination: 'ბათუმი',
  endDestination: 'თბილისი',
  address: 'ბათუმის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 25,
  description:
    'მატარებელი გადის დღეში ორჯერ 1) გასვლა 07:45 და ჩასვლა 13:23 2) გასვლა 17:45 და 23:38 ჩასვლა ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiBatumi: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiBatumi'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'ბათუმი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 25,
  description:
    'მატარებელი გადის დღეში ორჯერ 1) გასვლა 07:45 და ჩასვლა 13:23 2) გასვლა 17:45 და 23:38 ჩასვლა ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const ozurgetiTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('ozurgetiTbilisi'),
  type: TransportType.Train,
  startDestination: 'ოზურგეთი',
  endDestination: 'თბილისი',
  address: 'ოზურგეთის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 10,
  description:
    'მატარებელი გადის დღეში ერთხელ 1) გასვლა 08:55 და ჩასვლა 17:46  ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiOzurgeti: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiOzurgeti'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'ოზურგეთი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 10,
  description:
    'მატარებელი გადის დღეში ორჯერ 1) გასვლა 07:45 და ჩასვლა 13:23 2) გასვლა 17:45 და 23:38 ჩასვლა ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const zestafoniTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('zestafoniTbilisi'),
  type: TransportType.Train,
  startDestination: 'ზესტაფონი',
  endDestination: 'თბილისი',
  address: 'ზესტაფონის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 14,
  description:
    'მატარებელი გადის დღეში სამჯერ 1) გასვლა 09:47 და ჩასვლა 13:01 2) გასვლა 13:45 და ჩასვლა 17:46  3) გასვლა 19:08 და ჩასვლა 22:39',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiZestafoni: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiZestafoni'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'ზესტაფონი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 14,
  description:
    'მატარებელი გადის დღეში სამჯერ 1) გასვლა 09:47 და ჩასვლა 13:01 2) გასვლა 13:45 და ჩასვლა 17:46  3) გასვლა 19:08 და ჩასვლა 22:39',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const qutaisiTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('qutaisiTbilisi'),
  type: TransportType.Bus,
  startDestination: 'ქუთაისი',
  endDestination: 'თბილისი',
  address: 'ქუთაისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 14,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiQutaisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiQutaisi'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'ქუთაისი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 14,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const mtsketaTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('mtsketaTbilisi'),
  type: TransportType.Bus,
  startDestination: 'მცხეთა',
  endDestination: 'თბილისი',
  address: 'მცხეთის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 5,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisimtsketa: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiMtsketa'),
  type: TransportType.Train,
  startDestination: 'მცხეთა',
  endDestination: 'ქუთაისი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 5,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const rustaviTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('rustaviTbilisi'),
  type: TransportType.Bus,
  startDestination: 'რუსთავი',
  endDestination: 'თბილისი',
  address: 'რუსთავის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 6,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiRustavi: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiRustavi'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'რუსთავი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 6,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const telaviTbilisi: TravelSchedule = {
  id: uuid(),
  slug: slugify('telaviTbilisi'),
  type: TransportType.Bus,
  startDestination: 'თელავი',
  endDestination: 'თბილისი',
  address: 'თელავის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 10,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tbilisiTelavi: TravelSchedule = {
  id: uuid(),
  slug: slugify('tbilisiTelavi'),
  type: TransportType.Train,
  startDestination: 'თბილისი',
  endDestination: 'თელავი',
  address: 'თბილისის სადგური',
  workDays: 'ყოველდღე',
  workYours: '07:00 - 19:00',
  ticketPrice: 10,
  description: 'ავტობუსი და სამარშრუტო ტაქსი გამოდის 30 წუთიანი ინტერვალით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const travelSchedules: TravelSchedule[] = [
  tbilisiChiatura,
  chiaturaTbilisi,
  kobuletiTbilisi,
  tbilisiKobuleti,
  batumiTbilisi,
  tbilisiBatumi,
  ozurgetiTbilisi,
  tbilisiOzurgeti,
  zestafoniTbilisi,
  tbilisiZestafoni,
  qutaisiTbilisi,
  tbilisiQutaisi,
  mtsketaTbilisi,
  tbilisimtsketa,
  rustaviTbilisi,
  tbilisiRustavi,
  telaviTbilisi,
  tbilisiTelavi,
];
