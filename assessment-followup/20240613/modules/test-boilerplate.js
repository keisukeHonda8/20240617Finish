"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// テスト用関数
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
