let nameList: string[] = ["Erkam", "Taha"];

let tuple:[string, number] = ["Erkam", 28];

class KeyValuePair {
    key: number;
    value: string;
}
let myList: KeyValuePair[] = []

var map = new Map();

map.set(1, "Pencil");
map.set(2, "Notebook");
map.set(3, "Eraser");

for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}

for (let keyAndValue of map.entries()) {
    console.log(`${keyAndValue[0]} ${keyAndValue[1]}`)
}