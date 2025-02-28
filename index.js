import fs from "fs";
import readline from "readline";
import path from "path";
import { fileURLToPath } from "url";
import consola from "consola";
import { fetchDataAsync } from "./tasks/task1.js";
import { getDataFromServer, processData } from "./tasks/task2.js";
import { getUserData } from "./tasks/task3.js";
import { cekPalindrom, reverseWords } from "./tasks/task4.js";
import { divideAndSort } from "./tasks/task5.js";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function showMenu() {
  console.log("Pilihan soal");
  console.log("1. Task 1");
  console.log("2. Task 2");
  console.log("3. Task 3");
  console.log("4. Task 4");
  console.log("5. Task 5");
  console.log("6. Task 6");
}

function main() {
  showMenu();
  rl.question("Pilih soal yang mana?", (choice) => {
    switch (choice) {
      case "1":
        fetchDataAsync();
        break;
      case "2":
        getDataFromServer(processData);
        break;
      case "3":
        getUserData();
        break;
      case "4":
        cekPalindrom("malam");
        cekPalindrom("hello");
        reverseWords("Saya Belajar Javascript");
        break;
      case "5":
        divideAndSort(5956560159466056);
        divideAndSort(1201230);
        break;
      case "6":
        // Buat interface readline
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        // Folder untuk menyimpan file
        // const __filename = fileURLToPath(import.meta.url);
        // const __dirname = path.dirname(__filename);
        // const DATA_DIR = path.join(__dirname, "data");

        // Pastikan folder data ada
        // if (!fs.existsSync(DATA_DIR)) {
        //   fs.mkdirSync(DATA_DIR);
        // }
        //
        // Fungsi untuk menampilkan menu
        function showMenu2() {
          consola.info("\n=== File Manager ===");
          console.log("1. Lihat semua file");
          console.log("2. Tambah file baru");
          console.log("3. Hapus file");
          console.log("4. Keluar");
          rl.question("\nPilih menu (1-4): ", handleMenu);
        }
        1;

        // Handle pilihan menu
        function handleMenu(choice) {
          switch (choice) {
            case "1" || "11":
              listFiles();
              break;
            case "2" || "22":
              addFile();
              break;
            case "3" || "33":
              deleteFile();
              break;
            case "4" || "44":
              consola.success("Terima kasih telah menggunakan File Manager!");
              rl.close();
              return;
            default:
              consola.error("Pilihan tidak valid!");
              showMenu2();
              return;
          }
        }

        // Fungsi untuk menampilkan semua file
        function listFiles() {
          console.log(main());
          //   fs.readdi(DATA_DIR, (err, files) => {
          //     if (err) {
          //       consola.error("Error membaca direktori:", err);
          //       return showMenu2();
          //     }

          //     if (files.length === 0) {
          //       consola.warn("Tidak ada file tersimpan");
          //     } else {
          //       consola.info("\nDaftar File:");
          //       files.forEach((file, index) => {
          //         console.log(`${index + 1}. ${file}`);
          //       });
          //     }
          //     showMenu2();
          //   });
        }

        // Fungsi untuk menambah file baru
        function addFile() {
          rl.question("\nMasukkan nama file: ", (fileName) => {
            rl.question("Masukkan konten file: ", (content) => {
              const filePath = path.join(DATA_DIR, fileName);

              fs.writeFile(filePath, content, (err) => {
                if (err) {
                  consola.error("Error menyimpan file:", err);
                } else {
                  consola.success(`File ${fileName} berhasil disimpan!`);
                }
                showMenu2();
              });
            });
          });
        }

        // Fungsi untuk menghapus file
        function deleteFile() {
          fs.readdir(DATA_DIR, (err, files) => {
            if (err) {
              consola.error("Error membaca direktori:", err);
              return showMenu2();
            }

            if (files.length === 0) {
              consola.warn("Tidak ada file yang bisa dihapus");
              return showMenu2();
            }

            console.log("\nDaftar File:");
            files.forEach((file, index) => {
              console.log(`${index + 1}. ${file}`);
            });

            rl.question("\nPilih nomor file yang akan dihapus: ", (number) => {
              const index = number - 1;
              if (index >= 0 && index < files.length) {
                const filePath = path.join(DATA_DIR, files[index]);

                fs.unlink(filePath, (err) => {
                  if (err) {
                    consola.error("Error menghapus file:", err);
                  } else {
                    consola.success(`File ${files[index]} berhasil dihapus!`);
                  }
                  showMenu2();
                });
              } else {
                consola.error("Nomor file tidak valid!");
                showMenu2();
              }
            });
          });
        }

        // Mulai aplikasi
        consola.start("Selamat datang di File Manager!");
        showMenu2();

        break;
      default:
        "Terjadi kesalahan: Input tidak valid";
        break;
    }
  });
}

main();
