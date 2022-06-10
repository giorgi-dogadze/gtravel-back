import { Restaurant } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';



export const  QebuliKobuleti: Restaurant = {
  id: uuid(),
  slug: slugify(' QebuliKobuleti'),
  name: ' Qebuli-Kobuleti',
  rating: 8.5,
  address: 'Village Kobuleti, Kobuleti 6200 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/12/42/d4/61/2018.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/12/42/d3/ae/2018.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/12/42/d3/7c/2018.jpg',
  ],
  description: 'ულამაზესი გარემო,უგემრიელესი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const BegheliKhulo: Restaurant = {
  id: uuid(),
  slug: slugify('BegheliKhulo'),
  name: 'Begheli Khulo',
  rating: 8.5,
  address: '3 Aghmashenebeli Street, Khulo, Adjara, Georgia',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/original/308_508008295.jpg',
    'https://10619-2.s.cdn12.com/rests/original/308_502678215.jpg',
    'https://10619-2.s.cdn12.com/rests/original/308_508008297.jpg',
  ],
  description: 'საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const TamarisKhidi: Restaurant = {
  id: uuid(),
  slug: slugify('TamarisKhidi'),
  name: 'Tamaris Khidi',
  rating: 8.5,
  address: 'keda,kedis raino sofeli kveda makhunceti',
  imageUrl: [
    'http://tifa.ge/images/restotani/Restaurant-Tamar-Bridge/14458012040_3-.jpg',
    'http://tifa.ge/images/restotani/Restaurant-Tamar-Bridge/259013013596_4-.jpg',
    'http://tifa.ge/images/restotani/Restaurant-Tamar-Bridge/390294346080_30-.jpg',
  ],
  description: 'ულამაზესი გარემო უგემრიელესი კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const  Shuakhevi: Restaurant = {
  id: uuid(),
  slug: slugify(' Shuakhevi'),
  name: ' Shuakhevi',
  rating: 8.5,
  address: 'Shuakhevi, Adjara, Georgia',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/original/103_510328908.jpg',
    'https://img.restaurantguru.com/r682-Restaurant-Shuakhevi-interior.jpg',
    'https://img.restaurantguru.com/r88c-exterior-Restaurant-Shuakhevi.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Riviera: Restaurant = {
  id: uuid(),
  slug: slugify('Riviera'),
  name: 'Riviera',
  rating: 9.5,
  address: 'tamar mefis gamziri',
  imageUrl: [
    'https://www.infobatumi.ge/wp-content/uploads/2021/06/Riviera-2021-5-INFOBATUMI.GE_.jpg',
    'https://www.infobatumi.ge/wp-content/uploads/2021/06/Riviera-2021-11-INFOBATUMI.GE_.jpg',
    'https://www.infobatumi.ge/wp-content/uploads/2021/06/Riviera-2021-12-INFOBATUMI.GE_.jpg',
  ],
  description: 'ძალიან კარგი გარემოა ძალიან კარგი კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Gulrifshi: Restaurant = {
  id: uuid(),
  slug: slugify('Gulrifshi'),
  name: 'Gulrifshi',
  rating: 8.5,
  address: 'Gulrifshi,georgia',
  imageUrl: [
    'https://kutaisi.travel/files/restaurants/%E1%83%90%E1%83%A0%E1%83%92%E1%83%9D/5.jpg',
    'https://kutaisi.travel/files/restaurants/%E1%83%90%E1%83%A0%E1%83%92%E1%83%9D/4.jpg',
    'https://kutaisi.travel/files/restaurants/%E1%83%90%E1%83%A0%E1%83%92%E1%83%9D/2.jpg',
  ],
  description: 'სასიამოვნო ადგილი დროის გასატარებლად',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Ochamchire: Restaurant = {
  id: uuid(),
  slug: slugify('ochamchire'),
  name: 'ochamchire',
  rating: 8.5,
  address: 'ochamchire,georgia',
  imageUrl: [
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/129265893_993358324524288_6532595478708179651_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AxvyRPeLXyIAX-KVOTt&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT8_UO9iIG9EAnM-HyUuifpuPHAKIBvIOLuMBaUZ2D97Sg&oe=62BE6852',
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/128727664_992666357926818_3789361899549431409_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Bpd1redx8iMAX_5qGwp&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT9GeIYIMhxshwOy1Eb0FsW3mHgPHHvarLi0dLkn-ZOYSQ&oe=62BDE5DF',
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/126504875_985197405340380_6638975202035599913_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NPR335bPyfwAX-D1E5h&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT9yrEIdJRtbvqGn2NuwkvCbeexnPGrABYNEOaIKDaIBxA&oe=62BDE84F',
  ],
  description: 'ძალიამ კარგი კერძბი და ძალიან კარგი გარემოაა',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Leonn: Restaurant = {
  id: uuid(),
  slug: slugify('Leon'),
  name: 'Leon',
  rating: 8.5,
  address: 'Chitanava St. 6, Sukhumi  Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/19/a0/d5/a1/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/a0/d5/c6/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/a0/d5/90/caption.jpg',
  ],
  description: 'უგემრიელესი კერძები და სასიამოვნო გარემო დაგხვდებათ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Veranda: Restaurant = {
  id: uuid(),
  slug: slugify('gazafxuli'),
  name: 'gazafxuli',
  rating: 8.7,
  address: '9 Heroes Ave, Gudauta, Georgien',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/original/405_66342748.jpg',
    'https://10619-2.s.cdn12.com/rests/original/405_66342741.jpg',
    'https://10619-2.s.cdn12.com/rests/original/405_502212825.jpg',
  ],
  description: 'აქ დაგხვდებათ თბილი გარემო და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Besedka: Restaurant = {
  id: uuid(),
  slug: slugify('Besedka'),
  name: 'Besedka',
  rating: 8.8,
  address: 'Vladislava Ardzinba Ave. 273, Gagra 6700 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/10/dd/d3/ae/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/17/8a/5c/67/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/23/35/d4/caption.jpg',
  ],
  description: 'საუკეთესო კერძები,ულამაზესი და ძალიან სასიამოვნო გარემო დაგხვდებათ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};



