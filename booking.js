// const subEmail = document.querySelector(".email-input");
// const subscribeButton = document.querySelector(".email-subs button");

// // subscribeButton.addEventListener("click", () => {
// //     const email = subEmail.value.trim();

// //     if (email !== "") {
// //         swal("Good job!", `You have Subscribe to our Newsletter with ` + email, "success").then(() => {
// //             subEmail.value = "";
// //         });

// //     } else {
// //         swal("Error", "Enter the Email", "error");
// //     }
// // });



// // Retrived from Local Storage

// var placeName = document.querySelector('.place-name');

// var storedData = JSON.parse(localStorage.getItem('detail-data'));

// placeName.innerHTML = `
//     <img src= "${storedData.image.startsWith('https')?storedData.image:`/${storedData.image}`}" alt="" class="place-image">
// `
//     var firstName = document.getElementById('firstName');
//     var lastName = document.getElementById('lastName');
//     var email = document.getElementById('email');
//     var gender = document.querySelector('input[name="gender"]:checked');
//     var checkIn = document.querySelector('input[data-placeholder="Check-in"]');
//     var checkOut = document.querySelector('input[data-placeholder="Check-out"]');
//     var numOfAdults = document.getElementById('guest');
//     var numOfChildren = document.getElementById('children');

// // var placeElement = document.getElementById('place');
// var priceElement = document.getElementById('price');
// let price = localStorage.getItem("price") || '';

// // placeElement.innerHTML = `Place:<span class='place-highlight'> <ion-icon name="location-outline"></ion-icon>  ` + storedData.city + `, ` + storedData.country + `</span>`;
// priceElement.innerHTML = `Price : ₹ ((${numOfAdults.value}*${price})+(${numOfChildren.value}*${price}*0.7))`;

// // form page
// var submit = document.querySelector('submitbtn');

// submit.addEventListener('click', function (e) {
//     e.preventDefault();

//     var payment = {
//         Name: firstName.value + " " + lastName.value,
//         email: email.value,
//         gender: gender ? gender.value : "",
//         check_In: checkIn.value,
//         check_Out: checkOut.value,
//         Adults: numOfAdults.value,
//         Children: numOfChildren.value,
//         // Place: storedData.country,
//         // Location: storedData.city,
//         Price: storedData.price
//     };
//     console.log(payment);
//     localStorage.setItem('payment', JSON.stringify(payment));
//     window.location = './payment.html';
// });