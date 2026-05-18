// ambil input tugas
const inputTugas = document.getElementById("inputTugas");
// add const tanggal
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function () {

    let teksTugas = inputTugas.value;
    let tanggal = inputTanggal.value;

    if (teksTugas === "") {
        alert("Data harus ditambahkan");
        return;
    }

    let listBaru = document.createElement("li");

    let spanTugas = document.createElement("span");
    spanTugas.innerHTML = teksTugas;

    let spanTanggal = document.createElement("span");
    spanTanggal.classList.add("tanggal");
    spanTanggal.innerHTML = tanggal ? ` (${tanggal})` : "";

    let containerKiri = document.createElement("div");
    containerKiri.appendChild(spanTugas);
    containerKiri.appendChild(spanTanggal);

    let aksi = document.createElement("div");
    aksi.classList.add("aksi");

    // add tombol EDIT
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.addEventListener("click", function () {
        let teksBaru = prompt("Edit tugas:", spanTugas.innerHTML);
        if (teksBaru !== null && teksBaru !== "") {
            spanTugas.innerHTML = teksBaru;
        }
    });

    // add tombol STATUS
    let btnStatus = document.createElement("button");
    btnStatus.innerHTML = "Progress";
    spanTugas.classList.add("progress");

    btnStatus.addEventListener("click", function () {
        if (btnStatus.innerHTML === "Progress") {
            btnStatus.innerHTML = "Done";
            spanTugas.classList.remove("progress");
            spanTugas.classList.add("done");
        } else {
            btnStatus.innerHTML = "Progress";
            spanTugas.classList.remove("done");
            spanTugas.classList.add("progress");
        }
    });

    // add tombol HAPUS
    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("hapus");

    btnHapus.addEventListener("click", function () {
        listBaru.remove();
        updateWarna(); // update warna setelah hapus
    });

    aksi.appendChild(btnEdit);
    aksi.appendChild(btnStatus);
    aksi.appendChild(btnHapus);

    listBaru.appendChild(containerKiri);
    listBaru.appendChild(aksi);

    daftarTugas.appendChild(listBaru);

    updateWarna(); // update warna setelah menambahkan data

    inputTugas.value = "";
    inputTanggal.value = "";
});

// ubah warna teks
function updateWarna() {
    const semuaList = document.querySelectorAll("#daftarTugas li");

    semuaList.forEach((item, index) => {
        item.classList.remove("text1", "text2");

        if (index % 2 === 0) {
            item.classList.add("text1");
        } else {
            item.classList.add("text2");
        }
    });
}