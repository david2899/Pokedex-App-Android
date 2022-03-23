import { View, Text, TextInput, Button } from "react-native";
import { useFormik} from "formik";
import * as Yup from  "yup"
import React,  {useState} from "react";
import { stylesLoginForm } from "../../Styles/LoginForm";
import { initialValues } from "../../utils/initialValues";
import { validationLogIn } from "../../utils/formValidations";
import {user, userDetails} from "../../utils/userDB";
import UseAuth from "../../Hooks/UseAuth";

export default function LoginForm() {
  const [error, setError] = useState("")

  const { logIn } = UseAuth()


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationLogIn()),
    onSubmit: (formValue) => {
      setError("")
      const {userName, password} = formValue;
      if(userName !== user.userName || password !== user.password) {
        setError("Incorrect user or password")
      } else {
        logIn(userDetails)
      }
    }
  });

  return (
    <View style={stylesLoginForm.content}>
      <Text style={stylesLoginForm.title}>Log In</Text>
      <TextInput
        placeholder="User Name"
        style={stylesLoginForm.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue("userName", text)}
      />
      <TextInput
        placeholder="Password"
        style={stylesLoginForm.input}
        secureTextEntry={true}
        autoCapitalize="none"
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button 
      title="Entrar"
      style={stylesLoginForm.button}
      onPress={() => formik.handleSubmit()}
       />
       <Text style={stylesLoginForm.error}>
         {formik.errors.userName}
       </Text>
       <Text style={stylesLoginForm.error}>
         {formik.errors.password}
       </Text>
       <Text style={stylesLoginForm.error}>
         {error}
       </Text>
    </View>
  );
}
