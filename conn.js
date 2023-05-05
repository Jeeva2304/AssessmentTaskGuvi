
const form = document.querySelector('#user-form');
const userList = document.querySelector('#user-list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age')
  };
  const response = await fetch('/submit-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const result = await response.json();
  console.log(result);
  updateUserList();
});

async function updateUserList() {
  const response = await fetch('/users');
  const users = await response.json();
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email}) - Age ${user.age}`;
    userList.appendChild(li);
  });
}
