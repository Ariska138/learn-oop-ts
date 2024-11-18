class Person5 {

  constructor(private name: string, private age: number) { }

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
const santri5 = new Person5("Gaza", 15);
console.log(santri5.greet());
