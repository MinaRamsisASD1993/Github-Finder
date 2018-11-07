class UI {
    constructor() {}

    showProfile(userData) { //userData is an Object of many properties 
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML =
            `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" src="${userData.avatar_url}" >
                    <a href="${userData.html_url}" class="btn btn-primary btn-lg btn-block my-3">
                    View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <button type="button" class="btn btn-primary my-2" disabled>
                    Public Repos: ${userData.public_repos}</button>
                    <button type="button" class="btn btn-secondary my-2" disabled>
                    Public Gists: ${userData.public_gists}</button>
                    <button type="button" class="btn btn-success my-2" disabled>
                    Followers: ${userData.followers}</button>
                    <button type="button" class="btn btn-info my-2" disabled>
                    Following: ${userData.following}</button>

                    <table class="table table-hover">
                        <tr><td>Company: ${userData.company}<td></tr>
                        <tr><td>Website/Blog: ${userData.blog}<td></tr>
                        <tr><td>Location: ${userData.location}<td></tr>
                        <tr><td>Member Since: ${userData.created_at}<td></tr>
                    </table>
                </div>
            </div>
        </div>

        
        `;
    }
    showRepos(repos) {
        const reposSection = document.getElementById('repos');
        if (repos.length === 0) {
            console.log("No repos");
            reposSection.style.display = 'none';
        } else {
            reposSection.style.display = 'block';
            let ouput = '';
            repos.forEach(repo => {
                ouput +=
                    `
                    <div class="card card-body  my-2">
                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-primary my-2" disabled>
                                Stars: ${repo.stargazers_count}</button>
                                <button type="button" class="btn btn-success my-2" disabled>
                                Forks: ${repo.forks_count}</button>
                                <button type="button" class="btn btn-dark my-2" disabled>
                                Language: ${repo.language}</button>
                            </div>
                        
                        </div>
                        
                    </div>
                `;
            });
            reposSection.innerHTML = ouput;
        }

    }
}