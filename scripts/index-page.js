window.onload = () => {
    const keyCode = { api_key: '755ba649-59c6-4b86-9bbd-e96a2b149b2e' };
    let commentsArray = axios
        .get('https://project-1-api.herokuapp.com/comments?api_key=y55ba649-59c6-4b86-9bbd-e96a2b149b2e')
        .then((response) => {

            return (response.data)
        })
        .then((response) => {

            commentLoop(response)
        });
    const form = document.getElementById('userForm');
    const postedComments = document.querySelector('#postedComments');
    const commentSection = document.querySelector('CommentSection');

    let commentBoxDiv = document.createElement('div');
    commentBoxDiv.classList.add('commentBox');
    postedComments.append(commentBoxDiv);

    function commentLoop(commentsArray) {
        for (let i = 0; i < commentsArray.length; i++) {
            let profileImg = document.createElement('div');
            profileImg.classList.add('profileImg');
            //This is the code for the names to be implemented
            let nameTag = document.createElement('p');
            nameTag.classList.add('name');
            nameTag.innerHTML = commentsArray[i].name;
            //This is the code for the dates to be implemented -- The UTC date had to be converted so that it is readable
            let dateTag = document.createElement('p');
            let humanReadableDate = new Date(Number(commentsArray[i].timestamp)).toLocaleDateString()
            dateTag.classList.add('timestamp');
            dateTag.innerHTML = humanReadableDate;
            //This div separates the name and profile picture from the date
            let nameAndPic = document.createElement('div');
            nameAndPic.classList.add('nameAndPic');
            nameAndPic.appendChild(profileImg);
            nameAndPic.appendChild(nameTag);
            //This is a div that I created in order
            //to house the profile, name, and date
            //so that they span across the top of
            //the comment box
            let topContainer = document.createElement('div');
            topContainer.classList.add('topContainer');
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
            commentBoxDiv.appendChild(Boxbreak);
        }
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        //This is all the coding for rendering the current date
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const fullDate = document.createElement('p');
        fullDate.innerHTML = currentMonth + 1 + '/' + currentDay + '/' + currentYear;
        let profilePicNewComment = document.createElement('div');
        profilePicNewComment.classList.add('newProfilePic');
        let commentBreak = document.createElement('hr');
        let userName = document.createElement('p');
        userName.innerHTML = event.target.user_name.value;
        let commentText = document.createElement('p');
        commentText.classList.add('comment')
        commentText.innerHTML = event.target.comment_submission.value;
        let newCommentDiv = document.createElement('div');
        let topContainer = document.createElement('div');
        topContainer.classList.add('topContainer');
        let nameAndPic = document.createElement('div');
        // let newComment = userName + fullDate + commentText;
        nameAndPic.classList.add('nameAndPic')
        nameAndPic.appendChild(profilePicNewComment);
        nameAndPic.appendChild(userName);
        topContainer.appendChild(nameAndPic);
        topContainer.appendChild(fullDate);
        //The new comment to be generated at the form submission event
        newCommentDiv.classList.add('commentBox');
        // newCommentDiv.innerHTML = newComment;
        postedComments.prepend(newCommentDiv);
        newCommentDiv.appendChild(topContainer);
        newCommentDiv.appendChild(commentText)
        newCommentDiv.appendChild(commentBreak);
        //Clear comments on submission event
        document.querySelector("input").value = '';
        document.querySelector("textarea").value = '';
    });
};