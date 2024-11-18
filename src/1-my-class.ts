class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  changeAge(age: number) {
    if (age < 12) {
      console.log('umur harus minimal 12 tahun');
      return; // stop proses
    }

    this.age = age;
  }


  greet() {
    return `Selamat Pagi ${this.name} (${this.age} thn)`;
  }
}

console.log('1. saat mendaftaran');
const santri = new Person("Gaza", 15);
console.log(santri.greet());

// mengubah umur menjadi 11
console.log('2. ketika ingin mengubah umur');
santri.changeAge(11);
console.log(santri.greet());
