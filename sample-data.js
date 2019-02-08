const users =[
    {
        id: 1,
        name: 'xyz',
        email: 'xyz@gmail.com',
        phone: 123
    },
    {
        id: 2,
        name: 'abc',
        email: 'abc@gmail.com',
        phone: 456
    },
    {
        id: 3,
        name: 'lmn',
        email: 'lmn@gmail.com',
        phone: 7798
        
    }
]
localStorage.setItem('users',JSON.stringify(users));

$(document).ready(()=>{
console.log('jquery loaded');
let rows='';

users.forEach((user)=>{
    let action = `<button id='edit' onclick='editU(${user.id})'>Edit User</button><button id='delete' onclick='deleteU(${user.id})'>Delete User</button>`
    rows =rows + `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td><td>${action}</td></tr>`; 
});
let table = `<table><tr><th>S.no</th><th>Name</th><th>Email</th><th>Phone</th><th>Action</th></tr>${rows} </table>`;

$('#content').html(table);

//edit



// delete
$('#delete').click((e)=>{
    e.preventDefault();
    console.log($('#delete').val());
});
});
function editU(id){
    const dbUsers =JSON.parse(localStorage.getItem('users'));
    const userFound =dbUsers.find((u)=>{
        return u.id == id;
    });
    const newDbUsers = dbUsers.filter((u)=>{
        return u.id != userFound.id
    });
    const newUser = {
        id: id,
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
    }
    newDbUsers.push(newUser);
    localStorage.setItem('users',JSON.stringify(newDbUsers));

    window.location ='Sample.html';

}
function deleteU(id){
    //console.log(id);
    const dbUsers =JSON.parse(localStorage.getItem('users'));
    const userFound =dbUsers.find((u)=>{
        return u.id == id;
    });
    const newDbUsers = dbUsers.filter((u)=>{
        return u.id != userFound.id
    });
    let nRows='';
    let nAction='';
    newDbUsers.forEach((user)=>{
        nAction = `<button id='edit' onclick='editU(${user.id})'>Edit User</button><button id='delete' onclick='deleteU(${user.id})'>Delete User</button>`
        nRows =nRows + `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td><td>${nAction}</td></tr>`; 
    });
    let table = `<table><tr><th>S.no</th><th>Name</th><th>Email</th><th>Phone</th><th>Action</th></tr>${nRows} </table>`;
    $('#content').html(table);
    localStorage.setItem('users',JSON.stringify(newDbUsers));
    //console.log(newDbUsers);

}