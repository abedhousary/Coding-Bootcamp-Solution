let prevbtn = document.querySelector(".left-arrow");
let nextbtn = document.querySelector(".right-arrow");
let imgshower = document.querySelector(".image-shower");
let messageshower = document.querySelector(".description");
let nameshower = document.querySelector(".name");
let positionshower = document.querySelector(".position");

const tanya = {
    "name": "Tanya Sinclair",
    "desc": `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    "img": `./images/image-tanya.jpg`,
    "job": "UX Engineer",
}


const John = {
    "name": "John Tarkpor",
    "desc": `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    "img": `./images/image-john.jpg`,
    "job": "Junior Front-end Developer",
}


prevbtn.onclick = () => {
    nameishowing = imgshower.id.split("-")[0];
    switch (nameishowing) {
        case 'Tanya':
            console.log(John.position);
            messageshower.innerHTML = John.desc;
            nameshower.innerTEXT = John.name;
            positionshower.innerHTML = John.job;
            imgshower.src = John.img;
            imgshower.id = "John-image";
            break;
        case 'John':
            messageshower.innerHTML = tanya.desc;
            nameshower.innerTEXT = tanya.name;
            positionshower.innerHTML = tanya.job;
            imgshower.src = tanya.img;
            imgshower.id = "Tanya-image";
            break;
        default:
            break;
    }
}


nextbtn.onclick = () => {
    nameishowing = imgshower.id.split("-")[0];
    switch (nameishowing) {
        case 'Tanya':
       
            messageshower.innerHTML = John.desc;
            nameshower.innerTEXT = tanya.name;
            positionshower.innerHTML = John.job;
            imgshower.src = John.img;
            imgshower.id = "John-image";
            break;
        case 'John':
            messageshower.innerHTML = tanya.desc;
            nameshower.innerTEXT = tanya.name;
            positionshower.innerHTML = tanya.job;
            imgshower.src = tanya.img;
            imgshower.id = "Tanya-image";
            break;
        default:
            break;
    }
}