var defaultUrl = "https://mhsprod.jira.com";

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', save);
    onload();
});
function onload() {
    var url = localStorage.getItem("url");
    var projectKey = localStorage.getItem("projectKey");

    if(url)
        document.getElementById("url").value = url;
    else
        document.getElementById("url").value = defaultUrl;

    if(projectKey)
        document.getElementById("projectKey").value = projectKey;
}

function save(){
    var url = document.getElementById("url").value.trim();
    var projectKey = document.getElementById("projectKey").value.trim();

    url = url.replace('/browse', '');
    url = url.replace('/browse/', '');

    localStorage.setItem("url", url);
    localStorage.setItem("projectKey", projectKey);
    document.getElementById('status').innerHTML = 'Saved.';
}