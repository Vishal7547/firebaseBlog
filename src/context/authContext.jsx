import { createContext ,useState,useEffect, useContext} from "react";

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut,onAuthStateChanged} from "firebase/auth";
import { auths,db } from "../firebase/configure";
  import { addDoc, collection, doc, setDoc,Timestamp,getDocs } from "firebase/firestore"; 

const auth=createContext();
export const useAuth=()=>{
  return useContext(auth);
}


const AuthContext = ({children}) => {
    
const [authentication,setAuthentication]=useState(localStorage.getItem('isLoggedIn')===true?true:false);
const [value,setValue]=useState([]);
const [comment,setComment]=useState([]);


// signup
const handleSignupAuth=(x)=>{
    console.log('x',x)
createUserWithEmailAndPassword(auths, x.email, x.password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.reloadUserInfo.localId)
    // Add a new document in collection "cities"
  await setDoc(doc(db, "user",user.reloadUserInfo.localId ), {
 name:x.name,
 email:x.email,
date: Timestamp.fromDate(new Date()),
});
localStorage.setItem('isLoggedIn', true );
setAuthentication(true);
setAuthentication(localStorage.getItem('isLoggedIn')==='true'?true:false);

// window.location.pathname='/';



  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  
  });


}

// login
const handleLoginAuth=(x)=>{
console.log('xLogin',x)



signInWithEmailAndPassword(auths, x.email,x.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('login',user)
    // ...
localStorage.setItem('isLoggedIn', true );
setAuthentication(localStorage.getItem('isLoggedIn')==='true'?true:false);
// window.location.pathname='/';





  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('loginError',error)

  });
}

const logoutAuths=()=>{


signOut(auths).then(() => {
  // Sign-out successful.
localStorage.setItem('isLoggedIn', false );
setAuthentication(localStorage.getItem('isLoggedIn')==='false'?false:true);

// window.location.pathname='/login';


  console.log(" Sign-out successful.")
}).catch((error) => {
  // An error happened.
  console.log(" Sign-out error.",error)

});
}

// useEffect(()=>{
// const realUpdate=()=>{



// onAuthStateChanged(auths, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
// localStorage.setItem('isLoggedIn', true );
// setAuthentication(localStorage.getItem('isLoggedIn'));
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log('error')
//   }
// });
// }
// realUpdate()
// },[])
// ************************************************************
const handleCreate=async(x)=>{
await addDoc(collection(db,'posts'),x)
}

// ********************************************************
// get data from firebase (posts)
useEffect(() => {
const getData=async()=>{
const querySnapshot = await getDocs(collection(db, "posts"));
const store=querySnapshot.docs.map((doc) => {
return {
    ...doc.data(),
    id:doc.id,
}
});
console.log("data",store)
setValue(store);
}
getData();
  
}, [])

const handleComment=async (x)=>{
await addDoc(collection(db,'comments'),{x})

}


// ********************************************************
// get data from firebase (posts)
useEffect(() => {
const getData=async()=>{
const querySnapshot = await getDocs(collection(db, "comments"));
const store=querySnapshot.docs.map((doc) => {
return {
    ...doc.data(),
    id:doc.id,
}
});
console.log("comment:-",store)
setComment(store)
}
getData();
  
}, [])
  return (
    <div>
      <auth.Provider value={{handleSignupAuth,handleLoginAuth,authentication,logoutAuths,handleCreate,value,handleComment,comment}}>
    {children}
      </auth.Provider>
    </div>
  )
}

export default AuthContext

