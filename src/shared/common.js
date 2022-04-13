const emailCheck = (email) => {
    const emailRegExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegExp.test(email);
};
    
const pwdCheck = (pwd) => {
    const pwdRegExp = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return pwdRegExp.test(pwd);
};

export { emailCheck, pwdCheck }