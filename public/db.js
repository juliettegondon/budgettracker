//creating budget database request using indexedDB
let db;
const request = indexedDB.open("budget", 1);


// on upgrade (new request) create object store called "pending", auto increment 
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

// on a new request, if running online we send a request to the db.
// if the connection fails, send an error code
request.onsuccess = function(event) {
  db = event.target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};

// SAVE RECORD FUNCTION
// this function creates a transaction within the pending db to save a new record to it
function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite");
  // access pending object store
  const store = transaction.objectStore("pending");
  // add record to store with add method
  store.add(record);
}

// CHECK DATABASE FUNCTION
// this function accesses pending store and gets all records, sets to a variable
function checkDatabase() {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const getAll = store.getAll();


// when all records are set to the getAll variable, POST request is sent to the endpoint
// returns JSON response 
  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
          
        // if successful, open a transaction on pending
        const transaction = db.transaction(["pending"], "readwrite");

        // accesses pending
        const store = transaction.objectStore("pending");

        // CLEAR STORE ENTIRELY
        store.clear();
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);