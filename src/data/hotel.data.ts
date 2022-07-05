import { Hotel } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const ChateauKvirike: Hotel = {
  id: uuid(),
  slug: slugify('ChateauKvirike'),
  name: 'Chateau Kvirike',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' 2 Kldiashvili Street, 6200 Kobuleti, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/312749799.jpg?k=00982dc506696c4aa035fd8e2560d7b339468584b98c68f0797c3c8ed8ae10c2&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/300736785.jpg?k=d60029a958a8249f15644aa0c76e3d0c28e7097f7982d3b0faae3f95b771460b&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/311246314.jpg?k=5fd7c3af75fde698050b283611d905a426d6580474403e30c8b6dc41bd258164&o=&hp=1',
  ],
  description:
    'სასტუმრო „შატო კვირიკე“ 6 ჰექტარზე გაშენებული დასასვენებელი კომპლექსია, რომელიც ზღვასა და მთას შორის თავის მდებარეობას უნიკალურს ხდის.',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const AmbassadoriGoderdziHotel: Hotel = {
  id: uuid(),
  slug: slugify('AmbassadoriGoderdziHotel'),
  name: 'Ambassadori Goderdzi Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Khulo munitcipality Village Goderdzi, 6500 Khulo, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/289023994.jpg?k=2f21dd12e4e3942093806632a4004b0a2aeaab92d5566e3247bb22f707b781f2&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/289012163.jpg?k=194b73ca70773d6c132a5136ec8b6d23f4d486f508c30fc1dfbfeee0006805dd&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/289004882.jpg?k=0b770dcf6fb1840b8d125712bbba55a8ecbc7027e47332b4c5db718cfaeea575&o=&hp=1',
  ],
  description:
    ' გოდერძი იდეალურია ექსტრემალური შეგრძნებებისა და დაუვიწყარი გამოცდილებისთვის - სრიალი გაუკვალავში, ალპურ ზონაში, წიწვოვან ტყესა და სოფლებში',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const AjaraGlampingKokotauri: Hotel = {
  id: uuid(),
  slug: slugify('AjaraGlampingKokotauri '),
  name: 'Ajara Glamping Kokotauri ',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Kokotauri Building 14, 6100 Keda, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361203334.jpg?k=39178a69e8cf83ae149a6dc809fabe3703de05f46234abd4db8a19ae4cf385b9&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361198948.jpg?k=96e0d8d54ccfe54224c5e438e098cc1a32bb06b86160113bcba29db12aadb786&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361200639.jpg?k=64dcc6bfef167a9238fadd51c5a203fd307ba7c593c232e8d11145bd9b98e4d6&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361199322.jpg?k=8aad65191d2a74957a079dbeecaf0ec9fc77a1515960e2ba35af75f1f8906b47&o=&hp=1',
  ],
  description:
    'ეს შესანიშნავი ადგილია დასასვენებლად, თუ გსურთ რომანტიული დასვენება ან ყველაფრისგან იზოლირებული იყოთ. ბუნება მშვენიერია, ხედი მშვენიერია და ადგილი საკმაოდ კომფორტულია',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Kejeradzeebi: Hotel = {
  id: uuid(),
  slug: slugify('Kejeradzeebi'),
  name: 'Kejeradzeebi',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Shuakhevi-laklaketi shuakhevi laklaketi, 6300 Shuakhevi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348912269.jpg?k=a69bf16687c4d957bfbc5b77629a8aa260c4e4a84a149f48924c761d42a0a204&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348912262.jpg?k=534c2baaf633fa54918e58c6c76d21ab0d31dbc5ad29e5aef1e8fdf17fa0225f&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348912274.jpg?k=cc5d83d21ec8f23fb352d0672c64c6a7e8d2be75347a62976c4f64f57438cc29&o=&hp=1',
  ],
  description:
    'სოფელი გარშემორტყმულია ულამაზესი მთებით. შესანიშნავი ვარიანტი ქალაქის ხმაურისგან დასვენებისთვის. მასპინძლები ძალიან სტუმართმოყვარეები არიან, ყველაფერს აკეთებენ  იმისთვის, რომ კომფორტული იყოს გარემო. ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Orbicityseaview: Hotel = {
  id: uuid(),
  slug: slugify('Orbicityseaview'),
  name: 'Orbi city seaview',
  rating: Math.round(Math.random() * 2 + 3),
  address: '7b Sherif Khimshiashvili Street, 6010 Batumi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346712942.jpg?k=9343ece1847b9e08c5ebbc48d7465afcd8f3eb08cef1162ce8a705e10ad41257&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346712865.jpg?k=f19e59a1adfda1b9d433c7003a54369d2c6e487e94d54e5e6ad9a553a79704c2&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346709708.jpg?k=fe44e7c837ffe82c78bc522b65eeb2600f76ad762339e5a070954c36df004d53&o=&hp=1',
  ],
  description:
    'ადგილმდებარეობა საუკეთესოა, ხედი საოცარი, სუფთა და კომფორტული გარემოა. ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Leon: Hotel = {
  id: uuid(),
  slug: slugify('Leon'),
  name: 'Leon',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Chitanava St., 6, Sukhumi 3849 Georgia',
  imageUrl: [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a0/e5/e7/caption.jpg?w=1400&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/63/c2/leon-hotel.jpg?w=2000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f6/a6/41/photo8jpg.jpg?w=2200&h=-1&s=1',
  ],
  description: 'კარგი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const AleksandriA: Hotel = {
  id: uuid(),
  slug: slugify('AleksandriA'),
  name: 'AleksandriA ',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' 67 Leona Avenue, 354000 Ochamchira, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/329732506.jpg?k=c451859768a03578fd809e711676f3fa95fa3cfc01e848f56310ae4fea76ca25&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/228729795.jpg?k=88fca284af485f0f525d2a17395294d4a70871f079866949e98dadc165244693&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/228729862.jpg?k=51925c23d1bd987faca0e862f970e2f06598702b39b9258c4b9fbe15dca141a9&o=&hp=1',
  ],
  description:
    'ძალიან სასიამოვნო გარემოა სადაც შეგიძლიათ მეგობრებთან და ოჯახთან ერთად ძალიან კარგი დრო გაატაროთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const BoutiqueHotelAnana: Hotel = {
  id: uuid(),
  slug: slugify('BoutiqueHotelAnana'),
  name: 'BoutiqueHotelAnana',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Pate-Ipa 14, Sukhumi 420047 Georgia',
  imageUrl: [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0d/34/9a/caption.jpg?w=1400&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0d/34/9f/caption.jpg?w=1400&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0d/34/9b/caption.jpg?w=1400&h=-1&s=1',
  ],
  description: 'ძალიან კარგი გარემოა სადაც გაატარებთ თქვენს საუკეთესო დღეებს',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const EcoPapaHotel: Hotel = {
  id: uuid(),
  slug: slugify('EcoPapaHotel'),
  name: 'EcoPapaHotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Abaza Street, 360000 Gudauta, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/197516482.jpg?k=9431c3c05017b3b32e51a7303f058b9f02dba430e1a193991c8c0c74231b654f&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/264698272.jpg?k=0e43c3345ea2018c3e5c7da7bfc77b2c30e8e04bfbd8bdee09cba94ed2be566b&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/197516493.jpg?k=ba1a66a0008c20cd291c80025a045f4fee843aa9c8ba1b8f1cba9f297aba6a4a&o=&hp=1',
  ],
  description:
    'არის თბილი გარემო სადაც დაგხვდებათ ანიმატორები რომლებიც იზრუნებენ თქვენს განწყობაზე',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Abaata: Hotel = {
  id: uuid(),
  slug: slugify('Abaata'),
  name: ' Abaata',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Ardziba 115, 384870 gulrifshi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232773023.jpg?k=778352e945220217fe6ea1bd07b373146b9b7b3453ef1404e2c9a5eb69b678b0&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/345215874.jpg?k=9f7a238f7f5f4d59c056ea26333158f4eea0e13cb339333545ffae48d108975e&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232773042.jpg?k=d91543128d3f6a37e49b36d60834133325ae3aadb150bbf44b83327b628a3df3&o=&hp=1',
  ],
  description:
    'ეს არის ის ადგილი სადაც არ მოიწყენთ, სადაც ისიამოვნებთ და მეორედ  მონახულებასაც ისურვებთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const RitsaHotel: Hotel = {
  id: uuid(),
  slug: slugify('RitsaHotel'),
  name: 'Ritsa Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Prospect Leon 2,Gali, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/332418508.jpg?k=52ef4c97154dfd4dbe01697016c3b9dcf7cc91477830ff8d656a2c71fd6db849&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/332260312.jpg?k=e3272632af0289f4b2fbb7c997c1c8d2354f2679fc8555ec7980b4c54a003ff3&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84346116.jpg?k=fab1b78ce77bc3808ff932ebfb3f7575c8503cdc15e48c87c227f73eb29e030d&o=&hp=1',
  ],
  description: 'საუკეთესო გარემო',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const MenabdeWinery: Hotel = {
  id: uuid(),
  slug: slugify('MenabdeWinery'),
  name: 'Menabde Winery',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' villl. Shemokmedi, 3500 Ozurgeti, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/310909410.jpg?k=7da6ce57c04fc985aaa57466f265563d6a6a0dfa18d1212c4545676740dbb3f1&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/358279680.jpg?k=a9d88f507f5ba6e4906993e8aa72e96b05967d739a29c5160d2208e89b26454e&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/310909212.jpg?k=ba435d216143bf0d2910050abdd80650d9e907d8bffad0ca9079d2a737bdec98&o=&hp=1',
  ],
  description: 'მშვიდი, სუფთა, ძალიან კარგი საკვები და შესანიშნავი მასპინძლები',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Hotelpagio: Hotel = {
  id: uuid(),
  slug: slugify('Hotelpagio'),
  name: 'Hotel pagio',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'chokhatauri,lomtidzis 2',
  imageUrl: [
    'http://sastumroebi.ge/pagio-en#sast-1',
    'http://sastumroebi.ge/pagio-en#sast-4',
    'http://sastumroebi.ge/pagio-en#sast-8',
  ],
  description: 'კარგი გარემო კარგი მასპინძლებით',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const GuesthouseZedafoni: Hotel = {
  id: uuid(),
  slug: slugify('Guesthouse Zedafoni'),
  name: 'Guesthouse Zestafoni',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Pushkin Street 43, 2000 Zestafoni, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/227760408.jpg?k=2137573c7b37c94f13867a29285dfada1ba57bc743ac21411264f8a132c5d126&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/227748761.jpg?k=b86e285155e9fbddf2502701ccf9f940701023718d0cd2043a9e410de647f96b&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/227760904.jpg?k=a33eb2f37e6600bd0f1453a8c55f03b458e463f1bd94f1ef58d09dc15c97b297&o=&hp=1',
  ],
  description: 'ლამაზი და მყუდრო გარემოა ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const mtredebi: Hotel = {
  id: uuid(),
  slug: slugify('mtredebi'),
  name: 'mtredebi',
  rating: Math.round(Math.random() * 2 + 3),
  address:
    ' David Aghmashenebeli Avenue # 190 David Aghmashenebeli Avenue # 190, 3900 Samtredia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/173118295.jpg?k=0a66f6e8cd6497ce113accf57644c51383ced95bf6bac740bff8d142e6cc8e09&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/176246292.jpg?k=4add24f4fe1150c57b63614baad6915e2a7befac4902a80dcc0b7a76b0384616&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/172798899.jpg?k=a4601d0f78838e294bc6a7071819c0dc938109c83a2865a815da89fd6d6443e3&o=&hp=1',
  ],
  description: 'სასიამოვნო ადგილია',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const HappyStayHotel: Hotel = {
  id: uuid(),
  slug: slugify('HappyStayHotel'),
  name: 'Happy Stay Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' 87 Tamar Mephe Street, 4600 Kutaisi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/270181044.jpg?k=48d00e606f436dd73ec67676268e11b3cb7ab48aa30dd89d4c40116c43436f27&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/270180924.jpg?k=be04dc48510ed5ae81b175e6094e52e3b55206f4e9cc7127b91b73a804429699&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/134487566.jpg?k=f3db0b071f279a161ebf2ff2a9c6363e2aa44f6ab5eb29a1779dae0a42c7c3ff&o=&hp=1',
  ],
  description: 'კარგი ადგილი დროსი გასატარებლად',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const HotelImereti: Hotel = {
  id: uuid(),
  slug: slugify('HotelImereti'),
  name: 'Hotel Imereti',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Ninoshvili street #1, 5500 Chiatura, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/196101268.jpg?k=9b6f14c131cc563aad89b7ec2eb724fc7a2d596eff744514f91d96b2b7bc77bf&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/142895998.jpg?k=94824a7234a0ddc3259bc9c62dc460be36b99542ebc25f3f0fc000468aa58675&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/142896463.jpg?k=2e08082c5fa0cb476214fe3beb0cbd1e97b7e49b4a8ae5fb2eb139eb1fda81a1&o=&hp=1',
  ],
  description: 'მშიდი და კარგი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const TskaltuboPlazaHotel: Hotel = {
  id: uuid(),
  slug: slugify(' TskaltuboPlazaHotel'),
  name: ' Tskaltubo Plaza Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Rustaveli Street 15A, 5400 Tskaltubo, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/256416007.jpg?k=8af3bd670ed3679f4c7aae713017a0d313b817db06e3c040a3899298bf71fe7d&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/45747588.jpg?k=56a2318a5657b20ac45d9591ab003214795d752b1fe06baaa324ed40900c9b23&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/45753315.jpg?k=ed2749b52d1afca981240fa0ce5c44d38a387f230cdc57e78d064274d1ed8b13&o=&hp=1',
  ],
  description:
    'უმშენიერესი ადგილია მეგობრებთან და ოჯახთან ერთად დროის გასატარებლად ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Makratela: Hotel = {
  id: uuid(),
  slug: slugify('Makratela'),
  name: 'Makratela',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Tusheti Protected Landscape Dartlo, 0900 Akhmeta, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/170218381.jpg?k=6178b1771f697009a022ef857cadd164f3e159dc28d42186a61a2fdafcf32e9c&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/306902468.jpg?k=6b6aba448787519bcba89c87be7b6923618a70bcdb74e749a92836404b0430c9&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/185577373.jpg?k=44f8889ab34962e88b50fda9233f277316350b9e8f82f3dac91d894ee7e42bf1&o=&hp=1',
  ],
  description: 'საოცარი ხალხი, საოცარი ბუნება, კარგი პირობები',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const ArtVillaKotekhi: Hotel = {
  id: uuid(),
  slug: slugify('ArtVillaKotekhi'),
  name: 'Art Villa Kotekhi',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Beritashvili street 4, 1500 Gurjaani, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/355373452.jpg?k=f26e57823b0c56e372418639a16fd1af83c59fb39433696e9e0d5c5f9d49714a&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/355373433.jpg?k=b029b2dfea39ad3416d7cc2a2a0a747a080d4f488f70223190690ddc352bed80&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/355373443.jpg?k=cc5982dfe0d953a28ced240f64f1cf54d8dbbba6fecab3cd36bbb6f6bd4c10ac&o=&hp=1',
  ],
  description: 'ეს არის ადგილი სადაც დაგხვდებათ ულამაზესი გარემო',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Talaveri: Hotel = {
  id: uuid(),
  slug: slugify('Talaveri'),
  name: 'Talaveri',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Chavchavadze Street, Telavi, Georgia №112, 2200 Telavi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/351347074.jpg?k=5cfb7fa0473bf5b17671368fb3e6bee1b20f4ee92baa43e3cb0ff190ea6f8cfe&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/220637846.jpg?k=b67cfed4f6b469ffa10665b9c660991a6d47b826c4787115901079b3b1453d63&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/220635261.jpg?k=0d0cc8f29c02dd3b1f000559529dfba045101cb881e3053ef567ebcb39f5f0d5&o=&hp=1',
  ],
  description: 'ეს არის ადგილი სადაც დაგხვდებათ ულამაზესი და სასიამოვნო გარემო',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Favourite: Hotel = {
  id: uuid(),
  slug: slugify('Favourite'),
  name: 'Favourite',
  rating: Math.round(Math.random() * 2 + 3),
  address: '17 gzirishvili, 4200 Sighnaghi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/276117826.jpg?k=c6bf214f15a07f164cc7ee4168784a450c703b733ed0adc8ccff5d9810173e6d&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/266152576.jpg?k=b186ff6c01cec846f6d8314ef6f9d0e70edb7d07a3019adac16de569eee129c2&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/258366308.jpg?k=1400a263efcdc2fc019ab5b9de72a7db7c8bc0dd6d2828765d7dc022e6b9a9b2&o=&hp=1',
  ],
  description: 'ეს არის ის ადგილი სადაც ისიამოვნებთ და დაისვენებთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const KvareliLakeResort: Hotel = {
  id: uuid(),
  slug: slugify('KvareliLakeResort'),
  name: 'Kvareli Lake Resort',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Kvareli Lake, 4800 Kvareli, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/230963115.jpg?k=75f6db1a601529227d5dda4d8d6208aae852315d4acb21dfa0fab78a19c2714a&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/222383223.jpg?k=65234026cb181f7393e6e20461d41e6ae496ab95ea8fc2466511518a52640863&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/222378115.jpg?k=8fd08d2c5dcec39de04cfd4c3c6a9de48bfcae9c588ce5eb9aadb31582956af2&o=&hp=1',
  ],
  description: 'ულამაზესი და დაუვიწყარი ადგილია',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const NaBaDa: Hotel = {
  id: uuid(),
  slug: slugify('NaBaDa'),
  name: 'NaBaDa',
  rating: Math.round(Math.random() * 2 + 3),
  address:
    ' tsageri municipality, The village Shua Agvi Tsageri zone: 89, Agvi sector: 12, Quarter 22, The plot 009, 5113 Tsʼageri, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/203782603.jpg?k=183b539cb77b6972853c34409025bfca5370c7a2e1e0bb368efd0491c989d388&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/207282345.jpg?k=2ae26edf045e415f399888d85196bf3b5fccaceda31101222cab06f07ce3144e&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/203782619.jpg?k=5a2348485df2c13f6fe88469a8393295af56b9d5c243c5df0a4e31796c101ef3&o=&hp=1',
  ],
  description: 'ულამაზესი ადგილია დროის გასატარებლად',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Pompeius: Hotel = {
  id: uuid(),
  slug: slugify('Pompeius'),
  name: 'Pompeius',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' agmashenebeli str. N8, 3300 Mtskheta, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/211640220.jpg?k=18434672c95be938ed1208571331ef510d829c5cb111e5d4a981043b2473db1d&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/245403476.jpg?k=9835eb613e84042b9343d642213331a749e6bf540da83f0870d7cecac8fd3be7&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/245403638.jpg?k=00fbed45c6ae0ee7bd5921e29682f213e8fda4dd25506e7306ee7cead8239e70&o=&hp=1',
  ],
  description: 'მყუდრო და სასიამოვნო გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const VeronaApartment: Hotel = {
  id: uuid(),
  slug: slugify('VeronaApartment'),
  name: 'Verona Apartment',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' k.Bukhaidze N 22, Dusheti, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/340229284.jpg?k=906dcb7e3f36a7f881cf3a54742288d0e6420aac1966603ecce13dcd6d47cf21&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/299108151.jpg?k=fd7e76e201684c01546aa1f0030b94ba4f407c4ec806ca4ed4c6ff0d0f0231d3&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/299108124.jpg?k=57663b08290cd573d56b0b9e8150e63ec92b3cc5dd8fbade38405ce13b5061bc&o=&hp=1',
  ],
  description: 'ულამაზესი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const BolnisiPrimeHouse: Hotel = {
  id: uuid(),
  slug: slugify('BolnisiPrimeHouse'),
  name: 'Bolnisi Prime House',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' TABIDZE STREET #46, 1100 Bolnisi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/291421535.jpg?k=5129bb8559cb0f74c50900a817c17e81af086263d2f735995e78f5a36f9f4b1f&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/114427807.jpg?k=324abf1f66ff8e4328f37c14b44c083653f063f5cea4ec11120547ad259892f8&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/114427121.jpg?k=55e764da5a8674f479ee556b1799bcf78db7e4fc82dcdd20b6f7666bad647a24&o=&hp=1',
  ],
  description: 'ყველასათვის მყუდრო და თბილი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const HotelNabadiDmanisi: Hotel = {
  id: uuid(),
  slug: slugify('HotelNabadiDmanisi'),
  name: 'Hotel Nabadi Dmanisi',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Св. Нино 33 б, 1700 Dmanisi, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217834848.jpg?k=b7f956c061e14cc0d337c1a2b247b08713b294196f1bb2546102273f154a4945&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217835392.jpg?k=80e32a93ea4bde625afe6a51c14a23ad87a45da55e6c667fa677ca229835455e&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217837222.jpg?k=4da5a88a8d6fa095a04803fc6e6c539cd12370906b5659c961c1f08b7d8703cc&o=&hp=1',
  ],
  description: 'მობრძანდით და ისიამოვნეთ ჩვენთან',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Home: Hotel = {
  id: uuid(),
  slug: slugify('Home'),
  name: 'Home',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' 25 martis street #57a',
  imageUrl: [
    'https://georgiantravelguide.com/storage/files/sastumro-poum-7.jpg',
    'https://georgiantravelguide.com/storage/files/sastumro-poum-16.jpg',
    'https://georgiantravelguide.com/storage/files/sastumro-poum-2.jpg',
  ],
  description: 'ეს არის ადგილისადაც ისიამოვნებთ და კარგ დროს გაატარებთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const OrionHotel: Hotel = {
  id: uuid(),
  slug: slugify('OrionHotel'),
  name: 'Orion Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Agmashenebeli Square, 0017 Oni, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/359504773.jpg?k=629c304b74c8f827280393531b775044b50f7e7728d1dea1663544fb354944b5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/303562040.jpg?k=75b905c43c29d4cdc5eec6b06f944fc9a8411ad2996f39658eb7a962bb6872b8&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/359504616.jpg?k=7f33fce94dd06f488d64580f8fb57ff37f72a439d01900b86b582dfd411ccd76&o=&hp=1',
  ],
  description: 'ულამაზესი გარემო ულამაზესი ნომრებით',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const AMBROsador: Hotel = {
  id: uuid(),
  slug: slugify('AMBROsador'),
  name: 'AMBROsador',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'ხვანჭკარის ქუჩა ambrolauri, 0400 Ambrolauri, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/154731975.jpg?k=6393e55dccf1dba3f73b700d58182ab9826951fc3558ad33baabafccd6509557&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/302579826.jpg?k=f4ab10589027aa085da722c4f5db235f52ff09a4c3ca38b252d55f3a9d647610&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/197366064.jpg?k=9c7830bc3ff89ce82fd3ee3bd3d49db3b8746eaf66be11654ce4a88f698047d3&o=&hp=1',
  ],
  description: 'ლამაზი სასტუმრო ლამაზი ხედებით',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const MillenniumRabati: Hotel = {
  id: uuid(),
  slug: slugify('MillenniumRabati'),
  name: 'Millennium Rabati',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Eqvtime Atoneli Street 98, 0800 Akhaltsikhe, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/363631368.jpg?k=401965295a06a0f89d0b38acd8ca0eee133fdd9332603443d5088140b5c0559e&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217014914.jpg?k=d07e5fe142394aa4b613727624da3c932ba8e17cb71c07e94642e0ea65634ed8&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204162169.jpg?k=ee93e1bade0271f99cfe88d9323fc7c8bfe10d2136269ce5f561d0fec42af648&o=&hp=1',
  ],
  description: 'საუკეთესო ადგილი დროის სასიამოვნოდ გასატარებლად',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const cristal: Hotel = {
  id: uuid(),
  slug: slugify(' cristal '),
  name: ' cristal ',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' 15 Erekle II Street, 1200 Borjomi, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/279517636.jpg?k=1fe604e55394329bc3287b2de6c2b03e1a820b74d486b2461aa1768257ed0ad5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/296244650.jpg?k=e71fdb2fc0810d802c4324f02549cd307a91852e67a13617d8f251796761ce3a&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/246776642.jpg?k=87f6de26acdea49749a06daac6a1aeb0b020adc28faf02f458ac3cdb80a284b2&o=&hp=1',
  ],
  description: 'კარგი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const RetroHouse: Hotel = {
  id: uuid(),
  slug: slugify('Retro House'),
  name: 'Retro House',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Medeas Street #15, 2100 Zugdidi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/133542402.jpg?k=aa6044de0cf3471837b1ab3b43fc6f7678dab46fd3c4a09b034ad45bc57a76a5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/100352480.jpg?k=9ecbb8c69daf0d8cf47c7bf14313c2e7d95736274b1f05c3025376de8e0f7460&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/100352482.jpg?k=56adb4cf07801f613582979a90be1a6ef6c98cfeca719270e4c081f03edeb3a1&o=&hp=1',
  ],
  description:
    'თუ გინდათ რომ გაატაროთ დღები სასიამოვნოდ უნდა მობრძანდეთ ჩვენთან',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const ResortMartvili: Hotel = {
  id: uuid(),
  slug: slugify('ResortMartvili'),
  name: 'Resort Martvili',
  rating: Math.round(Math.random() * 2 + 3),
  address:
    ' Martvili. Tavisufleba st. #8 The hotel is the third floor, 3100 Martvili, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161250430.jpg?k=bc13f5c8badcd438897f9835912e466e812d8245c3036be17ba4ba3c39797bc0&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161250446.jpg?k=72fbab7cf626b469846c3901c2bbfd93e8f837ee08266954b706dc528a38a6f1&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/162634549.jpg?k=377bee01b12ec09018fb255a857f96efc395585a3868f745b436cae461f6a303&o=&hp=1',
  ],
  description: 'მოდით და გაატარეთ დაუვიწყარი დღეები ჩვენთან ერთად',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const TomasSakhli: Hotel = {
  id: uuid(),
  slug: slugify('TomasSakhli'),
  name: 'Tomas Sakhli',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Nachkebias 45 ,chkhorowyu  Georgia',
  imageUrl: [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/28/26/e0/tomas-sakhli.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/28/26/df/tomas-sakhli.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/28/26/d9/tomas-sakhli.jpg?w=800&h=-1&s=1',
  ],
  description: 'მყუდრო და თბილი გარემოა',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const DEA: Hotel = {
  id: uuid(),
  slug: slugify('DEA'),
  name: 'DEA',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Tavisufleba 92,tsalenjikha',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/255401022.jpg?k=7fbf1a778de35260ce981828ca8542b9e73d6ab4816ced22cebe64abc5a148f6&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/213517640.jpg?k=dcb89ca421313f47126a66a27289531b42162e30d7c50f17914bae35d7039544&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/213517649.jpg?k=394068d15bca0726be04e343627963060c21790d7285be12f45760c9fdce7e50&o=&hp=1',
  ],
  description: 'ლამაზი ადგილია',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Hestia: Hotel = {
  id: uuid(),
  slug: slugify('Hestia'),
  name: 'Hestia',
  rating: Math.round(Math.random() * 2 + 3),
  address: '24 Ekaterine Jughashvili Street, 1400 Gori, Georgia ',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322835336.jpg?k=d14efcd0aec7248d7a92a9ac0cab06088826978286be6c82a34a9d750c5768e4&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322835395.jpg?k=d221f9db46e6b0d9f339cd3cf7700505668c6732d5ccb430adb325d41186359c&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/323190767.jpg?k=995e885742fa1ffac4a694521ec6afdbe675dc76b1d39ffad4f0ea24872dee98&o=&hp=1',
  ],
  description:
    'თუ გინდათ რომ გაატაროთ დაუვიწყარი დღეები მაშინ ჩვენთან უნდა მობრძანდეთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const KaspiResort: Hotel = {
  id: uuid(),
  slug: slugify('KavtiskheviResort'),
  name: 'Kavtiskhevi Resort',
  rating: Math.round(Math.random() * 2 + 3),
  address: ' Kaspi, 0144 Kaspi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335702241.jpg?k=aa2cea06417321ce39cda136d3135ecbdfb847aaa0bf2c082fcbe30c01bea168&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335702425.jpg?k=23c995e474bec21a1bcb81116ed191b1d85a3ab60b2f1bd73da376ef2b065a77&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335702196.jpg?k=f1f8140ac6f68e684efa7e0222ed3103b17a4bcff3de5aa6174a19c1f61a85b0&o=&hp=1',
  ],
  description: 'შესანიშნავი გარემო, მეგობრული პერსონალი და გემრიელი კერძები',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const HotelNatia: Hotel = {
  id: uuid(),
  slug: slugify('HotelNatia'),
  name: 'Hotel Natia',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'kareli #5,georgia',
  imageUrl: [
    'https://hotel24.ge/jomres/uploadedimages/2292/rooms/4862/a5-guesthouse-natia-kintsvisi.jpg',
    'https://hotel24.ge/jomres/uploadedimages/2292/rooms/4862/a1-guesthouse-natia-kintsvisi.jpg',
    'https://hotel24.ge/jomres/uploadedimages/2292/rooms/4862/a5-guesthouse-natia-kintsvisi.jpg',
  ],
  description: 'კარგი გარემოა, შესანიშნავი პერსონალით',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const IveriaHotel: Hotel = {
  id: uuid(),
  slug: slugify(' IveriaHotel'),
  name: ' Iveria Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Agmashenebeli Street #2, 5700 Khashuri, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/78904813.jpg?k=55e1146d1203ef7822778eccbd93a631bb0d0c33b2a2c64816095d29ed2fadfa&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/121053859.jpg?k=e38688f6a4f9b50f606cc0bfa340894dbced5a95586b50b1d82a11ab1734d880&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/78904805.jpg?k=f6e48885e01f57aca46a554e01684287603bc4fea116e0ead8d568ece7b9c802&o=&hp=1',
  ],
  description: 'ეს არის ადგილი სადაც დაგვდებათ სასიამოვნო გარემო',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const WinterFellMestia: Hotel = {
  id: uuid(),
  slug: slugify('WinterFellMestia'),
  name: 'WinterFell Mestia',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Kakhiani Street 79, 3200 Mestia, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335238959.jpg?k=4b4e8fcb20ef26c2d08fea788476bba69318be92fc38b0ce26538d310b6e584a&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/360955078.jpg?k=09d75877b355e5d4ef47d3b89d1970cd65bfc7ab2ff288459f3842e570605988&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/337446705.jpg?k=58533baf4453842aad2d3b5e48fcbe2a96077e8c52c5519cad4b74a07b6b7173&o=&hp=1',
  ],
  description:
    'ეს არის ადგილი სადაც დაგხვდებათ ძალიან კარგი გარემო ულამაზესი ხედებით,სადაც გაატარებთ დაუვიწყარ დღეებს',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const HotelSvaneti: Hotel = {
  id: uuid(),
  slug: slugify('HotelSvaneti'),
  name: 'Hotel Svaneti',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Tamar Mepis Street #24, 2900 Lentekhi, Georgia',
  imageUrl: [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/192988802.jpg?k=08585219241f4049c12ae32a8deb2e106698edcead8d0fcb2234b72670b61033&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/192989436.jpg?k=335a2c34506541a2089c283e57899a39fbe9450393803a961095bcb6a087b2e3&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/192989458.jpg?k=37e1dd27804709a6268d72dc581987dcef581d358e162808b8f24e4da09f2b7c&o=&hp=1',
  ],
  description: 'მეგობრული პერსონალი,ულამაზესი ნომრები,ულამაზესი გარემო ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const RustaviHotel: Hotel = {
  id: uuid(),
  slug: slugify('RustaviHotel'),
  name: 'Rustavi Hotel',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'Prospect Leon 2,Gali, Georgia',
  imageUrl: [
    'https://georgiantravelguide.com/storage/thumbnails/e329884e-88cb-4390-8d86-cf3f5320.jpeg',
    'https://georgiantravelguide.com/storage/files/dupleks-apartamenti-bakurianshi-1.jpeg',
    'https://georgiantravelguide.com/storage/files/dupleks-apartamenti-bakurianshi-3.jpg',
  ],
  description: 'საუკეთესო გარემო',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const Laerton: Hotel = {
  id: uuid(),
  slug: slugify(' Laerton'),
  name: ' Laerton',
  rating: Math.round(Math.random() * 2 + 3),
  address: '14 Iliko Kurkhuli street, Tbilisi City Center, Tbilisi, Georgia',
  imageUrl: [
    'https://pix8.agoda.net/hotelImages/889/889419/889419_17051518140052999199.jpg?ca=13&ce=1&s=1024x',
    'https://pix8.agoda.net/hotelImages/889/889419/889419_17051518510052999859.jpg?ca=6&ce=1&s=1024x',
    'https://pix8.agoda.net/hotelImages/889/889419/889419_17051518510052999858.jpg?ca=6&ce=1&s=1024x',
  ],
  description:
    'მშვენივრად დაიწყებთ თქვენი მოგზაურობა ამ სასტუმროში ყოფნით, რომელიც გთავაზობთ უფასო Wi-Fi-ს ყველა ოთახში. სასტუმრო მდებარეობს თბილისის ცენტრში',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const AIVANI: Hotel = {
  id: uuid(),
  slug: slugify('AIVANI'),
  name: ' AIVANI HOTEL',
  rating: Math.round(Math.random() * 2 + 3),
  address: 'თბილისი, სამღებროს 21',
  imageUrl: [
    'https://cdn.swoop.ge/ImagesStorage/27b102da-31ab-449a-9556-c5fb72411557.jpg',
    'https://cdn.swoop.ge/ImagesStorage/62782c02-513e-4e74-8f24-a2961affe4e1.jpg',
    'https://cdn.swoop.ge/ImagesStorage/e548e7a5-bb09-4af6-9af9-0fc31ef943df.jpg',
  ],
  description:
    'მშვენივრად დაიწყებთ თქვენი მოგზაურობა ამ სასტუმროში ყოფნით, რომელიც გთავაზობთ უფასო Wi-Fi-ს ყველა ოთახში. სასტუმრო მდებარეობს თბილისის ცენტრში',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const Danaeva: Hotel = {
  id: uuid(),
  slug: slugify('Danaeva'),
  name: 'Danaeva',
  rating: Math.round(Math.random() * 2 + 3),
  address: '300 არაგველის 1, დოლაბაურის 58',
  imageUrl: [
    'https://cdn.swoop.ge/ImagesStorage/0017e6cb-22ea-4918-9304-f824a1b79208.jpg',
    'https://cdn.swoop.ge/ImagesStorage/69035fb6-67b7-4cd4-b5b4-c572ae1c7168.jpg',
    'https://cdn.swoop.ge/ImagesStorage/671915fc-1fed-4606-afdd-ceee269313ec.jpg',
  ],
  description:
    'თუ გინდათ რომ გაატაროთ დაუვიწყარი დღეები მაშინ ჩვენთან უნდა მობრძანდეთ',
  price: Math.floor(Math.random() * 81 + 20),
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const hotels: Hotel[] = [
  Danaeva
  RustaviHotel,
  ChateauKvirike,
  AmbassadoriGoderdziHotel,
  AjaraGlampingKokotauri,
  Kejeradzeebi,
  Orbicityseaview,
  Leon,
  AleksandriA,
  BoutiqueHotelAnana,
  EcoPapaHotel,
  Abaata,
  RitsaHotel,
  MenabdeWinery,
  Hotelpagio,
  GuesthouseZedafoni,
  mtredebi,
  HappyStayHotel,
  HotelImereti,
  TskaltuboPlazaHotel,
  Makratela,
  ArtVillaKotekhi,
  Talaveri,
  Favourite,
  KvareliLakeResort,
  NaBaDa,
  Pompeius,
  VeronaApartment,
  BolnisiPrimeHouse,
  HotelNabadiDmanisi,
  Home,
  OrionHotel,
  AMBROsador,
  MillenniumRabati,
  cristal,
  RetroHouse,
  ResortMartvili,
  TomasSakhli,
  DEA,
  Hestia,
  KaspiResort,
  HotelNatia,
  IveriaHotel,
  WinterFellMestia,
  HotelSvaneti,
];
