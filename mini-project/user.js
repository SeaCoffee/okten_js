let userId = new URL(location.href).searchParams.get('id') || 1

async function getUser() {
    await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            let userDiv = document.createElement("div")
            userDiv.className = 'userFullInfo'
            userDiv.innerHTML = `
                <p>id: ${user.id}</p>
                <p>name: ${user.name}</p>
                <p>username: ${user.username}</p>
                <p>email: ${user.email}</p>
                <p>address: street ${user.address.street}, suite ${user.address.suite}, city ${user.address.city}, zipcode ${user.address.zipcode}</p>
                <p>geo: lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</p>
                <p>phone: ${user.phone}</p>
                <p>website: ${user.website}</p>
                <p>company: ${user.company.name}</p>
                <p>catchPhrase: ${user.company.catchPhrase}</p>
                <p>bs: ${user.company.bs}</p>`

            document.body.appendChild(userDiv)

            let buttonContainer = document.createElement('div')
            buttonContainer.className = 'buttonContainer'

            let mainButton = document.createElement('button')
            mainButton.className = 'mainButton'
            mainButton.innerText = 'Post of current user'
            mainButton.onclick = async () => {
                await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        let allTitlesContainer = document.createElement("div")
                        allTitlesContainer.className = 'allTitleContainer'

                        posts.forEach(post => {
                            let titleContainer = document.createElement("div")
                            titleContainer.className = 'titleContainer'

                            let title = document.createElement("p")
                            title.className = 'title'
                            title.innerText = `Post title - ${post.title}`

                            let detailButton = document.createElement('button')
                            detailButton.className = 'detailButton'
                            detailButton.innerText = 'post details'
                            detailButton.onclick = () => {
                                location.href = `post-details.html?postId=${post.id}`
                            }

                            titleContainer.appendChild(title)
                            titleContainer.appendChild(detailButton)

                            allTitlesContainer.appendChild(titleContainer)
                        })

                        document.body.appendChild(allTitlesContainer)
                    })
            }



            buttonContainer.appendChild(mainButton)
            document.body.appendChild(buttonContainer)
        })
        .catch(error => {
            console.error('Error', error)
        })
}

getUser()
