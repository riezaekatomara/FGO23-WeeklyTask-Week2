// Simulasi fungsi untuk mengambil data dari server
export const getDataFromServer = function getDataFromServer(cb) {
  console.log("Memulai pengambilan data...");
  setTimeout(() => {
    // Simulasi data dari server
    const data = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };

    // Simulasi random error (30% chance)
    const hasError = Math.random() < 0.3;

    if (hasError) {
      cb(new Error("Gagal mengambil data dari server"), null);
    } else {
      cb(null, data);
    }
  }, 2000);
};

// Callback function untuk memproses data
export const processData = function processData(error, data) {
  try {
    // Periksa apakah ada error
    if (error) {
      throw error;
    }

    // Jika tidak ada error, proses data
    console.log("Data berhasil diambil:");
    console.log("ID:", data.id);
    console.log("Nama:", data.name);
    console.log("Email:", data.email);
  } catch (err) {
    console.error("Terjadi kesalahan:", err.message);
  }
};

// console.log("Memulai pengambilan data..."); // ditampikan di index.js
// getDataFromServer(processData);
