let postId = new URL(location.href).searchParams.get('postId') || 1

async function getPost() {


    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {

            let postInfo = document.createElement('div')
            postInfo.className = 'postInfo'
                postInfo.innerHTML =
                `<p> User id: ${post.userId} </p>
                <p> Post id: ${post.id} </p>
                <p> Post Title: ${post.title} </p>
                <p> Post content: ${post.body} </p>`

            document.body.appendChild(postInfo)
            getComments()
        })
        .catch(error => console.error('Error', error))
}



async function getComments() {

    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            let commentsDiv = document.createElement('div')
            commentsDiv.className = 'commentsDiv'

            comments.forEach((comment) => {
                let commentAll = document.createElement('div')
                commentAll.className = 'commentAll'

                let commentId = document.createElement('p')
                commentId.textContent = `Comment id: ${comment.id}`

                let commentTitle = document.createElement('p')
                commentTitle.textContent = `Comment title: ${comment.name}`

                let commentContent = document.createElement('p')
                commentContent.textContent = `Comment content: ${comment.body}`


                commentAll.appendChild(commentId)
                commentAll.appendChild(commentTitle)
                commentAll.appendChild(commentContent)


                commentsDiv.appendChild(commentAll)
            })


            document.body.appendChild(commentsDiv)
        })
        .catch(error => console.error('Error', error))
}


getPost()

