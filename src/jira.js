var defaultUrl = "https://mhsprod.jira.com";

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', openIssue);
    document.querySelector('input').addEventListener('keydown', keydown);
    document.querySelector('#options').addEventListener('click', showOptions);
    onload();
});
function onload() {
    var projectKey = localStorage.getItem("projectKey");
    if(projectKey) document.getElementById("issueId").value = projectKey + '-';

    document.getElementById("issueId").focus();
}
function keydown (event) {
    if(event.keyCode==13) openIssue();
}
function openIssue(){
    var issueId = document.getElementById("issueId").value.trim();

    if (issueId.trim() == '') return;

    addToStorage(issueId);
    openJira(issueId)
}
function addToStorage(issueId) {
    var projectKey = issueId.substr(0, issueId.indexOf('-'));
    if(projectKey != '') {
        localStorage.setItem("projectKey", projectKey);
    }
}
function openJira(issueId) {
    var url = localStorage.getItem("url") || defaultUrl;

    window.open(url+ "/browse/" + issueId);
}
function showOptions() {
    chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
}