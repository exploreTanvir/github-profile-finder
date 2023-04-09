class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `<div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}>
    <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4">View profile</a>
    </div>
    <div class="col-md-9">
    <span class="btn btn-primary">Public Repository : ${user.public_repos}</span>
    <span class="btn btn-secondary">Public Gists : ${user.public_gists}</span>
    <span class="btn btn-success">Followers : ${user.followers}</span>
    <span class="btn btn-info"> Following : ${user.following}</span>
    <br>
    <ul class="list-group">
    <li class="list-group-item">Name: ${user.name}</li>
    <li class="list-group-item">Email: ${user.email}</li>
    <li class="list-group-item">Followers: ${user.followers}</li>
    <li class="list-group-item">Following: ${user.following}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    </ul>
    </div>
    </div>
    </div>`;
  }
}
