

const arr = ["img/img1.jpeg","img/img2.jpeg","img/img3.jpeg","img/img4.jpeg","videos/1080x1920.mp4"];

const display_queue = [];

let n = arr.length;
while(n>0){

    const post = arr[Math.floor(Math.random()*arr.length)]
    if(!display_queue.includes(post)){
        display_queue.push(post);
        n--;
    }
}

const all_container = document.getElementById("all_container");

display_queue.forEach(post=>{
    
    if(post.split("/")[0]==="img"){
        all_container.innerHTML+= `
        <img src="${post}" id="video_tag">
        `
    }
    else{
        all_container.innerHTML+= `
        <video src="${post}" id="video_tag" controls></videos>
        `
    }
})