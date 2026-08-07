const arr = ["img/img1.jpeg","img/img2.jpeg","img/img3.jpeg","img/img4.jpeg","videos/1080x1920.mp4"];
const dummy_arr = [...arr];
const display_queue = [];

let n = arr.length;
while(n>0){

    const post = arr[Math.floor(Math.random()*arr.length)]
    if(!display_queue.includes(post)){
        display_queue.push(post);
        n--;
    }
}

console.log(display_queue)
