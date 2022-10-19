function getRandom (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (max < min) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkLength (text, maxLength) {
  if (text.length <= maxLength) {
    return true;
  }
  return false;
}

getRandom(10, 20);
checkLength('ldghjf', 5);
