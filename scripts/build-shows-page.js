window.onload = () => {
    let showsArray = [{ date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA' },
        { date: 'Tue Sept 21, 2021', venue: 'Pier 3 East', location: 'San Francisco, CA' },
        { date: 'Tue Sept 21 2021', venue: 'View Lounge', location: 'San Francisco, CA' },
        { date: 'Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
        { date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA' },
        { date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA' }
    ];
    for (let i = 0; i < showsArray.length; i++) {
        console.log(i)
        let pDate = document.createElement("p")
        pDate.classList.add("show__info")
        pDate.innerHTML = showsArray[i].date

        let pVenue = document.createElement("p")
        pVenue.classList.add("show__info")
        pVenue.innerHTML = "venue";

        let pLocation = document.createElement("p")
        pVenue.classList.add("show__info")
        pVenue.innerHTML = showsArray[i].location

        let mainShow = document.querySelector('.mainShow')
        mainShow.appendChild(pDate);
        mainShow.appendChild(pVenue);
        mainShow.appendChild(pLocation);
    }
};