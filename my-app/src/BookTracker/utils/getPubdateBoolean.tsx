import {regexYear} from "../constants";

const getPubdateBoolean = (pubyear: string):boolean => {
  const currentYear = new Date().getFullYear();
  const realYear = Number(pubyear);
  return (regexYear.test(pubyear) && realYear <= currentYear && realYear >= 1455) ? true : false;
};

export {getPubdateBoolean};
