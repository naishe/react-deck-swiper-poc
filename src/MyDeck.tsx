import React, { useState } from "react";
import { Swipeable, direction } from "react-deck-swiper";
import EmailForm from "./EmailForm";

// const arr = ["Nishant", "Neeraj", "Rajat", "Ranjan"];
const arr = [
  {
    que: "1aksdhkad",
    yes: 0,
    no: 2,
  },
  {
    que: "2aksdhkad",
    yes: 1,
    no: 4,
  },
  {
    que: "3aksdhkad",
    yes: 3,
    no: 9,
  },
  {
    que: "4aksdhkad",
    yes: 1,
    no: 0,
  },
  {
    que: "5aksdhkad",
    yes: 0,
    no: 2,
  },
];
const MIN = 0;
const MAX = arr.length - 1;

const MyDeck = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);

  const addScore = (individualScore: number) =>
    setScore(score + individualScore);

  // const handleOnSwipe = (swipeDirection: direction) => {
  //   if (swipeDirection === direction.RIGHT) {
  //     if (index < MAX) {
  //       setIndex(index + 1);
  //     }
  //     return;
  //   }

  //   if (swipeDirection === direction.LEFT) {
  //     if (index > MIN) {
  //       setIndex(index - 1);
  //     }
  //     return;
  //   }
  // };

  const handleOnSwipe = (swipeDirection: direction) => {
    if (swipeDirection === direction.RIGHT) {
      if (index < MAX) {
        addScore(arr[index].yes);
      }
    }

    if (swipeDirection === direction.LEFT) {
      addScore(arr[index].no);
    }

    if (index < MAX) {
      setIndex(index + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Score: {score}</h1>
      <div
        style={{
          border: "2px solid red",
          width: "500px",
        }}
      >
        {showEmailForm ? (
          <EmailForm />
        ) : (
          <Swipeable onSwipe={handleOnSwipe}>
            <div className="card">
              <h2>{arr[index].que}</h2>
            </div>
          </Swipeable>
        )}
      </div>
    </div>
  );
};

export default MyDeck;
