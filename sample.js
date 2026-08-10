
async function k(){

    const response = await fetch("data.json");
    const user = await response.json();

    console.log(user.users);
}

k();