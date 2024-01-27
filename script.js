document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        new fullpage('#fullpage', {
            sectionsColor: ['#cdb4db', '#cdb4db', '#cdb4db'],
            anchors: ['section1', 'section2', 'section3'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Section 1', 'Section 2', 'Section 3'],
            afterLoad: function (origin, destination, direction) {
                var loadedSection = this;
                animateSection(destination.index);
            }
        });

        function animateSection(sectionIndex) {
            // Define your animations for each section
            if (sectionIndex === 0) {
                animateSection1();
            } else if (sectionIndex === 1) {
                animateSection2();
            } else if (sectionIndex === 2) {
                animateSection3();
            }
        }

        function animateSection1() {
            // Anime.js animations for Section 1
            anime({
                targets: ['#search', '#btn-search'],
                translateX: ['-100%', 0], // Move from -100% to 0 along the X-axis (right to left)
                easing: 'easeInOutQuad', // Use easing function for smooth animation
                duration: 1000, // Animation duration in milliseconds
                delay: anime.stagger(200), // Stagger the animation for each element
            });
        }

        function animateSection2() {
            // Anime.js animations for Section 2
            document.addEventListener('DOMContentLoaded', function () {
                // Target the div
                var fadeInDiv = document.getElementById('fadeInDiv');
        
                // Use anime.js to fade in the div
                anime({
                    targets: fadeInDiv,
                    opacity: [0, 1], // animate from 0 to 1
                    duration: 1000, // animation duration in milliseconds
                    easing: 'easeInOutQuad' // easing function for smooth animation
                });
            });
        }

        function animateSection3() {
            // Anime.js animations for Section 3
            anime({
                targets: ['.footer'],
                translateY: [50, 0], // Move from 50px down to 0 along the Y-axis
                opacity: [0, 1], // Fade in from 0 to 1
                easing: 'easeInOutQuad', // Use easing function for smooth animation
                duration: 1000, // Animation duration in milliseconds
                delay: anime.stagger(200), // Stagger the animation for each element
            });
        }
    });
});
    
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // DatatTables
    var dataSet = [
        ["Words of Radiance", "Brandon Sanderson", "Fantasy", "2014", "Paperback"],
        ["Harry Potter and the Deathly Hallows", "J.K. Rowling", "Fiction", "2007", "Hardcover"],
        ["Crooked Kingdom", "Leigh Bardugo", "Romance", "2016", "Kindle Edition"],
        ["A Court of Mist and Fury", "Sarah J. Maas", "Fantasy", "2016", "Paperback"],
        // ["Fourth Wing", "Rebecca Yarros", "Fiction", "2023", "Hardcover"],
        // ["The Return of the King", "J.R.R. Tolkien", "Adventure", "1955", "Kindle Edition"],
        // ["The House of Hades", "Rick Riordan", "Mythology", "2013", "Hardcover"],
        // ["The Nightingale", "Kristin Hannah", "Historical Fiction", "2015", "Hardcover"],
    ];
    $(document).ready(function () {
        $('#books').DataTable({
            data: dataSet,
            columns: [
                { title: "Title" },
                { title: "Author" },
                { title: "Genre" },
                { title: "Year" },
                { title: "Type" }
            ],
            lengthMenu: [4, 10, 25, 50],
            pageLength: 4
        });
    });

    // Chart
    const labels = [
        'Fantasy',
        'Fiction',
        'Mystery',
        'Romance',
        'Adventure',
        'Mythology'
    ];

    const backgroundColors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Number of Books',
            backgroundColor: backgroundColors,
            borderColor: 'rgb(255, 99, 132)',
            data: [18, 10, 12, 9, 15, 5],
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                }
            },
            scales: {
                y: {
                    suggestedMax: 20
                }
            }
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search').addEventListener('input', function () {
        var searchTerm = this.value.toLowerCase();
        var articles = document.querySelectorAll('#bookDisplay article');

        articles.forEach(function (article) {
            var bookTitle = article.querySelector('.card-title').innerText.toLowerCase();

            if (bookTitle.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});

function openBookModal(title, author, genre, year, type, description, reviews, availability) {
    // Set modal title and details dynamically
    document.getElementById('bookModalLabel').innerText = title;
    document.getElementById('bookDetails').innerHTML = `
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
        <!-- Add more details, reviews, availability, etc. here -->
    `;

    // Open the modal
    $('#bookModal').modal('show');
}
function openBookModal2(title, author, genre, year, type, description, reviews, availability) {
    // Set modal title and details dynamically
    document.getElementById('bookModalLabel2').innerText = title;
    document.getElementById('bookDetails2').innerHTML = `
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
        <!-- Add more details, reviews, availability, etc. here -->
    `;

    // Open the modal
    $('#bookModal2').modal('show');
}
function openBookModal3(title, author, genre, year, type, description, reviews, availability) {
    // Set modal title and details dynamically
    document.getElementById('bookModalLabel3').innerText = title;
    document.getElementById('bookDetails3').innerHTML = `
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
        <!-- Add more details, reviews, availability, etc. here -->
    `;

    // Open the modal
    $('#bookModal3').modal('show');
}
function openBookModal4(title, author, genre, year, type, description, reviews, availability) {
    // Set modal title and details dynamically
    document.getElementById('bookModalLabel4').innerText = title;
    document.getElementById('bookDetails4').innerHTML = `
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
        <!-- Add more details, reviews, availability, etc. here -->
    `;

    // Open the modal
    $('#bookModal4').modal('show');
}

function reserveBook1(bookTitle) {
    var reserveButton = document.getElementById('reserveButton1');
    if (reserveButton.innerHTML.trim() === 'Reserve') {

        reserveButton.innerHTML = 'Reserved';
        reserveButton.disabled = true;
    }
}
function reserveBook2(bookTitle) {
    var reserveButton = document.getElementById('reserveButton2');
    if (reserveButton.innerHTML.trim() === 'Reserve') {

        reserveButton.innerHTML = 'Reserved';
        reserveButton.disabled = true;
    }
}
function reserveBook3(bookTitle) {
    var reserveButton = document.getElementById('reserveButton3');
    if (reserveButton.innerHTML.trim() === 'Reserve') {

        reserveButton.innerHTML = 'Reserved';
        reserveButton.disabled = true;
    }
}
function reserveBook4(bookTitle) {
    var reserveButton = document.getElementById('reserveButton4');
    if (reserveButton.innerHTML.trim() === 'Reserve') {

        reserveButton.innerHTML = 'Reserved';
        reserveButton.disabled = true;
    }
}
// function reserveBook5(bookTitle) {
//     var reserveButton = document.getElementById('reserveButton5');
//     if (reserveButton.innerHTML.trim() === 'Reserve') {

//         reserveButton.innerHTML = 'Reserved';
//         reserveButton.disabled = true;
//     }
// }
// function reserveBook6(bookTitle) {
//     var reserveButton = document.getElementById('reserveButton6');
//     if (reserveButton.innerHTML.trim() === 'Reserve') {

//         reserveButton.innerHTML = 'Reserved';
//         reserveButton.disabled = true;
//     }
// }
// function reserveBook7(bookTitle) {
//     var reserveButton = document.getElementById('reserveButton7');
//     if (reserveButton.innerHTML.trim() === 'Reserve') {

//         reserveButton.innerHTML = 'Reserved';
//         reserveButton.disabled = true;
//     }
// }
// function reserveBook8(bookTitle) {
//     var reserveButton = document.getElementById('reserveButton8');
//     if (reserveButton.innerHTML.trim() === 'Reserve') {

//         reserveButton.innerHTML = 'Reserved';
//         reserveButton.disabled = true;
//     }
// }
