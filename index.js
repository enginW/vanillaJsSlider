let models = [
    {
        name : "Random img-1",
        image : "https://picsum.photos/500/501",
        link : "www.google.com",
    },
    {
        name : "Random img-2",
        image : "https://picsum.photos/800/562",
        link : "www.google.com",
    },
    {
        name : "Random img-3",
        image : "https://picsum.photos/500/543",
        link : "www.google.com",
    },
    {
        name : "Random img-4",
        image : "https://picsum.photos/500/584",
        link : "www.google.com",
    },
    {
        name : "Random img-5",
        image : "https://picsum.photos/500/515",
        link : "www.google.com",
    },
    {
        name : "Random img-6",
        image : "https://picsum.photos/500/526",
        link : "www.google.com",
    }
];
let index = 1;
let count = models.length;
let settings = [{
    duration: "3000",
    random :true
}];
init(settings);
function showSlide(i){
    index = i;
    if(i<0){
        index = count - 1;
    }
    if(i>count){
        index=0;
    }
    document.querySelector(".img").setAttribute("src",models[index].image);
    document.querySelector(".car-name").textContent = models[index].name;
    document.querySelector(".btn").setAttribute("href",models[index].link);
};
document.querySelector(".fa-long-arrow-alt-left").addEventListener("click",()=>{
        index--;
        showSlide(index);
});
document.querySelector(".fa-long-arrow-alt-right").addEventListener("click",()=>{
        index++;
        showSlide(index);
});

function init(settings){
    setInterval(function(){
        if(settings.random){
            index = Math.floor(Math.random()*count)
        }else{

        }
        showSlide(index);
    },settings.duration)
};
