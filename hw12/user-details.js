let url = new URLSearchParams(window.location.search)
let id = url.get("id")

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let users = `
            <p>id: ${user.id}</p>
            <p>name: ${user.name}</p>
            <p>username: ${user.username}</p>
            <p>email: ${user.email}</p>
            <p>adress: street ${user.address.street}, suite ${user.address.suite}, city ${user.address.city}, zipcode ${user.address.zipcode}</p>
            <p>geo: lat: ${user.address.geo.lat}, ing: ${user.address.geo.lng}</p>
            <p>phone: ${user.phone}</p>
            <p>website: ${user.website}</p>
            <p>company: ${user.company.name}</p>
            <p>catchPhrase: ${user.company.catchPhrase}</p>
            <p>bs ${user.company.bs}</p>
        `;

        document.body.innerHTML = users
    })
    .catch(error => {
        console.error('error:', error)
    })
