let name = '';
let age = 0;

function nextPage(page) {
    if (page === 1) {
        name = document.getElementById("nameInput").value;
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        document.getElementById("page1").classList.add('hidden');
        document.getElementById("page2").classList.remove('hidden');
    } else if (page === 2) {
        age = document.getElementById("ageInput").value;
        if (!age) {
            alert("Please enter your age.");
            return;
        }
        document.getElementById("page2").classList.add('hidden');
        document.getElementById("page3").classList.remove('hidden');
    } else if (page === 4) {
        document.getElementById("page4").classList.add('hidden');
        document.getElementById("page5").classList.remove('hidden');

        // Update the "I love You" button text with the user's name
        const exitButton = document.getElementById("exitButton");
        exitButton.textContent = "I love You, " + name;  // Set button text to "I love You [name]"
    }
}

function verifyName(isCorrect) {
    if (isCorrect) {
        document.getElementById("page3").classList.add('hidden');
        document.getElementById("page4").classList.remove('hidden');
    } else {
        document.getElementById("page3").classList.add('hidden');
        document.getElementById("page1").classList.remove('hidden');
    }
}

function moveNo() {
    const noButton = document.getElementById("noButton");
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 80 + '%';
    noButton.style.top = Math.random() * 80 + '%';
}

function exit() {
    window.close(); // Note: This may not work in all browsers, especially in modern ones due to security restrictions.
}
