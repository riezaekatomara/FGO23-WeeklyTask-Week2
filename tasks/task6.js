import fs from "fs";
import readline from "readline";
import path from "path";
import consola from "consola";

// Membuat interface readline untuk input user
// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout,
// });

// Direktori untuk menyimpan file
const STORAGE_DIR = "storage";

// Memastikan direktori storage ada
// if (!fs.existsSync(STORAGE_DIR)) {
//   fs.mkdirSync(STORAGE_DIR);
// }

// Fungsi untuk menampilkan menu
export const show = function show() {
  console.log("\n=== File Manager ===");
  console.log("1. Lihat semua file");
  console.log("2. Tambah file baru");
  console.log("3. Hapus file");
  console.log("4. Keluar");
  // rl.question("\nPilih menu (1-4): ", handleMenuChoice);
};

// Fungsi untuk menangani pilihan menu
export const handleMenuChoice = function handleMenuChoice(choice) {
  switch (choice) {
    case "1":
      listFiles();
      break;
    case "2":
      addNewFile();
      break;
    case "3":
      deleteFile();
      break;
    case "4":
      consola.success("Terima kasih telah menggunakan File Manager!");
      rl.close();
      return;
    default:
      consola.error("Pilihan tidak valid!");
      show();
      break;
  }
};

// Fungsi untuk menampilkan semua file
export const listFiles = function listFiles() {
  fs.readdir(STORAGE_DIR, (err, files) => {
    if (err) {
      consola.error("Gagal membaca direktori:", err);
      return show();
    }

    if (files.length === 0) {
      consola.info("Direktori kosong");
    } else {
      consola.info("\nDaftar File:");
      files.forEach((file, index) => {
        const stats = fs.statSync(path.join(STORAGE_DIR, file));
        console.log(
          `${index + 1}. ${file} (${(stats.size / 1024).toFixed(2)} KB)`
        );
      });
    }
    show();
  });
};

// Fungsi untuk menambah file baru
export const addNewFile = function addNewFile() {
  rl.question("Masukkan nama file: ", (fileName) => {
    rl.question("Masukkan isi file: ", (content) => {
      const filePath = path.join(STORAGE_DIR, fileName);

      fs.writeFile(filePath, content, (err) => {
        if (err) {
          consola.error("Gagal menyimpan file:", err);
        } else {
          consola.success("File berhasil disimpan!");
        }
        show();
      });
    });
  });
};

// Fungsi untuk menghapus file
export const deleteFile = function deleteFile() {
  fs.readdir(STORAGE_DIR, (err, files) => {
    if (err) {
      consola.error("Gagal membaca direktori:", err);
      return show();
    }

    if (files.length === 0) {
      consola.info("Tidak ada file yang bisa dihapus");
      return show();
    }

    consola.info("\nDaftar File:");
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });

    rl.question("\nPilih nomor file yang akan dihapus: ", (choice) => {
      const index = parseInt(choice) - 1;
      if (index >= 0 && index < files.length) {
        const filePath = path.join(STORAGE_DIR, files[index]);

        fs.unlink(filePath, (err) => {
          if (err) {
            consola.error("Gagal menghapus file:", err);
          } else {
            consola.success("File berhasil dihapus!");
          }
          show();
        });
      } else {
        consola.error("Nomor file tidak valid!");
        show();
      }
    });
  });
};

// consola.start("Selamat datang di File Manager!"); // ditampilkan di index.js
// show();
