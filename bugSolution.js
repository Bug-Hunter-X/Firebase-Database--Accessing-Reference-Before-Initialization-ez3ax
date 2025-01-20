To fix this, you need to ensure that the database operation is performed only after the Firebase app has fully initialized. You can do this by performing the database operation inside a `.then()` block of the `firebase.initializeApp()` promise, or by using an asynchronous function.  Here's how:

```javascript
import firebase from 'firebase/app';
import 'firebase/database'; // Import the database module

// ... your Firebase configuration

firebase.initializeApp(firebaseConfig);

componentDidMount() {
  firebase.database().ref('myData').once('value').then(snapshot => {
    console.log(snapshot.val());
  });
}
```
This solution ensures that the `firebase.database().ref('myData').once('value')` is executed only after Firebase is initialized and prevents the error.