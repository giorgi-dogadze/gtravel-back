// import { Dish } from 'src/core/types';
// import { slugify } from 'src/core/utils';
// import { v4 as uuid } from 'uuid';
// import { formatISO } from 'date-fns';

// export const imeruliKhachapuriId = uuid();
// export const imeruliLobianiId = uuid();

// export const imeruliKhachapuri: Dish = {
//   id: uuid(),
//   slug: slugify('imeruli khachapuri'),
//   name: 'imeruli khachapuri',
//   composition: 'იმერული ყველი და ცომი',
//   createdAt: formatISO(new Date()),
//   updatedAt: formatISO(new Date()),
// };

// export const imeruliLobiani: Dish = {
//   id: uuid(),
//   slug: slugify('imeruli lobiani'),
//   name: 'imeruli lobiani',
//   composition: 'იმერული ლობიო და ცომი',
//   createdAt: formatISO(new Date()),
//   updatedAt: formatISO(new Date()),
// };

// export const dishes: Dish[] = [imeruliKhachapuri, imeruliLobiani];

import { Dish } from 'src/core/types';
import { slugify } from 'src/core/utils';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';

export const imeruliKhachapuriId = uuid();
export const imeruliLobianiId = uuid();

export const imeruliKhachapuri: Dish = {
  id: uuid(),
  slug: slugify('იმერული ხაჭაპური'),
  name: 'imeruli khachapuri',
  composition: 'იმერული ყველი და ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const imeruliLobiani: Dish = {
  id: uuid(),
  slug: slugify('imeruli lobiani'),
  name: 'იმერული ლობიანი',
  composition: 'იმერული ლობიო და ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const mesxuriKada: Dish = {
  id: uuid(),
  slug: slugify('mesxuri Kada'),
  name: 'მესხური ქადა',
  composition:
    'შაქარი\n' +
    'მწიკვი მარილი\n' +
    'ღორის ქონი\n' +
    'ფქვილი\n' +
    'გულსართისთვის:\n' +
    'მწიკვი მარილი\n' +
    'წყალი\n' +
    'ფქვილი\n' +
    'ღორის ქონი\n' +
    'ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const tutmaji: Dish = {
  id: uuid(),
  slug: slugify('tutmaji'),
  name: 'თუთმაჯი',
  composition:
    'ცხიმი შესაწვავად\n' +
    'მაწონი - 1.00 ლ\n' +
    'მარილი\n' +
    'წყალი\n' +
    'ფქვილი - 1.00 კგ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kuchamchi: Dish = {
  id: uuid(),
  slug: slugify('kuchamchi'),
  name: 'კუჭმაჭი',
  composition:
    'ნიგოზი\n' +
    'ღორის გულ-ღვიძლი\n' +
    'ხახვი\n' +
    'ნიორი\n' +
    'ბროწეული\n' +
    'უცხო სუნელი\n' +
    'ქინძი\n' +
    'ხმელი ქინძი\n' +
    'ხმელი ქონდარი\n' +
    'ყვითელი ყვავილი\n' +
    'მარილი და წიწაკა\n' +
    'ძმარი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const sacivpomidori: Dish = {
  id: uuid(),
  slug: slugify('saciv-pomidori'),
  name: 'საცივ-პომიდორი',
  composition:
    '1 ცალი ინდაური\n' +
    '800-1000 გრ ნიგოზი\n' +
    '6-7 თავი ხახვი\n' +
    '6-8 კბილი ნიორი\n' +
    '1 ჩაის კოვზი ყვითელი ყვავილი\n' +
    '1 ჩაის კოვზი წითელი წიწაკა\n' +
    '1 ჩაის კოვზი ხმელი ქინძი,უცხო სუნელი, ხარჩოს სუნელი.\n' +
    '1 ჩაის კოვზი დარიჩინი\n' +
    '1/2 ჩაის კოვზი მიხაკი\n' +
    'მარილი გემოვნებით\n' +
    '1 ცალი ლიმონი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kejaraFkhali: Dish = {
  id: uuid(),
  slug: slugify('kejaraFkhali'),
  name: 'კაჯარა ფხალი',
  composition:
    'მარილი და წიწაკა გემოვნებით\n' +
    'პიტნა - 1.00 კოვზი\n' +
    'ხმელი ქონდარი - 1.00 კოვზი\n' +
    'მარგარინი ან ზეთი\n' +
    'ტომატი - 2.00 სკ\n' +
    'ბრინჯი - 1.00 ჭიქა\n' +
    'ნიორი - 4.00 კბილი\n' +
    'სტაფილო - 3.00 ცალი\n' +
    'მწვანე ხახვი - 1.00 კონა\n' +
    'ხახვი - 1.00 თავი\n' +
    'პრასი - 1.00 კონა\n' +
    'კონა, ოხრახუში და ქინძი - 1.00 კონა',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const elarji: Dish = {
  id: uuid(),
  slug: slugify('elarji'),
  name: 'ელარჯი',
  composition:
    'მარილი\n' +
    'მჭადის ფქვილი ან მანანის ბურღული\n' +
    'სულგუნი - 600.00 გ\n' +
    'ღერღილი - 200.00 გ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const megruliKhachapuri: Dish = {
  id: uuid(),
  slug: slugify('megruliKhachapuri'),
  name: 'მეგრული ხაჭაპური',
  composition:
    'კვერცხის გული\n' +
    'ყველი\n' +
    'ფქვილი\n' +
    'საფუარი - 1.00 ჩკ\n' +
    'ზეთი - 30.00 მლ\n' +
    'შაქარი - 1.00 ჩკ\n' +
    'მარილი - 1.00 ჩკ\n' +
    'თბილი წყალი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kupati: Dish = {
  id: uuid(),
  slug: slugify('kupati'),
  name: 'კუპატი',
  composition:
    'უცხო სუნელი - 2.00 ჩ/კ\n' +
    'ხმელი ქონდარი - 2.00 ჩ/კ\n' +
    'მარილი\n' +
    'კოწახური\n' +
    'პილპილი\n' +
    'ნაწლავი\n' +
    'ხახვი\n' +
    'ძროხის ან ღორის ხორცი ( ან მათი ნარევი) - 4.00 კგ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const kaklisMuraba: Dish = {
  id: uuid(),
  slug: slugify('kaklisMuraba'),
  name: 'კაკლის მურაბა',
  composition:
    'შაბი - 1.00 ს/კ\n' +
    'კირი - 500.00 გ\n' +
    'შაქარი - 2.00 კგ 1 ჩ/ჭ\n' +
    'კაკალი - 100.00 ცალი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const borano: Dish = {
  id: uuid(),
  slug: slugify('borano'),
  name: 'ბორანო',
  composition:
    'ველი (ჩეჩილი, ე.წ. "დაპწნილი ყველი") 500გრ.\n' +
    ' იაღი (მარილიანი კარაქი) 250გრ.',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const acharuliKhachapuri: Dish = {
  id: uuid(),
  slug: slugify('acharuliKhachapuri'),
  name: 'აჭარული ხაჭაპური',
  composition:
    'გულსართი\n' +
    '\n' +
    'წყალი\n' +
    'არაჟანი - 1.00 სკ\n' +
    'სულგუნი ან სხვა რბილი ყველი - 600.00 გ\n' +
    'ცომი\n' +
    '\n' +
    'თბილი წყალი - 230.00 მლ\n' +
    'მშრალი საფუარი - 15.00 გ\n' +
    'მარილი - 2.00 ჩკ\n' +
    'შაქარი - 1.00 ჩკ\n' +
    'კვერცხი - 1.00 ც\n' +
    'ფქვილი - 450.00 გ\n',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const baklava: Dish = {
  id: uuid(),
  slug: slugify('baklava'),
  name: 'ბაკლავა',
  composition:
    'ინგრედიენტები\n' +
    '\n' +
    'ფქვილი\n' +
    'გამდნარი კარაქი - 100.00 გრ\n' +
    'მწიკვი მარილი\n' +
    'თბილი წყალი - 3.00 ჭიქა\n' +
    'კვერცხი - 5.00 ცალი\n' +
    'ინგრედიენტები გულსართისთვის\n' +
    '\n' +
    'კარაქი - 700.00 გრ\n' +
    'თხილი - 200.00 გრ\n' +
    'ნიგოზი - 300.00 გრ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const abista: Dish = {
  id: uuid(),
  slug: slugify('abista'),
  name: 'აბისტა',
  composition: 'წყალი\n' + 'სიმინდის ფქვილი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const afkhazura: Dish = {
  id: uuid(),
  slug: slugify('afxazura'),
  name: 'აფხაზურა',
  composition:
    'კამა\n' +
    'ოხრახუში\n' +
    'ხორცი\n' +
    'ბადე ქონი\n' +
    'ხახვი\n' +
    'კოწახურის მარცვლები\n' +
    'მარილი\n' +
    'წითელი წიწაკა, დაფქული\n' +
    'ქინძი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const mamaliga: Dish = {
  id: uuid(),
  slug: slugify('mamaliga'),
  name: 'მამალიგა',
  composition:
    'კარაქი\n' + 'სიმინდის ფქვილი ან ღერღილი\n' + 'წყალი\n' + 'სულგუნი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const kubdari: Dish = {
  id: uuid(),
  slug: slugify('kubdari'),
  name: 'კუბდარი',
  composition:
    'სამარხვო ერბო - 2.00 ჩკ\n' +
    'კამა\n' +
    'სვანური მარილი\n' +
    'ყვითელი ყვავილი\n' +
    'უცხო სუნელი\n' +
    'ძირა\n' +
    'ხახვი - 1.00 ცალი\n' +
    'სოკო - 5.00 ცალი\n' +
    'საფუარიანი ცომი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const chvishtari: Dish = {
  id: uuid(),
  slug: slugify('chvishtari'),
  name: 'ჭვიშტარი',
  composition:
    'რძე ან წყალი - 230.00 მლ\n' +
    'მარილი - 1.00 ჩ/კ\n' +
    'კარაქი - 50.00 გ\n' +
    'სიმინდის ფქვილი - 400.00 გ\n' +
    'ზეთი - 200.00 მლ\n' +
    'შაქარი - 1.00 ჩ/კ\n' +
    'კვერცხი - 1.00 ცალი\n' +
    'სულგუნი - 200.00 გ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const qalakoda: Dish = {
  id: uuid(),
  slug: slugify('qalakoda'),
  name: 'ქალაკოდა',
  composition: 'ფხალი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const machyvinara: Dish = {
  id: uuid(),
  slug: slugify('machyvinara'),
  name: 'მაჩყვინარა',
  composition: 'სოკო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const mchadi: Dish = {
  id: uuid(),
  slug: slugify('mchadi'),
  name: 'მჭადი',
  composition:
    'სიმინდის ფქვილი - 500 გრ\n' + 'წყალი\n' + 'სულგუნი - 250 გრ\n' + 'ზეთი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const lobio: Dish = {
  id: uuid(),
  slug: slugify('lobio'),
  name: 'ლობიო',
  composition:
    'ბრინჯი - 1 ჭ\n' +
    'წყალი - 2 ჭ\n' +
    'წითელი ლობიო - 300 გრ\n' +
    'წითელი ბულგარული წიწაკა - 1 ც\n' +
    'ახალი ნიორი - 1 ღერი\n' +
    'ხმელი რეჰანი - 1 ჩ.კ.\n' +
    'ხახვი - 1 თავი\n' +
    'პაპრიკა - 1 ს.კ.\n' +
    'მარილი\n' +
    'წიწაკა\n' +
    'ზეთი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const mtsvadi: Dish = {
  id: uuid(),
  slug: slugify('mtsvadi'),
  name: 'მწვადი',
  composition:
    'ლიმონი\n' +
    'ნიორი\n' +
    'კახური ზეთი\n' +
    'დიჟონის მდოგვი\n' +
    'ოხრახუში\n' +
    'ქინძი\n' +
    'კარამელიზირებული ყურძენი\n' +
    '\n' +
    'ყურძენი\n' +
    'დაღერღილი წიწაკა\n' +
    'შაქარი\n' +
    'ღვინო\n' +
    'მწვადი\n' +
    '\n' +
    'მარილი\n' +
    'ღორის ხორცი\n' +
    'სალათა\n' +
    '\n' +
    'რეჰანი - 15.00 გ\n' +
    'გუდა - 15.00 გ\n' +
    'კიტრი - 1.00 ც\n' +
    'პამიდორი - 1.00 ც',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const ghandzili: Dish = {
  id: uuid(),
  slug: slugify('ghandzili'),
  name: 'ღანძილი',
  composition: 'ქინძი\n' + 'მარილი\n' + 'კახური ზეთი\n' + 'ღანძილი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const khinkali: Dish = {
  id: uuid(),
  slug: slugify('khinkali'),
  name: 'ხინკალი',
  composition:
    'შიგთავსი\n' +
    '\n' +
    'მარილი - 1.00 სკ\n' +
    'წყალი\n' +
    'ძირა\n' +
    'წითელი წიწაკა\n' +
    'ხახვი\n' +
    'ხორცი - 1.00 კგ (500 გრამი საქონლის, 500 - ღორის)\n' +
    'ცომი 1კგ ფქვილი\n' +
    '\n' +
    'მარილი - 1.00 სკ\n' +
    'წყალი\n' +
    'ფქვილი - 1.00 კგ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const ghurchumeli: Dish = {
  id: uuid(),
  slug: slugify('ghurchumeli'),
  name: 'ღურჩმელი',
  composition: 'ცომი და ხორცი',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const chakafuli: Dish = {
  id: uuid(),
  slug: slugify('chakafuli'),
  name: 'ჩაქაფული',
  composition:
    'ხბოს ხორცი - 2 კგ\n' +
    'მწვანე ხახვი - 3 კონა\n' +
    'ხახვი - 2 თავი\n' +
    'ტარხუნა - 7 კონა\n' +
    'მჟაუნა - 1 კონა\n' +
    'წიწმატი - 3 კონა\n' +
    'ქინძი - 4 კონა\n' +
    'ახალი ტყემალი - 2 ჭიქა\n' +
    'დუმა - 200 გ\n' +
    'ახალი ნიორი - 2 ც\n' +
    'მარილი და პილპილი\n' +
    'თეთრი მშრალი ღვინო',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const chikhirtma: Dish = {
  id: uuid(),
  slug: slugify('chikhirtma'),
  name: 'ჩიხირთმა',
  composition:
    'ქინძი\n' +
    'ნიორი\n' +
    'ფქვილი - 2.00 სკ\n' +
    'კვერცხი - 3.00 ცალი\n' +
    'ძმარი\n' +
    'ხახვი - 2.00 ცალი\n' +
    'მარილი\n' +
    'სოფლის ქათამი - 1.50 კგ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const nazuqi: Dish = {
  id: uuid(),
  slug: slugify('nazuqi'),
  name: 'სახელი',
  composition:
    'საფუარი - 3.00 სკ\n' +
    'ფქვილი - 5.00 კგ (შეიძლება უფრო ცოტა დაგჭირდეთ)\n' +
    'ქიშმიში - 200.00 გ\n' +
    'ვანილი - 2.00 პ\n' +
    'ზეთი - 200.00 გ\n' +
    'კარაქი - 1.00 პ\n' +
    'მარგარინი - 2.00 პ\n' +
    'შაქარი - 1.00 კგ\n' +
    'კვერცხი - 10.00 ც\n' +
    'რძე - 1.00 ლ',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};
export const tylapi: Dish = {
  id: uuid(),
  slug: slugify('tylapi'),
  name: 'ტყლაპი',
  composition: 'წყალი\n' + 'ტყემალი\n',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const nadugipitnit: Dish = {
  id: uuid(),
  slug: slugify('nadugipitnit'),
  name: 'ნადუღი პიტნით',
  composition: 'ნადუღი და პიტნა',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date()),
};

export const dishes: Dish[] = [
  imeruliKhachapuri,
  imeruliLobiani,
  mesxuriKada,
  tutmaji,
  kuchamchi,
  sacivpomidori,
  kejaraFkhali,
  elarji,
  megruliKhachapuri,
  kupati,
  kaklisMuraba,
  borano,
  acharuliKhachapuri,
  baklava,
  abista,
  mamaliga,
  kubdari,
  chvishtari,
  qalakoda,
  machyvinara,
  mchadi,
  lobio,
  afkhazura,
  mtsvadi,
  ghandzili,
  khinkali,
  ghurchumeli,
  chakafuli,
  nazuqi,
  tylapi,
  nadugipitnit,
];
