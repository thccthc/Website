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
            if (sectionIndex === 0) {
                animateSection1();
            } else if (sectionIndex === 1) {
                animateSection2();
            } else if (sectionIndex === 2) {
                animateSection3();
            }
        }

        function animateSection1() {
            anime({
                targets: ['.svg'],
                scale: [1, 1.2],
                duration: 1000,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
            anime({
                targets: '.navbar-brand',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            });
            anime({
                targets: '.navbar-nav-scroll .nav-item',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 300 }),
            });
            anime({
                targets: ['#search', '#btn-search'],
                translateX: ['-100%', 0],
                easing: 'easeInOutQuad',
                duration: 1500,
                delay: anime.stagger(200),
            });
            var cards = document.querySelectorAll('.card');
            anime({
                targets: cards,
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200),
            });
        }

        function animateSection2() {
            anime({
                targets: ['#fadeInDiv'],
                opacity: [0, 1],
                duration: 1500,
                easing: 'easeInOutQuad'
            });
            anime({
                targets: '#myChart',
                translateX: [-200, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 2000,
            });
        }

        function animateSection3() {
            anime({
                targets: '.footer',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 300 }),
            });
            anime({
                targets: '.row',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 2000,
                delay: anime.stagger(200)
            });
            anime({
                targets: ['.table-responsive'],
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeOutBounce',
                duration: 2000,
            });
        }
        function openBookModal(title, author, genre, year, type, description, reviews, availability, modalIndex) {
            var modalLabel = '#bookModalLabel' + modalIndex;
            var bookDetails = '#bookDetails' + modalIndex;

            document.querySelector(modalLabel).innerText = title;
            document.querySelector(bookDetails).innerHTML = `
                <strong>Author:</strong> ${author}<br>
                <strong>Genre:</strong> ${genre}<br>
                <strong>Year:</strong> ${year}<br>
                <strong>Type:</strong> ${type}<br>
                <strong>Description:</strong> ${description}<br>
                <strong>Reviews:</strong> ${reviews}<br>
                <strong>Availability:</strong> ${availability}
            `;

            $('#bookModal' + modalIndex).modal('show');
        }

        $('#customButton').click(function () {
            openBookModal("Harry Potter and the Deathly Hallows", "J.K. Rowling", "Fiction", "2007", "Hardcover",
                "Harry, burdened with destroying Voldemort's Horcruxes, confronts isolation and uncertainty, summoned to find inner strength, while J.K. Rowling delivers long-awaited answers in the epic conclusion of the series.",
                "4.8 stars (112)", "5", 2);
        });

        $('#customButton2').click(function () {
            openBookModal("Crooked Kingdom", "Leigh Bardugo", "Romance", "2016", "Kindle Edition",
                "In the perilous aftermath of a daring heist, Kaz Brekker's crew faces betrayal, dwindling resources, and a battle for revenge and redemption in a war that will determine the fate of the Grisha world.",
                "4.9 stars (96)", "12", 3);
        });

        $('#customButton3').click(function () {
            openBookModal("A Court of Mist and Fury", "Sarah J. Maas", "Fantasy", "2016", "Paperback",
                "Feyre has undergone more trials than one human woman can carry in her heart. Though she has now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
                "No ratings (0)", "9", 4);
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
    ];

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
    document.getElementById('bookModalLabel').innerText = title;
    document.getElementById('bookDetails').innerHTML = `
    <br>
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
    `;

    $('#bookModal').modal('show');
}
function openBookModal2(title, author, genre, year, type, description, reviews, availability) {
    document.getElementById('bookModalLabel2').innerText = title;
    document.getElementById('bookDetails2').innerHTML = `
    <br>
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
    `;

    $('#bookModal2').modal('show');
}
function openBookModal3(title, author, genre, year, type, description, reviews, availability) {
    document.getElementById('bookModalLabel3').innerText = title;
    document.getElementById('bookDetails3').innerHTML = `
    <br>
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
    `;

    $('#bookModal3').modal('show');
}
function openBookModal4(title, author, genre, year, type, description, reviews, availability) {
    document.getElementById('bookModalLabel4').innerText = title;
    document.getElementById('bookDetails4').innerHTML = `
    <br>
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Year:</strong> ${year}<br>
        <strong>Type:</strong> ${type}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Reviews:</strong> ${reviews}<br>
        <strong>Availability:</strong> ${availability}
    `;

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
