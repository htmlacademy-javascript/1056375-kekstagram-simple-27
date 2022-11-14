// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.

const DESCRIPTION = [
  'Красиво',
  'Прекрасно',
  'Отдых',
  'Работа',
  'Весело',
  'Грустно',
  'Радостно',
  'Печально',
  'Тихо',
  'Спокойно',
  'Неспокойно',
  'Наслаждение',
  'Ветрено',
  'Холодно',
  'Тепло',
  'Жарко',
  'Кайфуем',
  'Расслабляемся',
  'Не напрягаемся',
  'Свобода',
  'Солнечно',
  'Захватывающе',
  'Непередаваемые ощущения',
  'Никогда такого не видел',
  'Отличный вид'
];

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const createPhotoInfo = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(1, DESCRIPTION.length)],
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const similarPhotoInfo = Array.from({length: 25}, createPhotoInfo);

console.log(similarPhotoInfo);

