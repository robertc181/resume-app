// function sendMail(contactForm){
//     emailjs.send("Rosie","Rosie",{
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "project_request": contactForm.projectSummary.value,
//         })
//         .then(
//             function(response){
//                 console.log("success", response)
//             },
//             function(error) {
//                 console.log("failed", error)
//             }
//         )
// }

function sendMail(contactForm) {
    emailjs.send("Rosie", "Rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

