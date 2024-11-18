"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    changeAge(age) {
        if (age < 12) {
            this.showInfo('umur harus minimal 12 tahun');
            return; // stop proses
        }
        this.age = age;
    }
    showInfo(text) {
        console.log("info: ", text);
    }
    greet() {
        return `Selamat Pagi ${this.name} (${this.age} thn)`;
    }
}
console.log('1. saat mendaftaran');
const santri2 = new Person2("Gaza", 15);
console.log(santri2.greet());
// mengubah umur menjadi 11
console.log('2. ketika ingin mengubah umur');
santri2.changeAge(11);
console.log(santri2.greet());
