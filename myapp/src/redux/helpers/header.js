const HeaderToken = () => {
    let user = JSON.parse(localStorage.getItem("currentuser"));
    if (user && user.token) {
        return {"x-auth-token": user.token}
    } else {
        return null;
    }
};

export default HeaderToken;