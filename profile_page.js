async function loadprofile() {

        const API = "https://6a66fb27189fe5869eb6cfc7.mockapi.io/api/user/passwords";

        const userid = localStorage.getItem("userid");

        const user = await fetch(`${API}/${userid}`);
        const res = await user.json();

        document.getElementById("name").textContent = `Name : ${res.name}`;
        document.getElementById("username").textContent = `Username : ${res.username}`;
        document.getElementById("gender").textContent = `Gender : ${res.gender}`;
    
        let dobb = document.getElementById("dob")
        let rev_dob = res.dob.split("-").reverse().join(":");
        dobb.textContent = `Date of Birth : ${rev_dob}`;

        let joined = document.getElementById("joined")
        let rev_createdAt = res.createdAt.substring(0,10).split("-").reverse().join(":");
        joined.textContent = `Joined On : ${rev_createdAt}`;

    }
loadprofile();


const logout_button = document.getElementById("logout_button");

logout_button.addEventListener("click",()=>{
    localStorage.removeItem('userid');
    window.location.href = "index.html";
})

const delete_button = document.getElementById("delete_button");
delete_button.addEventListener("click",deleteAccount);

async function deleteAccount(){

    if(confirm("Delete account?")){

    const API = "https://6a66fb27189fe5869eb6cfc7.mockapi.io/api/user/passwords";
    const userid = localStorage.getItem("userid");
    const user = await fetch(`${API}/${userid}`,{
        method:"DELETE"
    });

    localStorage.removeItem("userId");
    alert("Account deleted successfully.");
    window.location.href = "index.html";

    }
}