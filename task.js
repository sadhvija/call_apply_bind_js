//this
console.log(this)

function show(){
    console.log(this)
}
show()

const person = {
    name: "sadhvija",
    greet: function(){
        console.log("good morning")
    }
};
person.greet();

const person2 = {
    name:"sadhvija",
    designate:"job seeker",
    action:function(){
          console.log(`person name ${this.name}`)
    }
};
person2.action()


let any= {
    name:"sanny",
    age:18,
    details:function(){
        console.log(`age of a person is ${this.age}`)
    }
};
any.details()

//call
let a={
    id:1,
    name:"ram",
    gender:"male",

}
const b=function details(){
    console.log(this.id)
    console.log(this.name)
}
b.call(a)


let car = {
    name: "volkwagen",
    price : 3456789,
    color: "red",
}
let property =function(x,y){
    console.log(this.name+x+y);
}
property.call(car," hai"," hello")

let men = {
    name: "volkwagen",
    price : 3456789,
    color: "red",
}
let proper=function(x,y){
    console.log(this.name+x+y);
}
proper.call(men,["hai","hello"])
//apply
let d = {
    name: "stark",
    price : 3456789,
    color: "red",
}
let den=function(x,y){
    console.log(this.name+x+y);
}
den.apply(d,[" hai"," hello"])
//bind
let bind ={
    greet:"bind",
    name:"me",
}
const bind1=function bound(x,y){
    console.log(this.greet+x+y)
}
const bound=bind1.bind(bind,"hai","hello")
bound()

const pupil={
    firstName:"Mamidala",
    lastName:"Sadhvija",
    fullName:function(greet,full){
           return `${greet},${this.firstName}
                  ${this.lastName} ${full}`;
    }
};

const another ={
    firstName:"jane",
    lastName:"smith"
};
console.log(pupil.fullName.call(another,"hello","!"))
console.log(pupil.fullName.apply(another,["hi","."]));
const boundFunction=pupil.fullName.bind(another,"good","!");
console.log(boundFunction())

//call real world example
const pert1={name:"sad",mom:"vijny"};
const pert2={name:"asdfg",mom:"sddf"}
function des(){
    console.log(`person name ${this.name} and ${this.mom} years old`)
}
des.call(pert1)
des.call(pert2)

