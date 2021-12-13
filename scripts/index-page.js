window.onload = () => {
    commentsArray = [{ name: 'Connor Walton', date: '02/17/2021', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' }, { name: 'Emilie Beach', date: '01/09/2021', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' }, {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: 'I can\'t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can/t get enough.'
    }];

    const form = document.getElementById('userForm');
    const postedComments = document.querySelector('#postedComments')
    const commentSection = document.querySelector('CommentSection')

    let commentBoxDiv = document.createElement('div');
    commentBoxDiv.classList.add('commentBox');
    postedComments.append(commentBoxDiv);
    for (let i = 0; i < commentsArray.length; i++) {
        let profileImg = document.createElement('div');
        profileImg.classList.add('profileImg');
        //This is the code for the names to be implemented 
        let nameTag = document.createElement('p');
        nameTag.classList.add('name');
        nameTag.innerHTML = commentsArray[i].name;
        //This is the code for the dates to be implemented 
        let dateTag = document.createElement('p');
        dateTag.classList.add('date');
        dateTag.innerHTML = commentsArray[i].date;
        //This div separates the name and profile picture from the date 
        let nameAndPic = document.createElement('div')
        nameAndPic.classList.add('nameAndPic')
        nameAndPic.appendChild(profileImg)
        nameAndPic.appendChild(nameTag)
            //This is a div that I created in order 
            //to house the profile, name, and date 
            //so that they span across the top of 
            //the comment box
        let topContainer = document.createElement('div');
        topContainer.classList.add('topContainer')
        commentBoxDiv.appendChild(topContainer);
        topContainer.appendChild(nameAndPic);
        topContainer.appendChild(dateTag);
        //This is the code for the comments to be implemented 
        let postedCommentText = document.createElement('p');
        postedCommentText.classList.add('comment');
        postedCommentText.innerHTML = commentsArray[i].comment;
        commentBoxDiv.appendChild(postedCommentText);
        //This is where I will add my divider 
        let Boxbreak = document.createElement('hr');
        commentBoxDiv.appendChild(Boxbreak)
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const fullDate = (currentMonth + 1) + "/" + currentDay + "/" + currentYear;
        document.createElement('p');
        fullDate
        let profilePicNewComment = document.querySelector('.profilePicture');
        let userName = event.target.user_name.value
        let commentText = event.target.comment_submission.value
        let newComment = profilePicNewComment + userName + fullDate + commentText;
        let newCommentDiv = document.createElement('div')
        newCommentDiv.classList.add('commentBox')
        newCommentDiv.innerHTML = newComment
        postedComments.prepend(newCommentDiv);
    });
}