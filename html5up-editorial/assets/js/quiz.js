document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startQuiz');
    const submitButton = document.getElementById('submitQuiz');
    const quizContainer = document.getElementById('quizContainer');

    const questions = [
        {
            question: "You receive an email from your bank asking for personal information to verify your account. What do you do?",
            answers: {
                a: "Reply with the requested information.",
                b: "Ignore the email.",
                c: "Contact your bank through their official number to verify the request."
            },
            correctAnswer: "c"
        },
        {
            question: "A caller claims to be from a government agency and says you owe taxes. They demand immediate payment through gift cards. How do you respond?",
            answers: {
                a: "Hang up and ignore.",
                b: "Purchase the gift cards and provide the codes.",
                c: "Report the call to the official government agency's hotline."
            },
            correctAnswer: "c"
        },
        {
            question: "You see an ad for a free trial of a product, but it requires your credit card information for shipping. What should you do?",
            answers: {
                a: "Provide the credit card information.",
                b: "Search for reviews about the offer first.",
                c: "Decline the offer as it might be a scam."
            },
            correctAnswer: "c"
        },
        {
            question: "While browsing, a pop-up claims your computer is infected and provides a phone number for tech support. What is your next step?",
            answers: {
                a: "Call the number immediately.",
                b: "Close the pop-up and run an antivirus scan.",
                c: "Download the software offered in the pop-up."
            },
            correctAnswer: "b"
        },
        {
            question: "You’re offered a job that pays much more than the average salary for the role but are asked to pay for training. How do you proceed?",
            answers: {
                a: "Pay for the training as it’s a good investment.",
                b: "Decline the offer.",
                c: "Research the company and the role further."
            },
            correctAnswer: "c"
        },
        {
            question: "An online friend you’ve never met in person asks for money to help with an emergency. What do you do?",
            answers: {
                a: "Send the money to help your friend.",
                b: "Offer emotional support but not financial assistance.",
                c: "Ask for more information and try to verify their story."
            },
            correctAnswer: "c"
        },
        {
            question: "You receive a message congratulating you on winning a lottery you don’t remember entering. It asks for a fee to release your winnings. Your response?",
            answers: {
                a: "Pay the fee to get the winnings.",
                b: "Ignore the message.",
                c: "Report the message as a scam."
            },
            correctAnswer: "c"
        },
        {
            question: "A social media message from a friend asks for your login information to share an exclusive update. How do you react?",
            answers: {
                a: "Share the login information.",
                b: "Contact your friend through another method to verify the request.",
                c: "Ignore the message."
            },
            correctAnswer: "b"
        },
        {
            question: "An investment opportunity promises high returns with no risk. What should be your approach?",
            answers: {
                a: "Invest immediately to not miss out.",
                b: "Be skeptical and research the investment thoroughly.",
                c: "Share the opportunity with friends and family."
            },
            correctAnswer: "b"
        },
        {
            question: "You find a website selling brand-name goods at heavily discounted prices. What would you do before making a purchase?",
            answers: {
                a: "Buy immediately to take advantage of the deals.",
                b: "Research the website’s legitimacy.",
                c: "Share the website with friends."
            },
            correctAnswer: "b"
        },
        {
            question: "A text message claims you need to update your payment information for a subscription service. What is the safest action?",
            answers: {
                a: "Update the information through the link provided.",
                b: "Ignore the text message.",
                c: "Visit the official website directly to check your account."
            },
            correctAnswer: "c"
        },
        {
            question: "You're informed you've been selected for an exclusive investment group with guaranteed profits. How do you respond?",
            answers: {
                a: "Join the group immediately.",
                b: "Ask for more details and proof of past success.",
                c: "Decline the offer, understanding that guaranteed profits are unrealistic."
            },
            correctAnswer: "c"
        },
        {
            question: "An email from a foreign prince asks for your help transferring money, promising a share. What do you do?",
            answers: {
                a: "Provide your bank details to help.",
                b: "Delete the email.",
                c: "Reply, asking for more information."
            },
            correctAnswer: "b"
        },
        {
            question: "You receive a suspicious email with an attachment from an unknown sender. What is the correct action?",
            answers: {
                a: "Open the attachment to see what it is.",
                b: "Delete the email without opening the attachment.",
                c: "Forward the email to your contacts."
            },
            correctAnswer: "b"
        },
        {
            question: "A service provider calls asking for your password to fix a problem with your account. What should you do?",
            answers: {
                a: "Provide the password over the phone.",
                b: "Refuse to give out your password and contact the service provider directly through official channels.",
                c: "Hang up and wait for them to call back if it's really important."
            },
            correctAnswer: "b"
        },
        {
            question: "During an online purchase, you're redirected to a payment gateway you've never heard of. What's your next move?",
            answers: {
                a: "Proceed with the payment, assuming the website knows best.",
                b: "Stop the transaction and research the payment gateway.",
                c: "Choose another payment method, if available."
            },
            correctAnswer: "b"
        },
        {
            question: "You get an offer for a free vacation but must provide your credit card number for 'verification.' What should you do?",
            answers: {
                a: "Provide the credit card number to secure the vacation.",
                b: "Decline the offer, suspecting a scam.",
                c: "Ask for more details about the offer and research the company."
            },
            correctAnswer: "b"
        },
        {
            question: "A pop-up on your computer says you've won a gift card and asks you to enter personal details to claim it. How do you respond?",
            answers: {
                a: "Fill out the form to claim the gift card.",
                b: "Close the pop-up and ignore it.",
                c: "Research the offer to see if it's legitimate."
            },
            correctAnswer: "b"
        },
        {
            question: "You're contacted by someone claiming to have compromising photos of you, asking for money. How do you handle it?",
            answers: {
                a: "Pay the money to prevent the photos from being leaked.",
                b: "Report the threat to the authorities and do not pay.",
                c: "Negotiate with the person for a lower payment."
            },
            correctAnswer: "b"
        },
        {
            question: "An investment site offers daily returns too good to be true. What should be your course of action?",
            answers: {
                a: "Invest a small amount to try it out.",
                b: "Research the site's credibility and look for reviews.",
                c: "Ignore the offer, understanding that if it seems too good to be true, it probably is."
            },
            correctAnswer: "c"
        }


    ]
        ;

    function showQuestions(questions, container) {
        const output = [];
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                const id = `question${questionNumber}_${letter}`;
                answers.push(
                    `<input type="radio" id="${id}" name="question${questionNumber}" value="${letter}">
                 <label for="${id}">${letter} : ${currentQuestion.answers[letter]}</label>`
                );
            }

            output.push(
                `
            <hr class="major">
            <div class="question"><strong>Question ${questionNumber + 1}:</strong> ${currentQuestion.question}</div><br>
            <div class="answers">${answers.join('<br>')}</div>`
            );
        });
        container.innerHTML = output.join('<br>');
    }




    function showResults(questions, container) {
        const answerContainers = container.querySelectorAll('.answers');
        let numCorrect = 0;
        let numIncorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            const labels = answerContainer.querySelectorAll('label');
            labels.forEach(label => {
                label.classList.remove('correct-answer', 'wrong-answer');
            });

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                const correctLabel = answerContainer.querySelector(`label[for="question${questionNumber}_${currentQuestion.correctAnswer}"]`);
                correctLabel.classList.add('correct-answer');
            } else {
                numIncorrect++;
                if (userAnswer) {
                    const wrongLabel = answerContainer.querySelector(`label[for="question${questionNumber}_${userAnswer}"]`);
                    wrongLabel.classList.add('wrong-answer');
                }
                const correctLabel = answerContainer.querySelector(`label[for="question${questionNumber}_${currentQuestion.correctAnswer}"]`);
                correctLabel.classList.add('correct-answer');
            }
        });

        const resultsText = document.getElementById('resultsText');
        const restartButton = document.getElementById('restartQuiz');
        const resultsContainer = document.getElementById('resultsContainer');

        // 显示结果
        resultsText.innerHTML = `<hr class="major">you got ${numCorrect} questions corrct， ${numIncorrect} questions incorrect。<br>Correctness：${((numCorrect / questions.length) * 100).toFixed(2)}%。`;
        resultsContainer.classList.remove('hidden');
        restartButton.classList.remove('hidden');
        submitButton.classList.add('hidden');

        // 重置测验
        restartButton.addEventListener('click', () => {
            // 清除所有选择的答案
            const allRadios = container.querySelectorAll('input[type="radio"]');
            allRadios.forEach(radio => {
                radio.checked = false;
            });

            // 移除所有的样式类
            const allLabels = container.querySelectorAll('label');
            allLabels.forEach(label => {
                label.classList.remove('correct-answer', 'wrong-answer');
            });

            resultsContainer.classList.add('hidden');
            startButton.classList.remove('hidden');
            submitButton.classList.add('hidden');
            quizContainer.classList.add('hidden');
        });
    }



    startButton.addEventListener('click', () => {
        showQuestions(questions, quizContainer);
        startButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
        quizContainer.classList.remove('hidden');
    });

    submitButton.addEventListener('click', () => {
        showResults(questions, quizContainer);
    });
});
