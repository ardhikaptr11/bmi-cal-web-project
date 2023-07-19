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
  // deklarasi variabel untuk mengecek form input
  let isRadioChecked = false
  let isInputEmpty = false
  
  // melakukan looping setiap form input
  $_("input").forEach((input) => {
    /** 
     * malakukan validasi di setiap iterasinya
     * melihat apakah input type merupakan radio button
     * dan jika merupakan radio button, lakukan pengecekan jika form tersebut terisi
     * maka mengubah isRadioChecked
    */
    if (input.type === "radio" && input.checked) {
      isRadioChecked = true
    }

    /**
     * malukan validasi di setiap iterasinya
     * melakukan pengecekan apakah input value form input kosong
     * maka mengubah isInputEmpty
     */
    if (input.value === "") {
      isInputEmpty = true
    }
  })

  /**
   * melakukan validasi jika ada salah satu yang tidak terisi
   * (radio button atau input fields)
   * maka melakukan return false, untuk menghentikan eksekusi
   */
  if (!isRadioChecked || isInputEmpty) {
    $(".warning").textContent = "*Semua kolom wajib diisi";
    return false
  }

  // kondisi dimana jika validasi berhasil
  $(".warning").textContent = "Berhasil!";
  return true;
}

function calculateBmi() {
  // deklarasi variabel untuk mengambil input value
  const userHeight = $("#height").value
  const userWeight = $("#weight").value
  
  // konversi cm ke meter
  const userHeightInMeter = userHeight / 100

  // proses kalkulasi
  const result = userWeight / userHeightInMeter * userHeightInMeter

  return result
}

function validateInfo(bmiResult) {
  const userHeight = $("#height").value
  
  const userHeightInMeter = userHeight / 100
  
  // deklarasi nilai minimum dan maximum
  const BMI = {
    n_min: 18.4,
    n_max: 24.9,
    o_min: 29.9,
    o_max: 34.9,
    min: Math.floor(18.4 * userHeightInMeter * userHeightInMeter * 10) / 10, // Normal min BMI * Height = min Weight
    max: Math.floor(24.9 * userHeightInMeter * userHeightInMeter * 10) / 10, // Normal max BMI * Height = max Weight
  };

  // validasi nilai bmi result
  if (bmiResult <= BMI.n_min) {
    return $("#sum-info").textContent = "Kekurangan Berat Badan"
  }
  else if (bmiResult > BMI.n_min && bmiResult <= BMI.n_max) {
    return $("#sum-info").textContent = "Normal"
  }
  else if (bmiResult > BMI.n_max && bmiResult <= BMI.o_min) {
    return $("#sum-info").textContent = "Berat Badan Berlebih"
  }
  else if (bmiResult > BMI.o_min && bmiResult <= BMI.o_min) {
    return $("#sum-info").textContent = "Obesitas"
  }
  else if (bmiResult > BMI.o_max) {
    return $("#sum-info").textContent = "Obesitas Tinggi"
  }
}

$("#button-submit").addEventListener("click", async () => {
  /**
   * memanggil fungsi valiasi
   * untuk melakukan pengecekan form input
   */
  validation();

  /**
   * memanggil fungsi calculateBMI() untuk memulai proses kalkukasi
   * hasil dari calculateBMI() akan di simpan pada variabel result
   */
  const result = calculateBmi()
  
  /**
   * malakukan validasi jika nilai result merupakan NaN
   * akan mengosongkan textContent
   */
  if (isNaN(result)) {
    $("#sum-head").textContent = ""
    $("#sum-nums").textContent = ""
    return
  }
  
  // menampilkan hasil kalkulasi
  $("#sum-head").textContent = "Hasil BMI Anda:"
  $("#sum-nums").textContent = result
  
  /**
   * malakukan validasi info yang akan ditampilkan
   * berdasarkan nilai hasil kalkulasi, dimasukkan sebagai parameter
   */
  validateInfo(result)
});

$("#button-reset").addEventListener("click", async () => {
  $_("input").forEach((input) => {
    input.value = ""; // Reset input[number]
    input.checked = false; // Reset input[radio]
  });

  $(".warning").textContent = "";
});