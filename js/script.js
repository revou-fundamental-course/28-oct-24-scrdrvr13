function kalkulatorBmi(event) {
    event.preventDefault();

const berat = parseFloat(document.getElementById("berat-badan").value);
const tinggi = parseFloat(document.getElementById("tinggi-badan").value / 100);

const hasilBmi = berat / (tinggi*tinggi);
let kategori;
let min, max;
let penjelasan;

if (hasilBmi < 18.5) {
    kategori = "Kekurangan berat badan";
    min = 0;
    max = 18.5;
    penjelasan = "Anda berada dalam kategori kekurangan berat badan. Anda perlu meningkatkan berat badan Anda untuk mencapai BMI yang lebih ideal.";
}else if (hasilBmi < 24.9) {
        kategori = "Normal(Ideal)";
        min = 18.5;
        max = 24.9;
        penjelasan = "Anda berada dalam kategori Normal. Tetap pertahankan kondisi tubuh anda."
    }
    else if (hasilBmi < 29.9) {
        kategori = "Kelebihan berat badan"
        min = 25.0;
        max = 29.9;
        penjelasan = "Anda berada dalam kategori overweight atau kelebihan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga."
    }
    else {
        kategori = "Kegemukan(Obesitas)"
        min = 30.0;
        max = 40.0;
        penjelasan = "Anda berada dalam kategori Obesitas atau Kegemukan. Perbaiki pola makan anda dan berolahraga.";
    }


    document.getElementById("nilai-bmi").innerHTML = hasilBmi.toFixed(1);
    document.getElementById("kategori").innerHTML = kategori;
    document.getElementById("penjelasan").innerHTML = penjelasan;

}







