//1. API URL
const url = "https://jsonplaceholder.typicode.com/users";

//2. Fetch User from the API URL
function fetchUsers() {
  //Using Browser Fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //Passing the Data using Render function
      renderUsers(data);
    });
}

//3.1 Render the user in the DOM
function renderUsers(usersData) {
  const ul = document.getElementById("user-list-container");

  //3.2Render an Li tag for each of the users
  usersData.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span> ${index + 1}.</span>
    <span> ${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span>`;
    //3.2 Appending the current user li tag to the UL tag
    ul.appendChild(li);
  });
}

// 4.Add a search function to the DOM// Calling function
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");

  //Looping through the users and render the ones that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}

//Calling the fetch function
fetchUsers();
