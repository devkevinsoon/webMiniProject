const emailCheck = (email) => {
    const emailRegExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegExp.test(email);
};
    
const pwdCheck = (pwd) => {
    const pwdRegExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/i;
    return pwdRegExp.test(pwd);
};

export { emailCheck, pwdCheck }