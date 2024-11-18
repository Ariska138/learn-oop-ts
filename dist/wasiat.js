"use strict";
class WasiatOrtu {
    jalankanAmanah() {
        this.amanah("mendoakan orang tua");
        this.amanah("tidak boleh nakal");
        this.amanah("tidak boleh nyambi pas pelajaran");
        this.amanah("tidak boros");
        console.log("Amanah Selesai di jalankan");
    }
    // polymorsm
    usahaRekomendasi() {
        console.log("juragan emas");
    }
}
class AnahSoleh extends WasiatOrtu {
    amanah(todo) {
        console.log('Anak menjalankan Amanah ', todo);
    }
    berbaktiKpdOrtu() {
        console.log("nurut kepda Ortu");
    }
    mengerjakanSolat5Waktu() {
        for (let i = 0; i < 5; i++) {
            console.log('Solat wajib ke ' + (i + 1));
        }
    }
    infak() {
        return 10000000;
    }
    // overloading tidak rekomendasi, mendingan menggunakan union
    sodakoh(item) {
        if (typeof item === 'string') {
            console.log("anak sodakoh berupa barang : ", item);
            return;
        }
        console.log("anak sodakoh berupa uang: ", item);
    }
    solatDiMasjid() {
        console.log("solat di masjid");
    }
    tidakBoros() {
        console.log("santri tidak boros");
    }
    tidakNakal() {
        console.log("santri tidak nyambi main game");
    }
    usahaRekomendasi() {
        console.log("Anak usaha Software Development");
    }
}
// bisa diakses tanpa harus membuat objectnya
AnahSoleh.agama = "Islam";
const anakSoleh = new AnahSoleh();
anakSoleh.jalankanAmanah();
anakSoleh.berbaktiKpdOrtu();
anakSoleh.mengerjakanSolat5Waktu();
anakSoleh.solatDiMasjid();
anakSoleh.tidakBoros();
anakSoleh.tidakNakal();
console.log("Selalu infak tiap hari minimal " + anakSoleh.infak());
anakSoleh.usahaRekomendasi();
anakSoleh.sodakoh("Baju");
anakSoleh.sodakoh(100000);
console.log("pada umumnya anak solah itu beragama ", AnahSoleh.agama);
