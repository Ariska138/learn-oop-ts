abstract class WasiatOrtu {
  protected abstract amanah(text: string): void;

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

class AnahSoleh extends WasiatOrtu implements SifatAnakSoleh {

  // bisa diakses tanpa harus membuat objectnya
  static agama: string = "Islam"

  protected amanah(todo: string): void {
    console.log('Anak menjalankan Amanah ', todo);
  }

  berbaktiKpdOrtu(): void {
    console.log("nurut kepda Ortu");
  }

  mengerjakanSolat5Waktu(): void {
    for (let i = 0; i < 5; i++) {
      console.log('Solat wajib ke ' + (i + 1));
    }
  }

  infak(): number {
    return 10000000;
  }

  // overloading tidak rekomendasi, mendingan menggunakan union

  sodakoh(item: string | number): void {
    if (typeof item === 'string') {
      console.log("anak sodakoh berupa barang : ", item);
      return;
    }

    console.log("anak sodakoh berupa uang: ", item);
  }


  solatDiMasjid(): void {
    console.log("solat di masjid");
  }

  tidakBoros(): void {
    console.log("santri tidak boros");
  }

  tidakNakal(): void {
    console.log("santri tidak nyambi main game");

  }

  usahaRekomendasi(): void {
    console.log("Anak usaha Software Development");
  }
}

interface SifatAnakSoleh {
  mengerjakanSolat5Waktu(): void;
  solatDiMasjid(): void;
  tidakNakal(): void;
  berbaktiKpdOrtu(): void;
  infak(): number;
  tidakBoros(): void;
}

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

