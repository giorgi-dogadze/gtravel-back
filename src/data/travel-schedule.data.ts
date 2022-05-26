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
export const travelSchedules: TravelSchedule[] = [
  tbilisiChiatura,
  chiaturaTbilisi,
];
