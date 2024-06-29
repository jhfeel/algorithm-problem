// 두 글자씩 배열에 넣기
function strToArr(str) {
  let arr = [];
  const pattern = /[a-z]/;

  for (let i = 0; i < str.length - 1; i++) {
    if (pattern.test(str[i]) && pattern.test(str[i + 1])) {
      arr.push(str[i] + str[i + 1]);
    }
  }

  return arr;
}

// 교집합 만들기
function getIntersection(arr1, arr2) {
  const arrA = arr1.slice();
  const arrB = arr2.slice();
  const intersection = [];

  for (let i = 0; i < arrA.length; i++) {
    if (arrB.includes(arrA[i])) {
      const idxToDelete = arrB.indexOf(arrA[i]);

      intersection.push(arrA[i]);

      delete arrA[i];
      delete arrB[idxToDelete];
    }
  }

  return intersection;
}

// 합집합 만들기: A + (B-교집합)
function getUnion(arr1, arr2) {
  const arrA = arr1.slice();
  const arrB = arr2.slice();
  const union = [];
  const intersection = getIntersection(arrA, arrB);

  for (let val of arrA) {
    union.push(val);
  }

  for (let val of intersection) {
    if (arrB.includes(val)) {
      const idxToDelete = arrB.indexOf(val);

      delete arrB[idxToDelete];
    }
  }

  for (let val of arrB) {
    if (val) {
      union.push(val);
    }
  }

  return union;
}

function solution(str1, str2) {
  let j; // 자카드
  const strA = str1.toLowerCase();
  const strB = str2.toLowerCase();
  const arrA = strToArr(strA);
  const arrB = strToArr(strB);
  const intersection = getIntersection(arrA, arrB);
  const union = getUnion(arrA, arrB);
  j = intersection.length / union.length;

  return isNaN(j) ? 65536 : Math.floor(j * 65536);
}
