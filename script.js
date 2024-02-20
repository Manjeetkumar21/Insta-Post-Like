let image = document.querySelector('img');
let love = document.querySelector("#love");
let para = document.querySelector('p');

image.addEventListener("dblclick", function(){
    console.log("clicked");

    para.innerHTML = "You Liked this Photo !";
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.transition = "all 0.2s ease-in-out";
    love.style.opacity = "0.8";

    setTimeout(() => {
        love.style.opacity = "0";
        love.style.transform = "translate(-50%, -50%) scale(0)";
        love.style.transition = "all 0.2s ease-in-out";
    }, 1000);
})