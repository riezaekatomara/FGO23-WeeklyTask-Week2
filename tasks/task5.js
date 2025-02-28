export const divideAndSort = function divideAndSort(num) {
  console.log(
    Number(
      String(num)
        .split("0") // Memisah angka berdasarkan 0
        .map(
          (segment) =>
            segment
              .split("") // Memisah setiap digit
              .sort() // Mengurutkan digit
              .join("") // Menggabungkan digit yang sudah diurutkan
        )
        .join("") // Menggabungkan semua segment
    )
  );
};

// console.log(divideAndSort(5956560159466056)); // ditampilkan di index.js
// console.log(divideAndSort(1201230));
