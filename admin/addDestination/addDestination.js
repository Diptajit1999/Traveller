let backBtn = document.getElementById("back");
backBtn.addEventListener("click",function(){
  window.location.href="/admin.html";
})

let form = document.getElementById("skform");
  form.addEventListener("submit", addDstn);
  async function addDstn(e) {
    e.preventDefault();
    let imgArr=[];
    imgArr.push(form.image.value)
    let places = {
      Duration: form.duration.value,
      image: imgArr,
      country: form.country.value,
      rating: form.rating.value,
      price: form.price.value,
      location:form.location.value
    };
    try {
      let res = await fetch(
        `https://spiritual-school-8644-data.onrender.com/places`,
        {
          method: "POST",
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