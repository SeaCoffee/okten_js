
/*зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))

*/

/*вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let nameIdUsers = []
        for (const user of users) {
            nameIdUsers.push({ id: user.id, name: user.name })
        }
        return nameIdUsers
    })
    .then(nameIdUsers => {
        let list = document.createElement('ul')
        for (const user of nameIdUsers) {
            let li = document.createElement('li')
            let link = document.createElement('a')
            link.href = `user-details.html?id=${user.id}`
            link.textContent = `${user.id}, ${user.name}`

            li.appendChild(link)
            list.appendChild(li)
        }
        document.body.appendChild(list)
    });
 */

/* при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
 отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)*/

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let nameIdUsers = []
        for (const user of users) {
            nameIdUsers.push({ id: user.id, name: user.name })
        }
        return nameIdUsers
    })
    .then(nameIdUsers => {
        let list = document.createElement('ul')
        for (const user of nameIdUsers) {
            let li = document.createElement('li')
            let link = document.createElement('a')
            link.href = `https://jsonplaceholder.typicode.com/users/${user.id}`
            link.textContent = `${user.id}, ${user.name}`

            li.appendChild(link)
            list.appendChild(li)
        }
        document.body.appendChild(list)
    });
