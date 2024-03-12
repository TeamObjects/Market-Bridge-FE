const splitAddress = (address: string) => {
  const metropolitanCities = [
    '서울',
    '인천',
    '대전',
    '대구',
    '광주',
    '부산',
    '울산',
  ];
  let city = '';
  let afterCity = '';

  const firstWord = address.split(' ')[0];

  if (metropolitanCities.includes(firstWord)) {
    city = firstWord;
    afterCity = address.slice(city.length).trim();
  } else {
    const cityRegex = /^(.*[시도])(.*)$/;
    const cityMatch = address.match(cityRegex);
    if (cityMatch) {
      city = cityMatch[1].trim();
      afterCity = cityMatch[2].trim();
    }
  }

  const streetDetailRegex = /(.*[로길])\s*(\d+)\s*(.*)/;
  const streetDetailMatch = afterCity.match(streetDetailRegex);
  let street = '';
  let detail = '';

  if (streetDetailMatch) {
    street = `${streetDetailMatch[1].trim()} ${streetDetailMatch[2].trim()}`;
    detail = streetDetailMatch[3].trim();
  } else {
    detail = afterCity;
  }

  return { city, street, detail };
};

export default splitAddress;
