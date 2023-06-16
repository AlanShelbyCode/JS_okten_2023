// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// те саме з user-details.js
let url = new URL(location.href);
let json = url.searchParams.get('data');
let post = JSON.parse(json);
let div = document.createElement('div');
div.classList.add('main-post-info')

let PostItem = (post) => {
    for (const postKey in post) {
        if (typeof post[postKey] === 'object') {
            const divPostKey = document.createElement('div');
            divPostKey.classList.add('div-post-info')
            divPostKey.innerText =`${postKey} -`;
            div.appendChild(divPostKey);
            getPostItem(post[postKey]);
        }
        //
        else {
            const divPostKey = document.createElement('div');
            divPostKey.classList.add('div-post-info')
            divPostKey.innerText = `${postKey} : ${post[postKey]}`;
            div.appendChild(divPostKey);
        }
    }
}
PostItem(post);

let h1 = document.createElement('h1')
h1.innerText = 'Comments'
document.body.append(div,h1);

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let divCenter = document.createElement('div')
divCenter.classList.add('div-center');
let divTitle = document.createElement('div');
divTitle.classList.add('container-post')

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, {
})
    .then((response) => response.json())
    .then((comments) => {
            for (const postElement of comments) {
                let div = document.createElement('div');
                div.classList.add('block-post')
                let getCommentItem = (comment) => {
                    for (const commentKey in comment) {
                        console.log(commentKey)
                        if (typeof comment[commentKey] === 'object') {
                            const divComment = document.createElement('div');
                            divComment.classList.add('div-post-comment')
                            console.log(comments[commentKey]);
                            divComment.innerText =`${commentKey} -`;
                            div.appendChild(divComment);
                            getCommentItem(comments[commentKey]);
                        } else {
                            const divComment = document.createElement('div');
                            divComment.classList.add('div-post-comment')
                            divComment.innerText = `${commentKey} : ${comment[commentKey]}`;
                            div.appendChild(divComment);
                        }
                    }
                }
                getCommentItem(postElement);
                divTitle.append(div);
            }
        divCenter.appendChild(divTitle)
        document.body.append(divCenter)

    })