"use strict";
class WasiatOrangTua {
    jalankanAmanah() {
        // Tidak bisa memanggil makeSound() langsung
        this.amanah('baca quran');
        this.amanah('infak 1M');
        this.amanah('bayar hutang');
        console.log("amanah selesai");
    }
}
class AnakSoleh extends WasiatOrangTua {
    amanah(todo) {
        console.log("Saya menjalankan " + todo);
    }
    rajinSolat() {
        console.log('rajin solat');
    }
    BisaBacaQuran() {
        console.log('bisa baca quran');
    }
}
// Membuat instance dari class turunan
const anak = new AnakSoleh();
anak.jalankanAmanah();
anak.BisaBacaQuran();
anak.rajinSolat();
