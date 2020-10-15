// import your packages here
// import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component-specific stuff

    // set up the XMLHttp object
    let myReq = new XMLHttpRequest;
    myReq.addEventListener("readystatechange", handleRequest);

    //open a request and pass thru the url of the data that we want
    myReq.open('GET', '../DataSet.json');

    //actually make the request
    myReq.send();
    //handleRequest function goes here
    function handleRequest() {
debugger;

        if (myReq.readyState === XMLHttpRequest.DONE) {
            debugger;
            //check status here and proceed
            if (myReq.status == 200) {
                //200 means done and dusted, ready to go with the dataset!
                handleDataSet(myReq.responseText);
            } else {
                //probably got some kind of error code, so handle that 
                //a 404, 500 ...can render appropriate messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            debugger;
            //request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }
    }

    

    //select our user element and load the content
    function handleDataSet(data) {

        let myData = JSON.parse(data);
        let userSection = document.querySelector(".users-section");
        let userTemplate = document.querySelector("#user-template").content;
    


        for (let user in myData) {

            let currentUser = userTemplate.cloneNode(true);
            let currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
    }

    console.log(data);
    // handleDataSet(Team);
    
})();