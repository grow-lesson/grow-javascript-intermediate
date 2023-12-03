// 問題1の答え:
let employees = [
  { id: 1, name: "田中", age: 28, department: "営業" },
  { id: 2, name: "山田", age: 35, department: "総務" },
  { id: 3, name: "佐藤", age: 24, department: "開発" },
  { id: 4, name: "鈴木", age: 42, department: "営業" },
  { id: 5, name: "高田", age: 29, department: "総務" }
];


for (let i = 0; i < employees.length; i++) {
  if (employees[i].age >= 30) {
    console.log(employees[i].name + ": " + employees[i].department);
  }
}

let departmentCount = {};

for (let i = 0; i < employees.length; i++) {
  let department = employees[i].department;
  if (departmentCount[department]) {
    departmentCount[department]++;
  } else {
    departmentCount[department] = 1;
  }
}

for (let department in departmentCount) {
  console.log(department + ": " + departmentCount[department] + "人");
}


let youngestAge = Infinity;
let youngestEmployee = "";

for (let i = 0; i < employees.length; i++) {
  if (employees[i].age < youngestAge) {
    youngestAge = employees[i].age;
    youngestEmployee = employees[i].name;
  }
}

console.log("最も若い従業員: " + youngestEmployee + "（" + youngestAge + "歳）");




// 問題2の答え:
let products = [
  { id: 1, name: "商品A", price: 1200, stock: 15 },
  { id: 2, name: "商品B", price: 800, stock: 8 },
  { id: 3, name: "商品C", price: 2500, stock: 3 },
  { id: 4, name: "商品D", price: 600, stock: 20 },
  { id: 5, name: "商品E", price: 1800, stock: 12 }
];


let highestPrice = 0;
let highestPriceProduct = "";

for (let i = 0; i < products.length; i++) {
  if (products[i].stock <= 10 && products[i].price > highestPrice) {
    highestPrice = products[i].price;
    highestPriceProduct = products[i].name;
  }
}

console.log("在庫が10個以下の最も高価な商品: " + highestPriceProduct + "（価格: " + highestPrice + "円）");


let totalStock = 0;
let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
  totalStock += products[i].stock;
  totalPrice += products[i].price * products[i].stock;
}

console.log("合計在庫数: " + totalStock + "個");
console.log("合計価格: " + totalPrice + "円");


let inputProductName = prompt("商品名を入力してください:");
let foundProduct = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].name === inputProductName) {
    console.log("商品名: " + products[i].name);
    console.log("在庫数: " + products[i].stock + "個");
    console.log("価格: " + products[i].price + "円");
    foundProduct = true;
    break;
  }
}

if (!foundProduct) {
  console.log("該当する商品はありません");
}





// 問題3の答え:
let player = {
  name: "勇者",
  level: 5,
  experience: 480,
  maxHealth: 100,
  currentHealth: 75
};

let monster = {
  name: "ドラゴン",
  level: 8,
  maxHealth: 200,
  currentHealth: 120,
  damage: 30
};


let playerDamage = player.level * 10;
monster.currentHealth -= playerDamage;

console.log(player.name + "の攻撃！" + monster.name + "に" + playerDamage + "のダメージを与えた！");
console.log(monster.name + "の残り体力: " + monster.currentHealth);

if (monster.currentHealth <= 0) {
  let experienceGained = monster.level * 20;
  player.experience += experienceGained;

  console.log(player.name + "は" + monster.name + "を倒し、" + experienceGained + "の経験値を獲得した！");
  console.log(player.name + "の現在の経験値: " + player.experience);
}

if (player.experience >= player.level * 100) {
  player.level++;
  player.experience = 0;

  console.log(player.name + "はレベルアップした！新しいレベル: " + player.level);
}