export const Legend: Restaurant = {
  id: uuid(),
  slug: slugify('Legend'),
  name: 'Legend',
  rating: 9.3,
  address: 'gali, georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/13/9c/df/23/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1d/84/8f/8f/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1d/3e/88/89/caption.jpg',
  ],
  description: 'დააგემოვნეთ ჩვენთან საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const TerracePub
: Restaurant = {
  id: uuid(),
  slug: slugify('TerracePub'),
  name: 'Terrace Pub',
  rating: 8.2,
  address: 'Dolidze 9, chokhatauri 3500 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/15/96/e4/99/getlstd-property-photo.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-p/15/a5/6f/3e/you-can-enjoy-the-place.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/96/e4/99/getlstd-property-photo.jpg',
  ],
  description: 'აქ დაგხვდებათ თბილი გარემო და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const GourmandSamtredia: Restaurant = {
  id: uuid(),
  slug: slugify('GourmandSamtredia'),
  name: 'Gourmand Samtredia',
  rating: 8.2,
  address: 'Tamar Mepe 17, samtredia 3900 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/f0/a8/f3/restaurant-gourmand.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/f0/a8/fc/restaurant-gourmand.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/f0/a8/fc/restaurant-gourmand.jpg',
  ],
  description: 'დააგემოვნეთ ჩვენთან საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Megapolisi: Restaurant = {
  id: uuid(),
  slug: slugify('Megapolisi'),
  name: 'Megapolisi',
  rating: 7.5,
  address: 'abesadzis 54, Zestafoni, Iméréthie, Géorgie',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/small/w312/h280/344_341805832.jpg',
    'https://10619-2.s.cdn12.com/rests/small/w166/h136/344_341805808.jpg',
    'https://10619-2.s.cdn12.com/rests/small/w312/h280/344_66319450.jpg',
  ],
  description: 'ძალიამ კარგი კერძბი და ძალიან კარგი გარემოაა',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Tortiko: Restaurant = {
  id: uuid(),
  slug: slugify('Tortiko'),
  name: 'Tortiko',
  rating: 9.8,
  address: '8 Respublikis street, Ozurgeti 3900 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/11/de/3c/c8/pastry-shop-tortiko-coffee.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/8a/46/43/european-style-cakes.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/19/8a/45/3e/fresh-coffee-and-delicious.jpg',
  ],
  description: 'სასიამოვნო ადგილია დროის გასატარებლად',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Palaty: Restaurant = {
  id: uuid(),
  slug: slugify('Palaty'),
  name: 'Palaty',
  rating: 9.5,
  address: 'Pushkin str. II lane # 1 Imereti, Kutaisi 4600 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/17/ee/ee/dc/street-view.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/17/ee/f1/35/first-floor.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-l/14/39/dc/fd/mexican-potatoes.jpg',
  ],
  description: 'საუკეთესო კერძები,ულამაზესი და ძალიან სასიამოვნო გარემო დაგხვდებათ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const LunchAtLia: Restaurant = {
  id: uuid(),
  slug: slugify('LunchAtLia'),
  name: 'Lunch At Lia',
  rating: 10,
  address: 'Merab Kiladze Str. 7, Chiatura 5500 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/22/93/67/3f/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/22/92/d0/82/delicious.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/21/5e/bf/b4/delicious-food-ingredients.jpg',
  ],
  description: 'მობრძანდით და დააგემოვნეთ უგემრიელესი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Magnolia: Restaurant = {
  id: uuid(),
  slug: slugify('Magnolia'),
  name: 'Magnolia',
  rating: 9.5,
  address: '1 Zakaria Paliashvili Street, Tskaltubo, Imereti, Georgia',
  imageUrl: [
    'https://img.restaurantguru.com/ccc8-Magnolia-Tskaltubo-food.jpg',
    'https://img.restaurantguru.com/ce79-Magnolia-Tskaltubo-beverage.jpg',
    'https://img.restaurantguru.com/c72b-Magnolia-Tskaltubo-drink.jpg',
  ],
  description: 'ძალიან კარგი გარემოა ძალიან კარგი კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const KakhetiRestaurant: Restaurant = {
  id: uuid(),
  slug: slugify('KakhetiRestaurant'),
  name: 'Kakheti Restaurant',
  rating: 8.2,
  address: '43, Akhmeta, Mtskheta-Mtianeti, Georgia',
  imageUrl: [
    'https://img.restaurantguru.com/cf86-Restaurant-Kakheti-Restaurant-photo.jpg',
    'https://img.restaurantguru.com/cf86-Restaurant-Kakheti-Restaurant-photo.jpg',
    'https://img.restaurantguru.com/cc70-Restaurant-Kakheti-Restaurant-photo-1.jpg',
  ],
  description: 'საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const KoKo: Restaurant = {
  id: uuid(),
  slug: slugify('KoKo'),
  name: 'Ko Ko',
  rating: 8.0,
  address: 'Gurjaani, Kakheti, Georgia',
  imageUrl: [
    'https://img.restaurantguru.com/c5ea-Restaurant-Ko-Ko-interior.jpg',
    'https://img.restaurantguru.com/c5ea-Restaurant-Ko-Ko-interior.jpg',
    'https://img.restaurantguru.com/c359-Restaurant-Ko-Ko-design.jpg',
  ],
  description: 'სასიამოვნო ადგილი დროის გასატარებლად',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Kapiloni: Restaurant = {
  id: uuid(),
  slug: slugify('Kapiloni'),
  name: 'Kapiloni',
  rating: 8.1,
  address: 'Erekle St. 2, Telavi 2200 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/9e/93/b6/getlstd-property-photo.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/a2/95/98/kapiloni.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/11/2b/a1/5f/photo0jpg.jpg',
  ],
  description: 'საუკეთესო ადგილი საუკეთესო კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const TheTerraceSignagi: Restaurant = {
  id: uuid(),
  slug: slugify('TheTerraceSignagi'),
  name: 'The Terrace Signagi',
  rating: 9.5,
  address: 'Baratashvili str. 1-turn. #10, Signagi 4200 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/1b/55/78/58/best-view-over-the-city.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/10/43/6d/23/opening-buffet.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/10/43/2d/9e/so-delicious-tomato-soup.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const RoyalBatoni: Restaurant = {
  id: uuid(),
  slug: slugify('RoyalBatoni'),
  name: 'Royal Batoni',
  rating: 3.5,
  address: 'Hotel Royal Batoni, Kvareli Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/08/39/38/ac/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/08/39/38/ae/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/08/39/38/ad/caption.jpg',
  ],
  description: 'საუკეთესო გარემო და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Khvamli: Restaurant = {
  id: uuid(),
  slug: slugify('Khvamli'),
  name: 'Khvamli',
  rating: 7.5,
  address: 'tsageri,georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/56/c1/10/didgori-winemaking.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/1c/eb/e3/c8/shkmeruli-and-rachuli.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/2e/6d/87/making-waw-wine-from.jpg',
  ],
  description: 'დააგემოვნეთ ჩვენთან საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Adacafe: Restaurant = {
  id: uuid(),
  slug: slugify('Adacafe'),
  name: 'Adacafe',
  rating: 8.5,
  address: 'Sanapiro 5, Mtskheta 3300 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/1b/85/fb/48/garden-in-the-riverside.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/71/16/e3/mixtures-of-turkish-and.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/18/a8/13/3b/adacafe-on-the-river.jpg',
  ],
  description: 'საუკეთესო კერძები,სასიამოვნო გარემო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Aragvi: Restaurant = {
  id: uuid(),
  slug: slugify('Aragvi'),
  name: 'Aragvi',
  rating: 9.2,
  address: 'Village Aragvispiri, Dusheti 1804 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/84/67/c2/restaurant-aragvi-is.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/87/8e/59/aragvi-restaurant.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/0f/84/67/a6/restaurant-aragvi-is.jpg',
  ],
  description: 'უგემრიელესი კერძები და მყუდრო გარემო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Marani: Restaurant = {
  id: uuid(),
  slug: slugify('Marani'),
  name: 'Marani',
  rating: 8.4,
  address: 'Bolnisi, Kvemo Kartli, Georgia',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/small/w312/h280/109_509083397.jpg',
    'https://10619-2.s.cdn12.com/rests/small/w312/h280/109_509083398.jpg',
    'https://10619-2.s.cdn12.com/rests/small/w166/h136/109_509083404.jpg',
  ],
  description: 'საუკეთესო კერძებია ჩვენთან',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Dmanisi: Restaurant = {
  id: uuid(),
  slug: slugify('Dmanisi'),
  name: 'Dmanisi',
  rating: 8.5,
  address: 'dmanisi,georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/a2/48/f0/mtsvadi-pork-barbeque.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/a2/45/e2/traditional-lunch-at.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/0f/a2/46/0f/homemade-pickles-plate.jpg',
  ],
  description: 'უგემრიელესი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const khikhani: Restaurant = {
  id: uuid(),
  slug: slugify('khikhani'),
  name: 'khikhani',
  rating: 7.5,
  address: 'Tsalka, Kvemo Kartli, Georgia',
  imageUrl: [
    'https://10619-2.s.cdn12.com/r2/w312/h280/khkhani-food.jpg',
    'https://10619-2.s.cdn12.com/r7/w312/h280/khkhani-interior.jpg',
    'https://10619-2.s.cdn12.com/r9/w166/h136/khkhani-meals.jpg',
  ],
  description: 'უგემრიელესი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Tsiskvili: Restaurant = {
  id: uuid(),
  slug: slugify('Tsiskvili'),
  name: 'Tsiskvili',
  rating: 8.5,
  address: 'oni,georgia',
  imageUrl: [
    'https://img.restaurantguru.com/c589-Restaurant-Tsiskvili-interior.jpg',
    'https://img.restaurantguru.com/cba1-Restaurant-Tsiskvili-food.jpg',
    'https://img.restaurantguru.com/cba1-Restaurant-Tsiskvili-food.jpg',
  ],
  description: 'საუკეთესო კერძები,სასიამოვნო გარემო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Metekhara: Restaurant = {
  id: uuid(),
  slug: slugify('Metekhara'),
  name: 'Metekhara',
  rating: 9.5,
  address: 'Gamsakhurdia St. 2, Ambrolauri 0400 Georgia',
  imageUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Dubli: Restaurant = {
  id: uuid(),
  slug: slugify('Dubli'),
  name: 'Dubli',
  rating: 8.5,
  address: 'Tamarashvili St., 35, Akhaltsikhe Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/11/d5/08/a0/dubli.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/e4/0c/aa/dubli.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/13/50/f4/03/img-20180605-175839-largejpg.jpg',
  ],
  description: 'საუკეთესო კერძები,ულამაზესი და ძალიან სასიამოვნო გარემო დაგხვდებათ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Tourist: Restaurant = {
  id: uuid(),
  slug: slugify('Tourist'),
  name: 'Tourist',
  rating: 8.2,
  address: 'Nodar Dumbadze street 3, Borjomi 383720 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/18/9d/da/fe/photo4jpg.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/14/10/73/de/img-20180809-201243819.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-l/18/9d/da/fa/photo0jpg.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const  Diaroni: Restaurant = {
  id: uuid(),
  slug: slugify(' Diaroni'),
  name: ' Diaroni',
  rating: 9.5,
  address: 'Meunargia St. 9, Zugdidi 384700 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/10/21/56/9d/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/11/e3/ed/67/bar.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/10/21/50/d9/caption.jpg',
  ],
  description: 'უგემრიელესი კერძები მხოლოდ ჩვენთან',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Oda: Restaurant = {
  id: uuid(),
  slug: slugify('ODA'),
  name: 'ODA',
  rating: 8.5,
  address: 'Chavchavadze st. 1, Martivili 3100 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/10/06/9c/5f/getlstd-property-photo.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/18/2d/34/0c/photo0jpg.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-l/14/2e/cf/d3/img-20180814-132135-largejpg.jpg',
  ],
  description: 'საუკეთესო ადგილი და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Efre: Restaurant = {
  id: uuid(),
  slug: slugify('Efre'),
  name: 'Efre',
  rating: 8.5,
  address: 'chkhorotsku,georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/13/29/d3/c0/host-restaurant-zugdidi.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/08/76/ea/b7/nice-restaurant-in-the.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/18/0b/e3/a9/comida-tipica-del-pais.jpg',
  ],
  description: 'საუკეთესო კერძები,სასიამოვნო გარემო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Argo: Restaurant = {
  id: uuid(),
  slug: slugify('Argo'),
  name: 'Argo',
  rating: 7.5,
  address: 'Sokhumi St. 130,tsalenjikha georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/85/b7/51/restaurant-argo-in-zugdidi.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/85/b7/51/restaurant-argo-in-zugdidi.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/85/b7/51/restaurant-argo-in-zugdidi.jpg',
  ],
  description: 'უგემრიელესი კერძები და მყუდრო გარემო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Kera: Restaurant = {
  id: uuid(),
  slug: slugify('Kera'),
  name: 'Kera',
  rating: 8.4,
  address: 'Moskov Street, 2, Gori Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/1e/9d/cf/ce/welcome2ke-ra-3.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1d/9b/46/f5/best-outdoor-seating.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/1d/9b/4c/8a/colorful-environment.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Agurebshi: Restaurant = {
  id: uuid(),
  slug: slugify('Agurebshi'),
  name: 'Agurebshi',
  rating: 7.5,
  address: 'anton katalikos street, Kaspi, Shida Kartli, Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/18/93/f0/54/quiet-environment-for.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/09/61/e2/88/art-house.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/0c/0f/f5/de/img-20160716-221738-largejpg.jpg',
  ],
  description: 'ულამაზესი გარემო უგემრიელესი კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};


