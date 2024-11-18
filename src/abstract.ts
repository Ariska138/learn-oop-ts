abstract class WasiatOrangTua {
  // Abstract method (tidak ada implementasi)
  protected abstract amanah(text: string): void;

  jalankanAmanah(): void {
    // Tidak bisa memanggil makeSound() langsung
    this.amanah('baca quran');
    this.amanah('infak 1M');
    this.amanah('bayar hutang');
    console.log("amanah selesai");
  }
}

class AnakSoleh extends WasiatOrangTua implements sifatTakwa {
  protected amanah(todo: string): void {
    console.log("Saya menjalankan " + todo);
  }

  rajinSolat(): void {
    console.log('rajin solat');
  }

  BisaBacaQuran(): void {
    console.log('bisa baca quran');
  }
}

interface sifatTakwa {
  rajinSolat(): void;
  BisaBacaQuran(): void;
}

// Membuat instance dari class turunan
const anak = new AnakSoleh();
anak.jalankanAmanah();
anak.BisaBacaQuran();
anak.rajinSolat();