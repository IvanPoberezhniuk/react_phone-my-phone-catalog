const URL = 'https://mate-academy.github.io';

export const fetchPhones = () =>
  fetch(`${URL}/phone-catalogue-static/api/phones.json`).then(res =>
    res.json()
  );
