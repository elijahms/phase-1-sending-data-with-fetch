// Add your code here
const submitData = function(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {  
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        }),
    })
    .then(res => res.json())
    .then(res => document.body.append(res.id))
    .catch(error => {
        document.body.append(error.message)
    })
}

