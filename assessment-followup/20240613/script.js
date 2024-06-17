"use strict";
// 1行目に記載している 'use strict' は削除しないでください
//function for test
function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("Yay! Test PASSED.");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.log("-----------------------------");
  } else {
    console.error("Test FAILED. Keep trying");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.log("-----------------------------");
  }
}

/* from here */
/* 1. evenOrOdd という名前の関数を宣言してください。*/
//JSDoc
/**
 *
 * @param {[number]} arrayNumbers       数値型の要素を持つ配列
 * @param {boolean} selection           偶数、奇数を振り分けるためのboolean
 * @returns {[number]}                  boolean(true)-> 偶数のみの配列, (false)-> 奇数のみの配列
 */
//func
function evenOrOdd(arrayNumber, selection) {
  const arrayOrOdd = [];
  if (selection === true) {
    for (let number of arrayNumber) {
      if (number % 2 === 0) {
        arrayOrOdd.push(number);
      }
    }
  } else if (selection === false) {
    for (let number of arrayNumber) {
      if (number % 2 === 1 || number % 2 === -1) {
        arrayOrOdd.push(number);
      }
    }
  }
  return arrayOrOdd;
}
//test
test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);
console.log(`-----------------------------`);

/* 2. findKeys という名前の関数を宣言してください。*/
//JSDoc
/**
 *
 * @param {{any}} object    複数のデータ型を要素に持つobject
 * @param {any} target      オブジェクトバリューを指すtarget
 * @returns {[string]}      targetにマッチするバリューを持つ全てのキーを含む新しい配列
 */
//func
function findKeys(object, target) {
  const arrayFindKeys = [];
  for (let key in object) {
    if (object[key] === target) {
      arrayFindKeys.push(key);
    }
  }
  return arrayFindKeys;
}
//test
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), [
  "c",
  "d",
]);
console.log(`-----------------------------`);

/* 3. buildObject という名前の関数を宣言してください。*/
//JSDoc
/**
 *
 * @param {[string]} arraySetKeys    オブジェクトキーに設定する配列
 * @param {[any]} arraySetValues     オブジェクトバリューに設定する配列
 * @returns {{any}} buildObject      第一引数、第二引数の配列要素すべての{arraySetKey: arraySetValue}
 */
//func
function buildObject(arraySetKeys, arraySetValues) {
  const arrayDivisionSetKeys = [...arraySetKeys];
  const arrayDivisionSetValues = [...arraySetValues];
  let buildObject = {};
  for (let i = 0; i < arrayDivisionSetKeys.length; i++) {
    buildObject[arrayDivisionSetKeys[i]] = arrayDivisionSetValues[i];
  }
  return buildObject;
}
//test
test(buildObject(["a", "b", "c"], [1, 2, 3]), { a: 1, b: 2, c: 3 });
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {
  cat: "にゃー",
  dog: "わんわん",
  duck: "がーがー",
});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {
  cat: null,
  dog: 0,
  duck: NaN,
});
test(
  buildObject(
    ["abc", "def", "ghi"],
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]
  ),
  { abc: [0, 1, 2], def: [3, 4, 5], ghi: [6, 7, 8] }
);
console.log(`-----------------------------`);

/* 4.add という名前の関数を宣言してください。 */
//JSDoc
/**
 *
 * @param {number} x        数値x を受け取り
 * @returns {function}      関数を返し、返された関数は数値y を受け取り、x+y の和を返す
 */
//func
function add(x) {
  return function (y) {
    return x + y;
  };
}
//test
const addTwo = add(2);
test(addTwo(3, add()), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);
console.log(`-----------------------------`);

/* 5. 以下のコードを実行すると、どの順番で何が表示されるでしょうか？ */
//func
// function sayHello() {
//   console.log(1);
//   console.log("Hello");
//   console.log(2);
// }
// //func
// function sayHelloAndName(name) {
//   return "Hello, " + name;
// }
// //set
// const foo = sayHello();
// const bar = sayHelloAndName("JavaScript");
// //test
// console.log(foo);
// console.log(3);
// console.log(4);
// console.log(bar);
// console.log(5);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
/*  "Hello" -> "undefined" -> "Hello,JavaScript"　の順番でコンソールに表示されます。
    コードは上から下に実行される為、最初に二行目の "Hello" が Console.log() により表示され、
    console.log(foo); により sayHello() が呼び出されますが、function sayHello() に対する return が無いので 
    undefined が返されます。最後に console.log(bar); により sayHelloAndName("JavaScript"); が呼び出され
    "Hello, JavaScript" が返されます。*/

