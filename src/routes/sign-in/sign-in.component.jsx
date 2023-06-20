// import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  // auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // Sign in with redirect example
  // useEffect(() => {
  //   const getResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getResult();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign In </h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>

      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};

export default SignIn;
