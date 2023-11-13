/*let ecole = [
    "Richardeson",
    "Webster",
    "Alexis",
    "Berlin",
    "Boucquet",

]
console.log(ecole[3]);
console.log(ecole.length);
//console.log(ecole[ecole.length - 1]);
//let newArray = ecole.shift();
//let newArray1 = ecole.pop();
//console.log(newArray);
let addName = ecole.push("Jean");
let sliceArray = ecole.slice(0, 3);
console.log(sliceArray);

console.log(ecole.indexOf("Alexis"));

function include() {
if(ecole.includes("Webster")){
    console.log("hi is a teacher");
}else{
    console.log("we do not find Webster");
}
}
include();

ecole.push("Berlin");

let otherName = ecole.find((Element) => Element === "Berlin");
console.log(ecole);
//console.log(otherName);

let otherNameFilter = ecole.filter((Element) => Element === "Berlin");
console.log(otherNameFilter);
*/

let pays = new Set([
    "Haiti",
    "Congo",
    "USA",
    "Italie",
    "Italie"
])

pays.add("Alemagne")
console.log(pays.size);
//console.log(pays);

pays.forEach((Element) => {
    console.log(Element);
})
//console.log(pays.has("Alemagne"));
//console.log(pays.delete("Alemagne"));
console.log(pays);

