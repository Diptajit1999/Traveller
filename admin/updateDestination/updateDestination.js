let localData=JSON.parse(localStorage.getItem("destinationDetails"));
console.log(localData);

let backBtn = document.getElementById("back");
backBtn.addEventListener("click",function(){
  window.location.href="/admin.html";
})

let form = document.getElementById("skform");
function showDetails(){
    form.idDes.value=localData.id;
    form.duration.value=localData.Duration;
    form.image.value=localData.image[0];
    form.country.value=localData.country;
    form.rating.value=localData.rating;
    form.price.value=localData.price;
    form.location.value=localData.location; 
}
window.addEventListener("load", function(){
  showDetails()
})

  form.addEventListener("submit", updateDstn);
  async function updateDstn(e) {
    e.preventDefault();
    let imgArr=[];
    imgArr.push(form.image.value)
    let places = {
      id:form.idDes.value,
      Duration: form.duration.value,
      image: imgArr,
      country: form.country.value,
      rating: form.rating.value,
      price: form.price.value,
      location:form.location.value
    };
    try {
      let res = await fetch(
        `https://spiritual-school-8644-data.onrender.com/places/${localData.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(places),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let data = await res.json();
      
        window.location.href="./loading.html";
    
      // console.log(data);
    } catch (err) {
      console.lofg(err);
    }
  }