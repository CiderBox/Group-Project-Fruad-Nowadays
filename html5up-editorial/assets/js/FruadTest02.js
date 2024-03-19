document.addEventListener('DOMContentLoaded', function () {
    // Attach an event listener to the Check Answer button
    document.getElementById('check-answer-button').addEventListener('click', function () {
        // Determine which radio button is selected
        var userChoice = document.querySelector('input[name="page-choice"]:checked') ? document.querySelector('input[name="page-choice"]:checked').value : "";

        // Check if the user's choice is correct (assuming Page 2 is correct)
        if (userChoice === "page2") {
            alert('Correct! You identified the phishing website successfully.');
        } else if (userChoice === "page1") {
            alert('Incorrect. Page 1 is actually the legitimate website, and Page 2 is the phishing attempt.');
        } else {
            // If the user hasn't made a choice yet
            alert('Please select an option before checking your answer.');
        }
    });
});
