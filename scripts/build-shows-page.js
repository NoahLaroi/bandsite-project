// let showsArray = [
//     {date:'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA'}, { date: 'Tue Sept 21, 2021', venue: 'Pier 3 East', location: 'San Francisco, CA'}, {date: 'Tue Sept 21 2021', venue:'View Lounge', location: 'San Francisco, CA'}, 
// ]
// function createTable(table) {
//     let thead = table.creatTHead();
//     let row = thead.insertRow();
// }

(function() { // < This line is similar to window.onLoad, it just makes sure that everything inside will run
    const section = [
        { name: "Ada", description: "medium, skinny, stinky" },
        { name: "Rider", description: "big, buff, stinky" },
        { name: "Pasha", description: "small, scrappy, stinky" },
    ];

    //get section where I would like to add my element to it
    const namesSection = document.getElementsByClassName("name-list");

    //Looping through my dogs array
    for (i = 0; i < comments.length; i++) {
        //create html to store the name value
        let p = document.createElement("P");
        //add a class so I know what to style *Not required
        p.classList.add("name-tag");
        //add the value of array to the html element
        p.innerHTML = comments[i].name;
        //append html element to the section
        namesSection[0].appendChild(p);
    }
})();