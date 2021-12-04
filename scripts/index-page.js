window.onload = () => {
    const form = document.getElementById('userForm');
    // const textNode = document.createTextNode('data here')
    const postedComments = document.getElementById('postedComments')
    form.addEventListener('submit', function addComment(event) {
        event.preventDefault();
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const fullDate = (currentMonth + 1) + "/" + currentDay + "/" + currentYear;
        let newComment = postedComments.append(event.target.user_name.value, event.target.comment_submission.value);
        if (newComment = true) { postedComments.append(fullDate) };
    });
}