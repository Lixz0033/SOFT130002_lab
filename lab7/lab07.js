const works = [
    {author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"]},
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]},
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

function createItem(number, works) {
    var item = document.createElement("div");
    var inner1 = document.createElement("div");
    var inner2 = document.createElement("div");
    var item_title = document.createElement("h4");
    var inner1_title = document.createElement("h3");
    var inner1_subtitle = document.createElement("h5");
    var inner2_title = document.createElement("h3");
    var button = document.createElement("button");

    item.className = "flex-container justify";
    item.style.cssText = "height:220px;background:rgb(179,104,168);margin-top:1em;margin-bottom:1em";
    inner1.className = "inner-box";
    inner1.style.cssText = "margin-left:1%;width:97%;";
    inner2.className = "inner-box";
    inner2.style.cssText = "margin-left:1%;width:97%;";
    item_title.innerText = " Genre : " + works[number].tips;
    item_title.style.cssText = "color:white;margin-left:2%;";
    inner1_subtitle.innerText = " lifetime: " + works[number].lifetime;
    inner1_subtitle.style.cssText = "display:inline;font-size:x-small";
    inner1_title.innerText = " " + works[number].author + " ";
    inner2_title.innerText = " Popular Photos";
    button.className = "button";
    button.innerText = "Visit";
    button.style.cssText = "margin-left:1%;width:98%";

    inner1.appendChild(inner1_title);
    inner1_title.appendChild(inner1_subtitle);
    inner2.appendChild(inner2_title);
    for(let i = 0;i<works[number].photos.length;i++){
        var img = document.createElement("img");
        img.className = "photo";
        img.src = works[number].photos[i];
        inner2.appendChild(img);
    }
    item.appendChild(item_title);
    item.appendChild(inner1);
    item.appendChild(inner2);
    item.appendChild(button);
    document.body.appendChild(item);
}

window.onload = function () {
    for (let i = 0; i < works.length; i++)
        createItem(i, works);
};