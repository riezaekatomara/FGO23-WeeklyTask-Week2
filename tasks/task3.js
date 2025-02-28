// Fungsi untuk mengambil dan memproses data users
export const getUserData = async function getUsersData() {
  try {
    // Mengambil data dari API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Cek apakah response OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Response JSON
    const users = await response.json();

    // Transform data: ambil hanya nama dan domisili (city)
    const transformData = users.map((user) => ({
      nama: user.name,
      domisili: user.address.city,
    }));

    // Urutkan berdasarkan domisili (ascending)
    const sortData = transformData.sort((a, b) =>
      a.domisili.localeCompare(b.domisili)
    );

    // Tampilkan hasil
    console.log("Data users yang telah diurutkan berdasarkan domisili:");
    console.log(sortData);

    return sortData;
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    throw error;
  }
};

// getUserData(); // ditampilkan di index.js
