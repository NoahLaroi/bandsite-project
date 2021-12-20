window.onload = () => {
    const keyCode = { api_key: '755ba649-59c6-4b86-9bbd-e96a2b149b2e' };
    let showsArray = axios
        .get('https://project-1-api.herokuapp.com/showdates?api_key=y55ba649-59c6-4b86-9bbd-e96a2b149b2e')
        .then((response) => {

            return (response.data)
        })
        .then((response) => {

            dateLoop(response)
            altDateLoop(response)
        });
    let mainShow = document.querySelector('.mainShow');
    let mainShowTitle = document.createElement('h2');
    mainShowTitle.classList.add('mainShowTitle');
    mainShowTitle.innerHTML = 'Shows'
    mainShow.appendChild(mainShowTitle);


    function dateLoop(showsArray) {
        for (let i = 0; i < showsArray.length; i++) {

            let mainShowButton = document.createElement('button')
            mainShowButton.classList.add('mainShowButton')
            mainShowButton.innerHTML = 'BUY TICKETS'

            let showBreak = document.createElement('hr')
            showBreak.classList.add('showBreak');

            let dateTitle = document.createElement('h3');
            dateTitle.innerHTML = 'DATE'

            let pDate = document.createElement("p")
            let humanReadableDate = new Date(Number(showsArray[i].date)).toDateString()
            pDate.classList.add("show__info")
            pDate.innerHTML = humanReadableDate;

            let venueTitle = document.createElement('h3');
            venueTitle.innerHTML = 'VENUE'

            let pVenue = document.createElement("p")
            pVenue.classList.add("show__info")
            pVenue.innerHTML = showsArray[i].place

            let locationTitle = document.createElement('h3');
            locationTitle.innerHTML = 'LOCATION'

            let pLocation = document.createElement("p")
            pLocation.classList.add("show__info")
            pLocation.innerHTML = showsArray[i].location

            let mainShow = document.querySelector('.mainShow')


            mainShow.appendChild(dateTitle);
            mainShow.appendChild(pDate);
            mainShow.appendChild(venueTitle);
            mainShow.appendChild(pVenue);
            mainShow.appendChild(locationTitle);
            mainShow.appendChild(pLocation);
            mainShow.appendChild(mainShowButton);
            mainShow.appendChild(showBreak);
        }

    };

    function altDateLoop(altShowsArray) {
        // let altShowsArray = [{ date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA' },
        //     { date: 'Tue Sept 21, 2021', venue: 'Pier 3 East', location: 'San Francisco, CA' },
        //     { date: 'Tue Sept 21 2021', venue: 'View Lounge', location: 'San Francisco, CA' },
        //     { date: 'Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
        //     { date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA' },
        //     { date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA' }
        // ];
        let altMainShow = document.querySelector('.altMainShow');

        let altMainShowTitle = document.createElement('h2');
        altMainShowTitle.classList.add('altMainShowTitle');
        altMainShowTitle.innerHTML = 'Shows'
        altMainShow.appendChild(altMainShowTitle);

        let altMainShowTable = document.createElement('table');
        altMainShowTable.classList.add('altMainShowTable');
        altMainShow.appendChild(altMainShowTable);

        let altDateTitle = document.createElement('thead');
        altDateTitle.innerHTML = 'DATE'
        altMainShowTable.appendChild(altDateTitle);

        let altVenueTitle = document.createElement('thead');
        altVenueTitle.innerHTML = 'VENUE'
        altMainShowTable.appendChild(altVenueTitle);

        let altLocationTitle = document.createElement('thead');
        altLocationTitle.innerHTML = 'LOCATION'
        altMainShowTable.appendChild(altLocationTitle);

        let buttonRowHead = document.createElement('thead');
        buttonRowHead.classList.add('buttonRowHead');
        buttonRowHead.innerHTML = 'Some Text'
        altMainShowTable.appendChild(buttonRowHead)

        let dateRow = document.createElement('tr');
        dateRow.classList.add("dateRow");
        altDateTitle.appendChild(dateRow);

        let venueRow = document.createElement('tr');
        venueRow.classList.add("venueRow");
        altVenueTitle.appendChild(venueRow);

        let locationRow = document.createElement('tr');
        locationRow.classList.add("locationRow");
        altLocationTitle.appendChild(locationRow);

        let buttonRow = document.createElement('tr')
        buttonRow.classList.add('buttonRow');
        buttonRowHead.appendChild(buttonRow);

        for (let i = 0; i < altShowsArray.length; i++) {


            let altPDate = document.createElement("td")
            altPDate.classList.add("altPDate")
            let humanReadableDate = new Date(Number(altShowsArray[i].date)).toDateString()
            altPDate.innerHTML = humanReadableDate;

            let altPVenue = document.createElement("td")
            altPVenue.classList.add("altPVenue")
            altPVenue.innerHTML = altShowsArray[i].place

            let altPLocation = document.createElement("td")
            altPLocation.classList.add("altpLocation")
            altPLocation.innerHTML = altShowsArray[i].location

            let altMainShowButtonContainer = document.createElement('td')
            altMainShowButtonContainer.classList.add('altMainShowButtonContainer')

            let altMainShowButton = document.createElement("div")
            altMainShowButton.classList.add('mainShowButton')
            altMainShowButton.innerText = 'BUY TICKETS'

            dateRow.appendChild(altPDate);
            venueRow.appendChild(altPVenue);
            locationRow.appendChild(altPLocation);
            buttonRow.appendChild(altMainShowButton);
            buttonRowHead.appendChild(altMainShowButtonContainer);
            altMainShowButtonContainer.appendChild(altMainShowButton);
        }
    }
};