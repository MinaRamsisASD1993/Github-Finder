class Github {
    constructor() {
        this.client_id = '4bb6eb805894bd94313b'
        this.client_secret = 'cf9a2026c9d92a648ab61f8360ebfb42438a5159'
    }

    async getUserInfo(username) {
        const response = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        const responseInJSON = await response.json();
        return responseInJSON;
    }

    async getUserRepos(username){
        //You are just gonna append /repos?per_page=5&sort='created: asc' .. latest
        const response = 
        await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort='created:asc'&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const responseInJSON = await response.json();
        return responseInJSON;
    }
}