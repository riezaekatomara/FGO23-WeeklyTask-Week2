/* Promise adalah objek yang merepresentasikan keberhasilan/kegagalan dari
operasi asynchronous. Memiliki 3 state: pending, fulfilled, rejected **/

// Implementasi fungsi fetchData yang mengembalikan Promise
export const fetchData = function fetchData() {
  // console.log("Mulai fetch dengan then-catch...");
  return new Promise((resolve, reject) => {
    // Simulasi request dengan setTimeout
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance success/fail
      if (success) {
        resolve("Data berhasil diambil");
      } else {
        reject("Gagal mengambil data");
      }
    }, 3000);
  });
};

// 1. Implementasi dengan .then() dan .catch()
// .then() digunakan untuk menangani hasil sukses (resolved)
// .catch() digunakan untuk menangani error (rejected)
// console.log("Mulai fetch dengan then-catch..."); // ditampilkan di index.js
// fetchData()
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Selesai fetch dengan then-catch");
//   });

// 2. Implementasi dengan async/await dan try-catch
// async/await adalah syntax sugar (syntax yang memudahkan) untuk menangani Promise
// membuat kode asynchronous terlihat seperti synchronous
// try-catch digunakan untuk menangani error dalam async/await
export const fetchDataAsync = async function fetchDataAsync() {
  console.log("Mulai fetch dengan async/await...");
  try {
    const result = await fetchData(); // await menunggu Promise selesai
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
};
