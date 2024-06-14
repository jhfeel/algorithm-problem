const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const options = input.slice(1);
const shortcuts = [];
const strsWithShortcut = [];

// 문자열과 인덱스 주면 해당 글자에 [] 씌워 반환하는 함수
const setShortcutKey = (str, idx) => {
  if (idx === null) {
    return str;
  }

  const strArr = [...str];

  for (let i = 0; i < str.length; i++) {
    if (idx === i) {
      strArr[i] = "[" + strArr[i] + "]";
    }
  }

  return strArr.join("");
};

// 단축키 지정 여부 검사 후 단축키로 사용할 인덱스 반환하는 함수
const getShortcutIdx = (str) => {
  const words = str.split(" ");
  let idx = 0;
  let isChecked = false;

  // 1. 단어들의 첫 자 검사
  for (let i = 0; i < words.length; i++) {
    if (!shortcuts.includes(words[i][0])) {
      // 단축키 위치 인덱스 반환: 전 단어들의 길이 + 해당 단어 인덱스
      if (i === 0) {
        idx = 0;
      } else {
        //
        for (let x = 0; x <= i - 1; x++) {
          idx += words[x].length;
        }
        idx += i;
      }
      isChecked = true;
      break;
    }
  }

  // 2. 모든 글자 검사
  if (!isChecked) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        continue;
      }

      if (!shortcuts.includes(str[i])) {
        idx = i;
        isChecked = true;
        break;
      }
    }
  }

  if (!isChecked) {
    idx = null;
  }

  return idx;
};

// 메인 함수
const solution = () => {
  options.forEach((str) => {
    const lowerCaseStr = str.toLowerCase();
    const shortcutIdx = getShortcutIdx(lowerCaseStr);
    shortcuts.push(lowerCaseStr[shortcutIdx]);
    const strWithShortcut = setShortcutKey(str, shortcutIdx);
    strsWithShortcut.push(strWithShortcut);
  });

  console.log(strsWithShortcut.join("\n"));
};

solution();
