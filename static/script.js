
const form = document.getElementById("loginForm");

form.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const username=document.getElementById("username").value;
  const password=document.getElementById("password").value;
  
  
  const data={username, password}//pass the JS variables to a dictionary

  
   fetch("http://127.0.0.1:5000/login", {
     method: 'post',
        headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'
      },
        body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
          return res.json();
      } else {
          alert("Something went wrong");
      }
  })
  .then(jsonResponse => {
   console.log(jsonResponse);
   })
  .catch((err) => console.error(err));
};




