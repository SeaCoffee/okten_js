async function getUsers() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let usersList = document.createElement("div")
            usersList.className = 'usersList'

            for (const user of users) {
                let userDiv = document.createElement("div")
                userDiv.className = 'user'

                let userInfo = document.createElement("div")
                userInfo.className = 'userInfo'
                userInfo.innerText = `${user.id}, ${user.name}`

                let button = document.createElement('button')
                button.className = 'button'
                button.innerText = 'Перейти'
                button.onclick = () => {
                    location.href = `user-details.html?id=${user.id}`
                };

                userDiv.appendChild(userInfo)
                userDiv.appendChild(button)
                usersList.appendChild(userDiv)
            }

            document.body.appendChild(usersList)
        })
        .catch(error => console.error('Error', error))
}

getUsers();