/* 6.クリックしたらページの色が変わるボタンを作りましょう。 */
/* 別フォルダ */

/* 7.関数 map を宣言してください。 */
//JSDoc
/**
 *
 * @param {[array] or {object}}} collection     配列またはオブジェクトのコレクション
 * @param {function} addOne                     コールバック関数
 * @returns {[array]}   コレクション内の各要素にコールバック関数を実行した結果を要素に持つ新しい配列を返す
 */
//func
function map(collection, addOne) {
  let newArray = [];
  if (Array.isArray(collection) === true) {
    for (let i = 0; i < collection.length; i++) {
      newArray.push(addOne(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      newArray.push(addOne(collection[key]));
    }
  }
  return newArray;
}
// }
//func
function addOne(num) {
  return num + 1;
}
//test
test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);
console.log(`-----------------------------`);

/* 8.関数 changeMiddle を宣言してください。 */
//JSDoc
/**
 *
 * @param {string} oddNumberOfWords   奇数個の単語からなる文字列
 * @param {string} oneWord            1つの単語
 * @returns {string}    第1引数の真ん中の単語を,第2引数の単語で置き換えた新しい文字列を返す
 */
//func
let arraySplitString = [];
function changeMiddle(oddNumberOfWords, oneWord) {
  arraySplitString = oddNumberOfWords.split(" ");
  arraySplitString[1] = oneWord;
  return arraySplitString.join(" ");
}
//test
test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
console.log(`-----------------------------`);

/* 9.関数 countSomething を宣言してください。 */
//JSDoc
/**
 *
 * @param {[array]} arrayMultiplData    数値・文字列・ブーリアンを要素に持つ配列
 * @returns {string}    要素の登場回数が最も多い型をチェックし、"BOOL COUNT: x" 、"STRING COUNT: x"、 "NUMBER COUNT: x" のいずれかを返す
 *                      ※ｘは型の要素がが何回出現したかを表す
 */
//func
function countSomething(arrayMultiplData) {
  let s = 0;
  let n = 0;
  let b = 0;
  for (let data of arrayMultiplData) {
    if (typeof data === "string") {
      s++;
    } else if (typeof data === "number") {
      n++;
    } else if (typeof data === "boolean") {
      b++;
    }
  }
  if (s > n && s > b) {
    return `STRING COUNT: ${s}`;
  } else if (n > s && n > b) {
    return `NUMBER COUNT: ${n}`;
  } else if (b > s && b > n) {
    return `BOOL COUNT: ${b}`;
  }
}
//test
test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");
console.log(`-----------------------------`);

/* 10.関数 each を宣言してください。 */
//JSDoc
/**
 *
 * @param {[array] or {object}} collection    コレクション(オブジェクトまたは配列)
 * @param {function} callBack                 コールバック関数
 */
//func
function each(collection, callBack) {
  if (Array.isArray(collection) === false) {
    for (let key in collection) {
      callBack(collection[key]);
    }
  } else {
    collection.forEach((value) => callBack(value));
  }
}
//test
each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);
//result
// 1
// 2
// 3
// 4
// 5
// 6
console.log(`-----------------------------`);

/* 11. 関数 compose を宣言してください。*/
//JSDoc
/**
 *
 * @param {function} funcA    関数A
 * @param {function} funcB    関数B
 * @returns {function}    新しい関数を返す。返された関数は引数 x を受け取り、
 *                        funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、得られた結果を返す
 */
//func
function compose(funcA, funcB) {
  return function (x) {
    return funcB(funcA(x));
  };
}
//func
function multiplyTwo(x) {
  return x * 2;
}
//fun
function addTen(x) {
  return x + 10;
}
//test
const baz = compose(multiplyTwo, addTen);
test(baz(5), 20);
test(baz(100), 210);
