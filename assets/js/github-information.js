// function fetchGitHubInformation(event) {

//     var username = $("#gh-username").val();
//     if (!username) {
//         $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`)
//         return;
//     }
    
//     $("#gh-user-data").html(
//         `<div id="loader" >
//             <img src="assets/images/photo-1501059520966-c59141726d6c.jpg" alt="loading..." />
//          </div>`);

// }

function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/Spinner-0.9s-144px.gif"/>
        </div>`);
}