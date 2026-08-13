const navbar = `
<nav>
    <nav id="home_navbar">
            <a href="home_page.html" >
            <h3>
                Home
            </h3>
            </a>
            <a href="post_page.html" >
            <h3>
                Post
            </h3>
            </a>
            <a href="message_page.html" >
            <h3>
                Message
            </h3>
            <a href="reels_page.html" >
            <h3>
                Reels
            </h3>
            </a>
            <a href="profile_page.html" >
            <h3>
                Profile
            </h3>
            </a>
            <h4 id="weather" style="color:white"></h4>
        </nav>
`;
document.getElementById("navbar").innerHTML = navbar;

const weather_home = document.getElementById('weather');

navigator.geolocation.getCurrentPosition((position) => {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    async function weather(){
            
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const temp = data.current.temperature_2m;
        const unit = data.current_units.temperature_2m;
        weather_home.innerText =  `Weather ⛅ ${temp+unit}`;
    }
    weather()

});
