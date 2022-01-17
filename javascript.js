'use strict'
const student = {
   name: 'Ivan',
   surname: 'Ivanovich',
   isMale: true,
   phoneNumber: '0997778899',
   email: 'ivanovich@mail.ru',
   adress: 'Yellow Street',
   showAdress () {
      console.log(this.adress);
   },
   changeSex() {
      return this.isMale === true ? this.isMale = false : this.isMale = true ;
   },
}

console.group('task 1');
student.showAdress();
for (let i = 0; i < 3; i++) {
   console.log(student.changeSex());
}
console.groupEnd();

const studentInfo = {
   faculty: 'sorcery',
   dean: 'Albus Dumbledore',
   changeFaculty(newFaculty) {
      this.faculty = newFaculty;
   },
}

console.group('task 2');
studentInfo.changeFaculty('prophecy');
console.log(studentInfo);
console.groupEnd();


function Book (author, title, publishingYear, publishingHouse) {
   this.author = author;
   this.title = title;
   this.publishingYear = publishingYear;
   this.publishingHouse = publishingHouse;
}

Book.prototype = {
   getBookAge: function() {
      const currentYear = new Date();
      return currentYear.getFullYear() - this.publishingYear;
   }
}



const book1 = new Book('Jordan Peterson', '12 Rules for Life', 2018, 'random');

console.group('task 3');
console.log(book1);
console.log(`Book age = ${book1.getBookAge()} years`);
console.groupEnd();