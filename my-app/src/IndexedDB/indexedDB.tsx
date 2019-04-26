
var db;
var request = indexedDB.open("MyTestDatabase", 1);

request.onsuccess = function(event) {
  db = event.target.result;
};

db.onerror = function(event) {
  // Generic error handler for all errors targeted at this database's
  // requests!
  alert("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = function(event) {
  // Save the IDBDatabase interface
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("name", { keyPath: "myKey", autoIncrement: true });
};
