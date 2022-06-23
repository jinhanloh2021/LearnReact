import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //put in dummy default function.
  onLogin: (email, password) => {},
}); //an object that contains a component.

//sets up context and handles all the login state.
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (+localStorage.getItem('isLoggedIn')) setIsLoggedIn(true);
  }, []);
  //dependency: [], useEffect() will run after first render
  //dependency: void, useEffect() will run after every render
  //dependency: [dependency], useEffect() will run after first, and after every update of dependency.

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

/*
  When to use and not to use context:
Context is use for passing specific information to a specific component, where that component will only 
use that information.
So we should use context to pass logoutHandler to the Button component, because Button could also be
used for submit, or login. useContext on Button will strongly bind it to logout, which we do not want.
If we use context, then we have to create separate buttons for login, logout, ...
In this case, passing down the handler through props will actually be better, as we can vary the prop
and make the button reusable based on the prop.
We also shouldn't use context to pass down info for one level only. If it's only one level, we can just
use props, which is less code and one less file to write.

This creates a context, which we can then export and use in other components. This gives that component
access to the state isLoggedIn.
In the JSX that we are returning, we can wrap the parts that require access to our stat with
<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
  <CustomComponents/>       //CustomComponents and all their children components will have access to our state.
</AuthContext.Provider>

//in CustomComponent.js
return (
  <AuthContext.Consume>
    {(context) => {
      return (
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      );
    }};
  </AuthContext.Consume>
);


Using hooks, we can use the useContext() hook to get our state in the component.
The parent component remains the same, but in our CustomComponent, we have to use the hook.
//in CustomComponent.js
const context = useContext(AuthContext); //import AuthContext
return (
  <AuthContext.Consume>
    {context.isLoggedIn && (
      <li>
        <button onClick={props.onLogout}>Logout</button>
      </li>
    )}
  </AuthContext.Consume>
)


Dynamic context, allows us to pass around Functions, such as logoutHandler, not just states like isLoggedIn.

*/
