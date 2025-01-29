const ValidationFormObject ={
    validteName : (name)=>{
        const nameRegex = /^[a-z,A-Z][a-zA-Z\s'-]{1-49}$/;
        if(name.length < 2){
            return 'Name cannot be less than 2 letter';
        }
        if(!nameRegex.test(name)){
            return 'Name should not have any symbols';
        }
        return true;
    },
    validatePass: (password)=>{
        const passwordRegex={
            minLength:8,
            maxLength:128,
            hasUpperCase:/[A-Z]/,
            hasLowerCase:/[a-z]/,
            hasSpecialChar:/[!@#$%^&*()_+\-=[\]]/
        };
        if(password.length < passwordRegex.minLength) {
            return "Password Should be more than or equal to 8 character";
        }
        if(password.length > passwordRegex.maxLength){
            return "Password Should be less than 128 characters";
        }
        if(!passwordRegex.hasLowerCase.test(password)){
            return "Password Should ";
        }
    }

}