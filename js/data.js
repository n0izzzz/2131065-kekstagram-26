//import {getRandomNumber, getRandomItem} from'./tools';
import './tools.js';



const PHOTO_DESCRIPTIONS = [
  'Несобственно-прямая речь нивелирует глубокий диалогический контекст.',
  'Поток сознания, согласно традиционным представлениям, отталкивает деструктивный метаязык.',
  'Силлабика отталкивает резкий диалектический характер.',
  'Вопрос о популярности произведений того или иного автора относится к сфере культурологии, однако первое полустишие непосредственно притягивает символ.',
  'Возможно, что сходство Гугона и Микулы объясняется родством бродячих мотивов, однако быличка представляет собой резкий амфибрахий.',
  'Прекрасное изящно аккумулирует элитарный онтогенез.',
  'Богатство мировой литературы от Платона до Ортеги-и-Гассета свидетельствует о том, что эзотерическое многопланово.',
  'Теория вчувствования диссонирует анимус.',
  'Монтаж, в первом приближении, образует гений.',
  'Синхронический подход трансформирует миракль, именно об этом комплексе движущих сил писал З.Фрейд в теории сублимации.',
  'Природа эстетического начинает модернизм.',
  'Согласно теории "вчувствования", разработанной Теодором Липпсом, бессознательное фактурно.',
  'Миракль диссонирует анимус, так Г.Корф формулирует собственную антитезу.',
  'Беспристрастный анализ любого творческого акта показывает, что художественная видимость вызывает канон биографии.',
  'Эротическое дает эйдос.',
];
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Суждение понимает под собой дедуктивный метод.',
  'Гегельянство преобразует гений. Катарсис, конечно, амбивалентно рефлектирует мир.',
  'Катарсис индуцирует катарсис, хотя в официозе принято обратное.',
  'Гештальтпсихология амбивалентно заполняет здравый смысл.',
  'Наряду с этим искусство естественно представляет собой примитивный язык образов, изменяя привычную реальность.',
  'Герменевтика осмысленно понимает под собой позитивизм.',
  'Дуализм, как следует из вышесказанного, не так уж очевиден.',
  'Жизнь, следовательно, подрывает здравый смысл.',
];

const COMMENTORS_NAMES = [
  'Мирон Аникин',
  'Родион Бондарев',
  'Варвара Быкова',
  'Светлана Власова',
  'Ева Воронцова',
  'Яна Ефимова',
  'Никита Журавлев',
  'Матвей Зуев',
  'Роман Киселев',
  'Ева Ковалева',
  'Артём Кузьмин',
  'Степан Макаров',
  'Екатерина Никитина',
  'Артём Новиков',
  'Маргарита Новикова',
  'Захар Петров',
  'Милана Прохорова',
  'Екатерина Савина',
  'Кирилл Сахаров',
  'Дмитрий Семенов',
  'Макар Смирнов',
  'Таисия Сорокина',
  'София Тарасова',
  'Максим Федосеев',
  'Мария Фомина',
  'Екатерина Черняева',
];

const PHOTO_DATA_COUNT = 25;


const photoDataComment  = () => ({
  id: 1,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomItem(COMMENT_MESSAGES, COMMENT_MESSAGES.length - 1),
  name: getRandomItem(COMMENTORS_NAMES, COMMENTORS_NAMES.length - 1),
});
const photoData = () => ({
  id: 1,
  url: '',
  description: getRandomItem(PHOTO_DESCRIPTIONS, PHOTO_DESCRIPTIONS.length - 1),
  likes: getRandomNumber(15, 200),
  comments: Array.from ({length: getRandomNumber(0, 4)}, photoDataComment),
});

const photoDataObjects = Array.from ({length: PHOTO_DATA_COUNT}, photoData);

pushId();

function pushId() {
  for (let i = 0; i < photoDataObjects.length; i++) {
    photoDataObjects[i].id = i + 1;
    photoDataObjects[i].url =`photos/${  i + 1  }.jpg`;
    for (let j = 0; j < photoDataObjects[i].comments.length; j++) {
      photoDataObjects[i].comments[j].id = j + 1;
    }
  }
}
