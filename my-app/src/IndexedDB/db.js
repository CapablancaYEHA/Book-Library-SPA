import Dexie from 'dexie';

const db = new Dexie('MyBooksLibrary');
db.version(1).stores({ books: '++id' });

export {db};
