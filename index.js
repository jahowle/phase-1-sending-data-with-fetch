// Add your code here
function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const h1 = document.createElement("h1");
        h1.innerHTML = object.id;
        document.body.appendChild(h1);
      })
      .catch(function (error) {
          const h2 = document.createElement("h2");
          h2.innerHTML = error.message;
          document.body.appendChild(h2);
      });
      
};

