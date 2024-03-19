document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startQuiz');
    const submitButton = document.getElementById('submitQuiz');
    const quizContainer = document.getElementById('quizContainer');

    const questions = [
        {
            question: "什么是欺诈？",
            answers: {
                a: "合法的商业行为",
                b: "试图通过不诚实手段获取利益的行为",
                c: "公开的慈善活动"
            },
            correctAnswer: "b"
        },
        {
            question: "网络钓鱼常通过什么方式诱骗受害者？",
            answers: {
                a: "实体邮件",
                b: "电子邮件",
                c: "电话"
            },
            correctAnswer: "b"
        }

    ];

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
        resultsText.innerHTML = `<hr class="major">你答对了 ${numCorrect} 道题，答错了 ${numIncorrect} 道题。<br>正确率：${((numCorrect / questions.length) * 100).toFixed(2)}%。`;
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
