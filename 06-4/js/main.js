fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const userdata = data.results[0];
        document.querySelector("#img").setAttribute('src', userdata.picture.large);
        document.querySelector('#login').textContent = userdata.login.username;
        document.querySelector('#fullname').textContent = `${userdata.name.first} ${userdata.name.last}`;
        document.querySelector('#email').textContent = userdata.email
        document.querySelector('#phone').textContent = userdata.phone
        document.querySelector('#mobile').textContent = userdata.cell
        const address = 
            userdata.location.street.name + ' ' +
            userdata.location.street.number + ', ' +
            userdata.location.city + ', ' +
            userdata.location.state + ', ' +
            userdata.location.country;
        document.querySelector('#address').textContent = address;
        document.querySelector('#output').textContent = JSON.stringify(data, null, 2)
        console.log(data)
    });