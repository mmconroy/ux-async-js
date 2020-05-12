window.onload = function () {
  // Run this once the page has loaded.
  // search
  document
    .querySelector("#searchButton")
    .addEventListener("click", searchGithub);
  function searchGithub() {
    const searchUserText = document.querySelector("#searchUser").value;
    fetch("https://api.github.com/search/users?q=" + searchUserText)
      .then((response) => response.json())
      .then((result) => {
        let githubUsers = result.items;
        renderUserList(githubUsers);
      });
  }

  function renderUserList(githubUsers) {
    let html = "";
    html += "<ul>";
    for (let i = 0; i < githubUsers.length; i++) {
      let githubUser = githubUsers[i];
      html += "<li>";
      html += `<strong>${githubUser.login}</strong>`;
      html += `<a target="_blank" href="${githubUser.html_url}">`;
      html += `<img class="user_avatar" src="${githubUser.avatar_url}"></img>`;
      html += "</li>";
    }
    html += "</ul>";

    document.querySelector("#resultsContainer").innerHTML = html;
  }
};
