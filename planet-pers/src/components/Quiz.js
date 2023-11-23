import React, {useState} from "react"

export default function Quiz() {
    const questions = [
        {
            questionText: 'Which of the following does NOT cause climate change?',
            answerOptions: [
                { answerText: 'Industrial activities', isCorrect: false },
                { answerText: 'Vehicle carbon emissions', isCorrect: false },
                { answerText: 'Afforestation', isCorrect: true },
                { answerText: 'Agricultural methane production', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following results from climate change?',
            answerOptions: [
                { answerText: 'Global temperature fall', isCorrect: false },
                { answerText: 'Extreme weather events', isCorrect: true },
                { answerText: 'Increase in biodiversity', isCorrect: false },
                { answerText: 'Less carbon dioxide concentration', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following actions does NOT help in fighting climate change',
            answerOptions: [
                { answerText: 'Overuse of single-use plastics', isCorrect: true },
                { answerText: 'Using public transportation', isCorrect: false },
                { answerText: 'Choosing cycling over driving', isCorrect: false },
                { answerText: 'Using renewable energy', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is NOT a harmful gas that contributes to climate change',
            answerOptions: [
                { answerText: 'Carbon dioxide', isCorrect: false },
                { answerText: 'Nitrous oxide', isCorrect: false },
                { answerText: 'Methane', isCorrect: false },
                { answerText: 'Oxygen', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        // <main>
        //     <h1 >Quiz</h1>
        
        // </main>
        <div className='quiz'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}