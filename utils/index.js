const getData = (data, count) => {
    return data.slice(0, count);
};

const getUsers = (data, firstName) => {
    return data.slice(0, firstName);
};
// TODO функция c двумя параметрами getUsers(data, firstName)

module.exports = {
    getData,
    getUsers
};
