
class Tool4 {
  protected showInfo(text: string) {
    console.log("info: ", text);
  }
}

class Person4 extends Tool {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  changeAge(age: number) {
    if (age < 12) {
      this.showInfo('umur harus minimal 12 tahun');
      return; // stop proses
    }

    this.age = age;
  }



  greet() {
    return `Selamat Pagi ${this.name} (${this.age} thn)`;
  }
}

console.log('1. saat mendaftaran');
const santri4 = new Person3("Gaza", 15);
console.log(santri4.greet());

// mengubah umur menjadi 11
console.log('2. ketika ingin mengubah umur');
santri4.changeAge(11);
console.log(santri4.greet());
