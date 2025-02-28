export const cekPalindrom = function cekPalindrom(text) {
  //Membalik string dan membandingkan dengan string asli
  console.log(
    text === text.split("").reverse().join("") ? "Palindrom" : "Bukan Palindrom"
  );
};

export const reverseWords = function reverseWords(sentence) {
  // Memisah kalimat jadi array, membalik urutan, dan menggabungkannya kembali
  console.log(sentence.split(" ").reverse().join(" "));
};
