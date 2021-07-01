function isAuthenticated(){
  const token = localStorage.getItem('@Dev:token');
  const user = localStorage.getItem('@Dev:user');
  
  const validate = validateAuth(token);
  return validate;
}

function validateAuth(token){
  console.log('Token: '+token)
  if (token){
    return true
  }
  return false;
}

export { isAuthenticated }