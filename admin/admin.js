let content = document.querySelector(".skcontent");

let homeTab = document.getElementById("homeTab");
homeTab.addEventListener("click",function(){
  window.location.href="../index.html"
});

let addUsrTab = document.getElementById("addUsrTab");
addUsrTab.addEventListener("click",function(){
  window.location.href="../about.html"
})
let addDstnTab = document.getElementById("addDstnTab");
addDstnTab.onclick=function(){
  window.location.href="./addDestination/addDestination.html"
}
// let updDstnTab = document.getElementById("updDstnTab");
// updDstnTab.onclick=function(){
//   window.location.href="./updateDestination/updateDestination.html"
// }
async function fetchData() {
  try {
    let res= await fetch(`https://spiritual-school-8644-data.onrender.com/places`);
    let data= await res.json();
    console.log(data)
    appendData(data)
  }catch (err){
    console.log(err);
  }
}

window.addEventListener("load", function(){
  fetchData()
})

function appendData(data){
    content.innerHTML = null;
  data.forEach(element => {
   let div = document.createElement("div");
   div.className = "skDiv";
   let br = document.createElement("br");
   let image = document.createElement("img");
   image.className = "skImg";
   image.src = element.image[0];
   
   let location = document.createElement("p");
    location = `,  Location: ${element.location}`;
    let country = document.createElement("p");
    country = `,  Country: ${element.country}`;
   let package = document.createElement("p");
    package = `,  Package: ${element.package}`;
   let price = document.createElement("p");
   price = `,  Price: ${element.price}`;
   let rating = document.createElement("p");
   rating=`,  Rating: ${element.rating}`;
   let review = document.createElement("p");
   review=`,  Review: ${element.review}`;
   let duration = document.createElement("p");
   duration = `,  Duration: ${element.Duration}`;

   let trend = document.createElement("p");
   trend=`,  Trend: ${element.trend}`;

   let btnDiv = document.createElement("div");
   btnDiv.className="btnDiv";
   let btn1 = document.createElement("button");
   btn1.className = "remove";
   btn1.innerText = "Remove";
   btn1.addEventListener("click",function(){
    removeElement(element)
   })

   let btn2 = document.createElement("button");
   btn2.className = "remove";
   btn2.innerText = "Update";
   btn2.addEventListener("click",function(){
    localStorage.setItem("destinationDetails",JSON.stringify(element));
    window.location.href="./updateDestination/updateDestination.html";
   })
   btnDiv.append(btn1,btn2)
   div.append(image,country,location,price,package,duration,trend,rating,review,btnDiv);
   content.append(div);

  });
}
async function removeElement(element){
  try {
    let res = await fetch(`https://spiritual-school-8644-data.onrender.com/places/${element.id}`, {
      method: "DELETE",
    });
    fetchData()
  } catch (err) {
    console.log(err);
  }
}
