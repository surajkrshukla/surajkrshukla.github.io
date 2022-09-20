import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who of the following is the first prime minister of independent India?",
      answers: [
        {
          text: "Dr BR Ambedkar",
          correct: false,
        },
        {
          text: "Jawaharlal Nehru",
          correct: true,
        },
        {
          text: "Vallabh Bhai Patel",
          correct: false,
        },
        {
          text: "RV Dhulekar",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which one of the following is leap year?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which among the following headstreams meets the Ganges in last?",
      answers: [
        {
          text: "Bhagirathi",
          correct: true,
        },
        {
          text: "Alaknanda",
          correct: false,
        },
        {
          text: "Pindar",
          correct: false,
        },
        {
          text: "Mandakini",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "The World Largest desert is ",
      answers: [
        {
          text: "Sahara",
          correct: true,
        },
        {
          text: "Thar",
          correct: false,
        },
        {
          text: "Sonoran",
          correct: false,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the prime minister of india",
      answers: [
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Yogi Adityanath",
          correct: false,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
        {
          text: "Mamata Banarjee",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the chief minister of Uttar pradesh",
      answers: [
        {
          text: "Narendar Modi",
          correct: false,
        },        
        {
          text: "Akhilesh Yadav",
          correct: false,
        },
        {
          text: "Lalu Yadav",
          correct: false,
        },
        {
          text: "Yogi Aditynath",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Who is the first prime minister of India",
      answers: [
        {
          text: "Pandit Nehru",
          correct: true,
        },
        {
          text: " Mahatma Gandhi",
          correct: false,
        },
        {
          text: "Sardar Patel",
          correct: false,
        },
        {
          text: "Subhash Chandra Bose",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the national flower of India?",
      answers: [
        {
          text: "Lotus",
          correct: true,
        },
        {
          text: "Lily",
          correct: false,
        },
        {
          text: "Sun Flower",
          correct: false,
        },
        {
          text: "Rose",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the national animal of India?",
      answers: [
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Cow",
          correct: false,
        },
        {
          text: "Deer",
          correct: false,
        },
        {
          text: "Tiger",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: " What is the national capital of India?",
      answers: [
        {
          text: "Delhi",
          correct: true,
        },
        {
          text: "Patna",
          correct: false,
        },
        {
          text: "Kanpur",
          correct: false,
        },
        {
          text: "Nagpur",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who is the current home minister of India?",
      answers: [
        {
          text: "Rajnath Singh",
          correct: false,
        },
        {
          text: "Amit Shah",
          correct: true,
        },
        {
          text: "Smriti Irani",
          correct: false,
        },
        {
          text: "None of these",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where is BHU situated?",
      answers: [
        {
          text: "Varanasi",
          correct: true,
        },
        {
          text: "Kanpur",
          correct: false,
        },
        {
          text: "Sonbhadra",
          correct: false,
        },
        {
          text: "Mirzapur",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who wrote national anthem of India?",
      answers: [
        {
          text: "RN Tagore",
          correct: true,
        },
        {
          text: "Bismil",
          correct: false,
        },
        {
          text: "Premchand",
          correct: false,
        },
        {
          text: "Suraj Shukla",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which is the worst country of world?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Pakistan",
          correct: true,
        },
        {
          text: "Sri Lanka",
          correct: false,
        },
        {
          text: "Nepal",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1000" },
        { id: 6, amount: "₹ 2000" },
        { id: 7, amount: "₹ 4000" },
        { id: 8, amount: "₹ 8000" },
        { id: 9, amount: "₹ 16000" },
        { id: 10, amount: "₹ 32000" },
        { id: 11, amount: "₹ 64000" },
        { id: 12, amount: "₹ 125000" },
        { id: 13, amount: "₹ 250000" },
        { id: 14, amount: "₹ 500000" },
        { id: 15, amount: "₹ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned {earned} from this game</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
