const $ = (item) => {
  return document.querySelector(item);
};
const $_ = (item) => {
  return document.querySelectorAll(item);
};
const $fill = (item, text) => {
  item.innerHTML = text;
};

const validAge = 18;
const validWeight = 30;
const validHeight = 100;

function validation() {
  $_("input").forEach((input) => {
    if (input.checked === false && input.value === "") {
      $(".warning").textContent = "*Semua kolom wajib diisi";
      return false;
    } else {
      $(".warning").textContent = "Berhasil!";
      return true;
    }
  });
}

$("#button-submit").addEventListener("click", async () => {
  validation();
});

$("#button-reset").addEventListener("click", async () => {
  $_("input").forEach((input) => {
    input.value = ""; // Reset input[number]
    input.checked = false; // Reset input[radio]
  });

  $(".warning").textContent = "";
});

// $("#button-submit").addEventListener("click", () => {
//   if (validation()) {
//     (async () => {
//       /////
//       // Init
//       const hei = $("#height").value / 100;
//       const wei = $("#weight").value;
//       const age = $("#age").value;
//       let res = 0;
//       const stat = {
//         head: "",
//         info: "",
//         nums: "",
//         unit: "",
//         sums: "",
//         cats: "",
//         type: "",
//         avgs: "",
//       };

//       if (
//         age >= valid.age &&
//         hei >= valid.height / 100 &&
//         wei >= valid.weight &&
//         checkup
//       ) {
//         res = wei / (hei * hei);
//       } else {
//         res = 0;
//       }

//       const sum_head = $("#sum-head"),
//         sum_info = $("#sum-info"),
//         sum_nums = $("#sum-nums"),
//         sum_unit = $("#sum-unit"),
//         sum_sums = $("#sum-sums"),
//         sum_cats = $("#sum-cats"),
//         sum_type = $("#sum-type"),
//         sum_avgs = $("#sum-avgs"),
//         sum_main = $("#num");

//       /////
//       // Start Calculation
//       if (res) {
//         res = Math.floor(res * 10) / 10; // Minimzed behind commas
//         const BMI = {
//           n_min: 18.4,
//           n_max: 24.9,
//           o_min: 29.9,
//           o_max: 34.9,
//           min: Math.floor(18.4 * hei * hei * 10) / 10, // Normal min BMI * Height = min Weight
//           max: Math.floor(24.9 * hei * hei * 10) / 10, // Normal max BMI * Height = max Weight
//         };

//         ///////
//         // Fills up object
//         stat.head = "Hasil BMI Anda:";
//         stat.nums = `${res}`;
//         stat.unit = "Kg";

//         if (res <= BMI.n_min) {
//           stat.info = "Kekurangan Berat Badan";
//           stat.type =
//             "Anda memiliki berat badan yang <br> kurang dari seharusnya ";
//           stat.sums = "Hasil BMI di bawah normal";
//           stat.avgs = BMI.min;
//           sum_main.style.color = "red";
//         } else if (res > BMI.n_min && res <= BMI.n_max) {
//           stat.info = "Normal";
//           stat.type = "Pertahankan berat badan <br> Anda di";
//           stat.sums = "Hasil BMI Ideal";
//           stat.avgs = `${BMI.min} - ${BMI.max}`;
//           sum_main.style.color = "green";
//         } else if (res > BMI.n_max && res <= BMI.o_min) {
//           stat.info = "Berat Badan Berlebih";
//           stat.type =
//             "Berat badan Anda lebih dari berat <br> badan yang seharusnya";
//           stat.sums = "Hasil BMI di atas normal";
//           stat.avgs = BMI.max;
//           sum_main.style.color = "orange";
//         } else if (res > BMI.o_min && res <= BMI.o_max) {
//           stat.info = "Obesitas";
//           stat.type =
//             "Berat badan Anda jauh lebih berat <br> dari yang seharusnya";
//           stat.sums = "Hasil BMI jauh di atas normal";
//           stat.avgs = BMI.max;
//           sum_main.style.color = "red";
//         } else if (res > BMI.o_max) {
//           stat.info = "Obesitas Tinggi";
//           stat.type =
//             "Kami sarankan agar Anda menurunkan <br> berat badan setidaknya hingga";
//           stat.sums = "Hasil BMI sangat jauh di atas normal";
//           stat.avgs = Math.floor(BMI.max * 1.2 * 10) / 10;
//           sum_main.style.color = "red";
//         }

//         ///////
//         // Fills up element
//         $fill(sum_head, stat.head);
//         $fill(sum_info, stat.info);
//         $fill(sum_nums, stat.nums);
//         $fill(sum_sums, stat.sums);
//         $fill(sum_unit, stat.unit);
//         $fill(sum_type, stat.type);
//         $fill(sum_cats, stat.cats);
//         $fill(sum_avgs, stat.avgs);
//       }
//     })();
//   }
// });
