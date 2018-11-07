const github = new Github();
const ui = new UI();
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', searchInProfile);

function searchInProfile() {
    const searchInputValue = searchInput.value;
    if (searchInputValue !== '') {
        document.getElementById('profile').style.display = "block";
        github.getUserInfo(searchInputValue)
            .then((result) => {
                if (result.message === 'Not Found') {
                    //UI NOT FOUND Show Alert [USER NOT FOUND]
                    document.getElementById('message').style.display = 'block';
                    setTimeout(function () {
                        msgDisapperAgain();
                    }, 2000);
                } else {
                    //Show Profile UI
                    // console.log(result);
                    ui.showProfile(result);

                    // console.log(repositories);
                }
            }).catch((err) => {
                console.log(err);
            });
        github.getUserRepos(searchInputValue)
            .then(repos => ui.showRepos(repos))
            .catch(err => console.log(err));
    } else { //Now when there is nothing in the searchInput display none for the 2 divs 
        document.getElementById('profile').style.display = "none";
        document.getElementById('repos').style.display = "none";

    }
}

function msgDisapperAgain() {
    document.getElementById('message').style.display = 'none';
}