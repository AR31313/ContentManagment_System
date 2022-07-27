async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

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