export const kareli: Restaurant = {
  id: uuid(),
  slug: slugify('kareli'),
  name: 'kareli',
  rating: 8.5,
  address: 'kareli ,georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-l/17/68/6b/bc/img-20190505-184154-largejpg.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-f/13/9a/89/f0/caption.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1a/24/6e/e4/polevka-kharcho.jpg',
  ],
  description: 'აქ დაგხვდებათ თბილი გარემო და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const MaxiBurger: Restaurant = {
  id: uuid(),
  slug: slugify('MaxiBurger'),
  name: 'Maxi Burger',
  rating: 8.5,
  address: 'Tbilisi - Senaki - Leselidze Hwy., Khashuri 5704 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-p/17/db/cc/c1/chicken-burger-and-cold.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/17/d5/5b/bb/burgers.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/17/e8/a3/67/maxi-burger-menu.jpg',
  ],
  description: 'აქ დაგხვდებათ თბილი გარემო და საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const CafeLaila: Restaurant = {
  id: uuid(),
  slug: slugify('CafeLaila'),
  name: 'Cafe Laila',
  rating: 8.5,
  address: 'Zugdidi Jvari Mestia Lasdili Seti square7, Mestia 384750 Georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/17/6c/7b/7b/cafe-laila-exterior.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-w/17/6c/7d/90/pray-for-france-priere.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-l/17/6c/7c/04/easter-decoration.jpg',
  ],
  description: 'ულამაზესი გარემო უგემრიელესი კერძებით',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Koshki: Restaurant = {
  id: uuid(),
  slug: slugify('Koshki'),
  name: 'Koshki',
  rating: 7.5,
  address: 'lentekhi,georgia',
  imageUrl: [
    'https://media-cdn.tripadvisor.com/media/photo-s/14/09/10/06/img-20180807-142140268.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/b6/9e/6d/photo3jpg.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0d/a4/33/2c/ic-mekan.jpg',
  ],
  description: 'სასიამოვნო გარემოა და გემრიელი კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};



export const RestaurantSamepo: Restaurant = {
  id: uuid(),
  slug: slugify('RestaurantSamepo'),
  name: 'Restaurant Samepo',
  rating: 8.2,
  address: ' Tsurtaveli 5, Rustavi, Georgia.',
  imageUrl: [
    'https://10619-2.s.cdn12.com/rests/original/105_505791511.jpg',
    'https://tkt-static.lemon.do/img/30d600ab-cc4c-45f8-aee3-15ee47818528.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-jJniPd3vSwmuSUp_taXFukNyLYG7Zy2dlL7WMUtGbFwdexw_dLTswziYlvUfoJUiWk&usqp=CAU',
  ],
  description: 'საუკეთესო კერძები',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const TiflisiVeranda: Restaurant = {
  id: uuid(),
  slug: slugify('TiflisiVeranda'),
  name: 'TiflisiVeranda',
  rating: 8.5,
  address: 'Tbilisi, gorgiladzis q.3',
  imageUrl: [
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/129265893_993358324524288_6532595478708179651_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AxvyRPeLXyIAX-KVOTt&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT8_UO9iIG9EAnM-HyUuifpuPHAKIBvIOLuMBaUZ2D97Sg&oe=62BE6852',
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/128727664_992666357926818_3789361899549431409_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Bpd1redx8iMAX_5qGwp&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT9GeIYIMhxshwOy1Eb0FsW3mHgPHHvarLi0dLkn-ZOYSQ&oe=62BDE5DF',
    'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/126504875_985197405340380_6638975202035599913_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NPR335bPyfwAX-D1E5h&_nc_ht=scontent.ftbs10-1.fna&oh=00_AT9yrEIdJRtbvqGn2NuwkvCbeexnPGrABYNEOaIKDaIBxA&oe=62BDE84F',
  ],
  description: 'სამზარეულო: ევროპული, ქართული. საშუალო ღირებულება: 80 ლარზე მეტი .სერვისები:გადახდა პლასტიკური ბარათებით,wi-fi,ადგილზე მიტანა,ლანჩი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const restaurants: Restaurant[] = [
  TiflisiVeranda,
  QebuliKobuleti,
  BegheliKhulo,
  TamarisKhidi,
  Shuakhevi,
  Riviera,
  Gulrifshi,
  Ochamchire,
  Leonn,
  Veranda,
  Besedka,
  Legend,
  TerracePub,
  GourmandSamtredia,
  Megapolisi,
  Tortiko,
  Palaty,
  LunchAtLia,
  Magnolia,
  KakhetiRestaurant,
  KoKo,
  Kapiloni,
  TheTerraceSignagi,
  RoyalBatoni,
  Khvamli,
  Adacafe,
  Aragvi,
  Marani,
  Dmanisi,
  khikhani,
  Tsiskvili,
  Metekhara,
  Dubli,
  Tourist,
  Diaroni,
  Oda,
  Efre,
  Argo,
  Kera,
  Agurebshi,
  kareli,
  MaxiBurger,
  CafeLaila,
  Koshki
];

