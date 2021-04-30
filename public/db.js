let db;
// Create new db request for a 'budget' db
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = (event) => {
    // Create object store called "pending" and set autoIncrement to true
    const db = event.target.result;
    db.createObjectStore("pending", {
        autoIncrement: true
    });
};

request.onsuccess = (event) => {
    db = event.target.result;

    // Return online status of the browser 
    // True if online, false if offline
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = (event) => {
    // Log error in case of error
    console.log("Oops! " + event.target.errorCode);
}