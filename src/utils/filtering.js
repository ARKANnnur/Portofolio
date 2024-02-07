export function filteringNumber(num, className) {
  // Membuat array yang berisi string 'omg', 'oi', dan 'p'
  var array = className;
  // Menghitung indeks array yang sesuai dengan angka
  var indeks = (num - 1) % array.length;
  // Mengembalikan string yang ada di array dengan indeks tersebut
  return array[indeks];
}

export const filePath = (path, num) => `url('${path}${num}.jpg')`;
