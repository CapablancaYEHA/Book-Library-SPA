import testCover1 from "../BookTracker/img/cover_example.jpg";
import testCover2 from "../BookTracker/img/cover_example2.jpg";
import testCover3 from "../BookTracker/img/cover_example3.jpg";

import { BookParamsTypes } from "../BookTracker/types";

const severalBooks: BookParamsTypes[] = [
  {
    title: "Долгие сказание о зиме и прочих неприятностях народа",
    author: "Иван Дорн, Кристофер Нолан",
    bookCode: "978-3-16-148410-0",
    cover: testCover1,
    pubDate: "2015",
    id: 1
  },
  {
    title: "Некоторое название",
    author: "Фамилия Имя",
    bookCode: "978-3-16-148410-0",
    cover: testCover2,
    pubDate: "1990",
    id: 2
  },
  {
    title: "Название книги",
    author: "Фамилия Имя Отчество",
    bookCode: "978-3-16-148410-0",
    id: 3
  },
  {
    title: "Название книги",
    author: "Фамилия Имя Отчество",
    bookCode: "978-3-16-148410-0",
    cover: testCover3,
    id: 4
  }
];

export { severalBooks };
