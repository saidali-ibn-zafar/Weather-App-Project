let imageSource = [
    "/gameImages/wrong1.jpg",
    "/gameImages/correct1.jpg",
    "/gameImages/wrong2.jpg",
    "/gameImages/correct2.jpg",
    "/gameImages/wrong3.jpg",
    "/gameImages/correct3.jpg",
    "/gameImages/wrong4.jpg",
    "/gameImages/correct4.jpg",
    "/gameImages/wrong5.jpg",
    "/gameImages/correct1.jpg",
    "/gameImages/wrong6.jpg",
    "/gameImages/correct2.jpg",
    "/gameImages/wrong7.jpg",
    "/gameImages/correct3.jpg",
    "/gameImages/wrong8.jpg",
    "/gameImages/correct3.jpg",
    "/gameImages/wrong8.jpg",
    "/gameImages/correct4.jpg",
    "/gameImages/wrong9.jpg",
    "/gameImages/correct1.jpg",
    "/gameImages/wrong10.jpg",
    "/gameImages/correct2.jpg",
    "/gameImages/wrong11.jpg",
    "/gameImages/correct3.jpg",
    "/gameImages/wrong12.jpg",
    "/gameImages/correct3.jpg",
    "/gameImages/wrong13.jpg",
    "/gameImages/correct4.jpg",
];

let myImg = document.getElementById("myImage");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

// Function to get a random image source URL from the imageSource array
function getRandomImageSource() {
    let randomIndex = Math.floor(Math.random() * imageSource.length);
    return imageSource[randomIndex];
}

// Set the initial image source to a random image
myImg.src = getRandomImageSource();

// Add click event listener to "Yes" button
yesBtn.addEventListener("click", function () {
    // Change the image source to a new random image
    if (myImg.src.includes("correct")) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    myImg.src = getRandomImageSource();

});

// Add click event listener to "No" button
noBtn.addEventListener("click", function () {
    // Change the image source to a new random image
    if (myImg.src.includes("wrong")) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    myImg.src = getRandomImageSource();

});
