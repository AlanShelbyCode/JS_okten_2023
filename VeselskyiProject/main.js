// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users', {})
        .then((response) => response.json())
        .then((users) =>{
            let div = document.createElement('div');
            div.classList.add('user-item');
            let divLeft = document.createElement('div');
            let divRight = document.createElement('div');
            divLeft.classList.add('divLeft-user-item');
            divRight.classList.add('divRight-user-item');
        for (const user of users) {
            if (user.id%2 === 0) {
                let a = document.createElement('a')
                a.classList.add('a-main')
                a.innerText = `id: ${user.id}   name: ${user.name}`;
                a.href = 'user-details.html?data='+ JSON.stringify(user);
                divLeft.append(a);
            }else {
                    let a = document.createElement('a')
                    a.classList.add('a-main')
                    a.innerText = `id: ${user.id} name: ${user.name}`;
                    a.href = 'user-details.html?data=' + JSON.stringify(user);
                    divRight.append(a);
            }
            div.append(divRight, divLeft)
        }
            document.body.appendChild(div);
    })

