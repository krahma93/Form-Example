// const parts = document.location.href.split('?')[1]
// const searchstr = document.location.search
// console.log(parts)
// const queries = parts.split('&');
// const userName = queries[0].split('=');
// console.log(document.location)
const searchstr = document.location.search;

const queries = new URLSearchParams(searchstr);

const firstname = queries.get('first-name');
const lastname = queries.get('surname');
const username = queries.get('user-name');
const avatar = queries.get('avatar-url');

const accountCreated = document.getElementById('successfull-signup');
accountCreated.innerText = `Congratulations ${firstname} ${lastname}, \n you have successfully created an account, \n your username is ${username}. \n Here is a link to your Avatar ${avatar}`;

// console.log(queries)
// console.log(firstname)
// console.log(lastname);
// console.log(username);
// console.log(avatar);