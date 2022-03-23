import * as Yup from  "yup"

export function validationLogIn () {
    return {
        userName: Yup.string().required("Username cannot be empty"), 
        password:  Yup.string().required("Password cannot be empty") 
    }
}