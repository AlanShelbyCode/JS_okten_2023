// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
let div = document.createElement('div');
div.classList.add('main-user-info')
let getUserItem = (user) => {
    for (const userElement in user) {
        if (typeof user[userElement] === 'object') {
            const divElement = document.createElement('div');
            divElement.classList.add('div-users-info')
            divElement.innerText =`${userElement} -`;
            div.appendChild(divElement);
            getUserItem(user[userElement]);
        }
        else {
            const divElement = document.createElement('div');
            divElement.classList.add('div-users-info')
            divElement.innerText = `${userElement} : ${user[userElement]}`;
            div.appendChild(divElement);
        }
    }
}
getUserItem(user);
document.body.append(div);

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//  6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку
//  post-details.html, котра має детальну інфу про поточний пост.

let button = document.createElement('button');
button.classList.add('user-button')
button.innerText = 'Post of current user'
let divCenter = document.createElement('div')
divCenter.classList.add('div-center');
let divTitle = document.createElement('div');
divTitle.classList.add('container')

let isButtonClicked = false;
button.onclick = () =>{
    if (!isButtonClicked) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`, {})
            .then((response) => response.json())
            .then((usersPosts) => {
                for (const usersPostElement of usersPosts) {
                    const divPost = document.createElement('div')
                    divPost.classList.add('block')
                    let p = document.createElement('p');
                    p.classList.add('p-user')
                    p.innerText = `text : ${usersPostElement.title}`;
                    let a = document.createElement('a')
                    a.classList.add('a-user')
                    a.innerText = `click to read post`;
                    a.href = 'post-details.html?data=' + JSON.stringify(usersPostElement);
                    divPost.append(p, a)
                    divTitle.appendChild(divPost)
                }
                divCenter.appendChild(divTitle)
                document.body.appendChild(divCenter)
            })
    }
    isButtonClicked = true;

}
document.body.appendChild(button);