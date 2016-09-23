/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    var bool = true;
    var number = 1;
    var myString = "Hejsa";

    var theArray = ["Message", "In", "An", "Array"];

    var myObject = {
        studentId: 3,
        studentName: "Jens",
        studentAge: 20
    };

    console.log(bool);
    console.log(number);
    console.log(myString);
    console.log(theArray);
    console.log(myObject);

    //Opgave 2

    var myNewArray = ["Something", 40, {profession: "musician", gender: "male", age: 31}, true];
    myNewArray.forEach(function (entry) {
        console.log(entry);
    });

    //Opgave 3

    var student1 = {
        studentID: 5,
        studentName: 'Dianna',
        studentAge: 15,
        isFemale: true,
        toString: function () {
            return this.studentID + ' ' + this.studentName;
        }
    };

    var student2 = {
        studentID: 007,
        studentName: 'James Bond',
        studentAge: 34,
        isFemale: false,
        toString: function () {
            return this.studentID + ' ' + this.studentName;
        }
    };

    var student3 = {
        studentID: 10,
        studentName: 'Lana',
        studentAge: 14,
        isFemale: true,
        toString: function () {
            return this.studentID + ' ' + this.studentName;
        }
    };

    var studentArray = [student1, student2, student3];
    studentArray.forEach(function (entry) {
        console.log(entry);
    });

    //Opgave 4

    var bigStudentList = {
        studentArray: [student1, student2, student3],
        getAllStudents: function () {
            studentArray.forEach(function (entry) {
                if (entry.isFemale) {
                    console.log("This one is a girl " + entry);
                }
            });
        },
        getYoungestStudent: function () {
            var temp = 100;
            studentArray.forEach(function (entry) {
                if (entry.studentAge < temp) {
                    temp = entry.studentAge;
                }
            });
            return temp;
        }
    };
    bigStudentList.getAllStudents();
    console.log("You are youngest Lana with the: " + bigStudentList.getYoungestStudent() + " years old");

    //Opgave 5

    var list = ["Bob", "Melanie", "Gurlie", "Fabian", "Louie"];
    var r = "Melanie";
    function removeAndGetList(list, r) {
        return list.splice(list.indexOf(r));
    }
    console.log(removeAndGetList(list, r));

    console.log("-------------------------------------------------------");

    //Opgave 6

    studentArray.forEach(function (entry) {
        if (entry.studentAge >= 30)
            console.log(entry);
    });

    //Opgave 7
    function max() {
        var largest = 0;

        for (var i in arguments) {
            if (arguments[i] > largest) {
                largest = arguments[i];
            }
        }
        return largest;
    }
    console.log(max(5, "Yeah baby!", student3));

    //Opgave 8

    function tellMeWhatDayItIs() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        return today = mm + '/' + dd + '/' + yyyy;

    }
    console.log(tellMeWhatDayItIs());

    function animal(name, biome, size, isMammal) {
        this.name = name;
        this.biome = biome;
        this.size = size;
        this.isMammal = isMammal;
        this.toString = function (filter) {
            if (this.isMammal === filter) {
                return "Name: " + this.name + ", Biome: " + this.biome + ", Size: " + this.size + ", isMammal: " + this.isMammal;
            } else {
                return "not a mammal";
            }
            ;
        };
    }
    var bunny = new animal("Bunny", "Plains", "Small", true);
    var crow = new animal("Crow", "The Sky", "Small", false);
    var whale = new animal("Whale", "The sea", "Huge", true);
    var animals = [bunny, crow, whale];

    animals.forEach(function (entry) {
        console.log(entry.toString(true));
    });

    animals.map(function (entry) {
        console.log(entry.name);
    });
});