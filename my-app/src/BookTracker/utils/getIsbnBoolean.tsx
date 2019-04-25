import {ISBNregex} from "../constants/ISBNregex";

/* tslint:disable */
const getIsbnBoolean = (subject: string): boolean => {
  console.log(subject)
  if (ISBNregex.test(subject)) {
      const chars = subject.replace(/[- ]|^ISBN(?:-1[03])?:?/g, "").split("");
      const last = chars.pop();
      let sum = 0;
      let check: number | string;
      let i: number;

      if (chars.length == 9) {
          chars.reverse();
          for (i = 0; i < chars.length; i++) {
              sum += (i + 2) * parseInt(chars[i], 10);
          }
          check = 11 - (sum % 11);
          if (check == 10) {
              check = "X";
          } else if (check == 11) {
              check = "0";
          }
      } else {
          for (i = 0; i < chars.length; i++) {
              sum += (i % 2 * 2 + 1) * parseInt(chars[i], 10);
          }
          check = 10 - (sum % 10);
          if (check == 10) {
              check = "0";
          }
      }

      if (check == last) {
          return true
      } else {
          return false
      }
  } else {
      return false
}};

export {getIsbnBoolean};
/* tslint:enable */
