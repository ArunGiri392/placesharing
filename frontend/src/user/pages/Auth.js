import React, { forwardRef, useState, useContext } from "react";

import { useForm } from "../../shared/components/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/validators";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AuthContext } from "../../shared/components/context/auth-context";
import { useHttpClient } from "../../shared/components/hooks/http-hook";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://3.83.241.237:8000/api/users/login/',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.user.id);
        
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          'http://3.83.241.237:8000/api/users/signup/',
          'POST',
          JSON.stringify({
            username: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value, 
            image_url : formState.inputs.image_url.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );

        auth.login(responseData.id);
      } catch (err) {}
    }
    
    
    
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    <Card className="authentication">
      {isLoginMode && <h2>Login Required</h2> }
      {!isLoginMode && <h2>SignUp</h2> }

    
      <hr />
      <form className="place-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <>
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter a name"
            placeholder="Use letters, digits, @/./+/-/_ only"
            onInput={inputHandler}
          />

          <Input
              element="input"
              id="image_url"
              type="text"
              label="image_url"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid image URL"
              onInput={inputHandler}
            />
            </>
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid Email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, atleast a 5 characters"
          onInput={inputHandler}
        />
        

         
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
    </React.Fragment>
  );
};
export default Auth;
