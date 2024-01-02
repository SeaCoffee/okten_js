
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let list = document.createElement('ul')
        for (const user of users) {
            let li = document.createElement('li')
            let link = document.createElement('a')
            link.href = `user-details.html?id=${user.id}`
            link.textContent = `${user.id}, ${user.name}`

            li.appendChild(link)
            list.appendChild(li)
        }
        document.body.appendChild(list)
    });
