function greetMe(yourName)
{
    alert("Hello" + yourName);
}

function shownumber(number)
{
    console.log('this is number a is ' + number);
}

function doThis()
{
    console.log('this variable is not define.');
}

function doThat()
{
    console.log('this variable is define.');
}


var car = "Fiat";

var car = {
    type:"Fiat",
    model:"500", 
    color:"white",

    getinfo: function(){
        return 'type ' + this.type + ' model ' + this.model + ' color ' + this.color;
    }
};

function Person(first, last,age)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.output = function(){
        return this.firstName + " " + this.lastName + " " + this.age;
    }
}

var myFather = new Person("Jason","Joe", 50);
var myMother = new Person("Sally","Rally",48);

console.log(myFather.output());
// update new prototype element
Person.prototype.nationality = 'English';
console.log(myFather.nationality);

Person.prototype.newoutput = function(){
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.nationality;
};

myFather.nationality = "Chinese";
console.log(myFather.newoutput());

console.log(myMother.newoutput());


var myBrother = new Person("jj")









var x = new String();
var y = new Number();
var z = new Boolean();

y = 'first';

console.log(y);

console.log(car.model);
console.log(car.getinfo());

/*
var input;
if (input == undefined)
{
    doThis();
}
else doThat();



greetMe('World');
shownumber( 5);
*/

