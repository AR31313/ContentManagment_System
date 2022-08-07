// const submitcomment = document.querySelectorAll(".confirmComment");

const confirmComment = async (event) => {
    event.preventDefault();
    console.log(event.target)

    const comment_text = document.querySelector('#comment').value.trim();
    const user_id = event.target.getAttribute('data-id');
    console.log(comment);

    if (comment_text) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment_text, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //reload the page on success - to see the comment post
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};



document
    .querySelector('.confirmComment')
    .addEventListener('click', confirmComment);

// cmtbutton.forEach((button) => {
//   button.addEventListener("click", confirmComment);
// });

// document
//     .querySelector('.confirmComment')
//     .addEventListener('click', confirmComment);



// console.log(document.querySelectorAll('.commentBtn'))
// if (document.querySelectorAll('.comment')) {

//     for (let index = 0; index < document.querySelectorAll('.commentBtn'); index++) {
//         // const commentdata = array[index];
//         document.querySelectorAll('.commentBtn')

//     }
//     // document.querySelector('.login-form').addEventListener('submit', loginFormHandler)
// };