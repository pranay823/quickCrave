
 export const Validate=(email,password)=>{ 
const email_result = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
const password_result =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(password)

if(email_result && password_result){
return null;
}
else if(!email_result && password_result){
    return "Email is not valid";
}
else if(email_result && !password_result){
    return " password not valid"
}
else{
    return "email and password not valid"
}
}