import { getUsers, deleteUser } from "./api/userApi";

import './index.css';

getUsers().then(res => {
  let usersBody = "";

  res.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const delUsers = global.document.getElementsByClassName('delete-user');

  Array.from(delUsers, link => {
    link.onclick = function(e) {
      const el = e.target;
      e.preventDefault();
      deleteUser(el.attributes["data-id"].value);
      const row = el.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  })
});
