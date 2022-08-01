import React, { useEffect, useState } from "react";
import {
  Option,
  Question,
  TestBox,
  TestWrapper,
  Title,
  FinishedButton,
  Loading,
  Container,
} from "../../../styles/styleQuizpage";
import Timer from "../../../component/Timer/index";
import axios from "axios";
import { baseLink } from "../../../component/APIlink/baseLink";
import { levelA } from "../question/levelA";

function QuizPage() {
  const [tests, setTests] = useState([]);
  const [answers, setAnswers] = useState({});
  // const [timeOut, setTimeOut] = useState(false);
  const [submitProcess, setSubmitProcess] = useState({
    loading: false,
    error: false,
    success: false,
  });

  // const getTests = () => {
  //   axios({
  //     method: "GET",
  //     url: `${baseLink}/quiz`,
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcl91c2VyIiwiaWF0IjoxNjQzNzE0NjU5LCJleHAiOjE2NzUyNTA2NTl9.yu0TYijUOOO88Wiaq8K33-TBpkT7jMox8kp4-ck8pwlFtPBTcs1GsCs6-S373mrSWbWKPIbfYJq8n4dmPRZ8Iw",
  //     },
  //   })
  //     .then((res) => {
  //       setTests(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   console.log("update or mount");
  //   getTests();
  //   window.onbeforeunload = () => false;
  //   return () => {
  //     //   console.log("unmount");
  //     window.onbeforeunload = null;
  //   };
  // }, []);

  const handleAnswer = (e) => {
    const { name, value } = e.target;
    setAnswers((prevState) => ({ ...prevState, [name]: value }));
    console.log(answers);
  };

  const submitQuiz = () => {
    setSubmitProcess({
      loading: true,
      error: false,
      success: false,
    });
    const answersInArray = [];
    for (const answer in answers) {
      answersInArray.push({
        questionId: Number(answer),
        choiceId: Number(answers[answer]),
      });
    }
    console.log(answersInArray);

    const form = {
      answers: answersInArray,
    };
    console.log(form);

    // axios({
    //   method: "POST",
    //   data: form,
    //   url: `${baseLink}/quiz/submit-answer-of-user`,
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcGFjZV9hY2FkZW15IiwiaWF0IjoxNjMxNzg4MTAzLCJleHAiOjE2NjMzMjQxMDN9.Rs9VPFUNbhgrMnTV-Urtd7Z5E0NJhQc1sMA_NbgmNNsWockKinNo7j-TrGlzl5_Q-HNf4b2fXarbzUx3ZVXk9w",
    //   },
    // })
    //   .then((res) => {
    //     setSubmitProcess({
    //       loading: false,
    //       error: false,
    //       success: true,
    //     });
    //   })
    //   .catch((err) => {
    //     setSubmitProcess({
    //       loading: false,
    //       error: true,
    //       success: false,
    //     });
    //   })
    //   .finally(() => {
    //     setTimeout(() => {
    //       setSubmitProcess({
    //         loading: false,
    //         error: false,
    //         success: false,
    //       });
    //     }, 3000);
    //   });
  };

  return (
    <div>
      {/* {!fullName.allow ? (
                <FullNameInputWrapper>
                    <FullNameInputBox onSubmit={submitFullName}>
    
                    <input
                            type="text"
                            name="firstName"
                            placeholder="firstname"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="lastname"
                            required
                        />
                        <button>start test</button>
                    </FullNameInputBox>
                </FullNameInputWrapper>
            ) : ( */}
      <Container>
        <Timer setTimeOut={setTimeOut} />
        <Title>Quiz</Title>
        <TestWrapper>
          <h1>Level-A</h1>
          {levelA
            // ?.filter(({quizCategory}) => quizCategory.category === "React")
            ?.map(({ id, question, quizCategory, options, answer }, index) => {
              if (index < 30) {
                return (
                  <TestBox key={id}>
                    <Question>
                      {index + 1} {question}
                    </Question>
                    {options.map((value, oIndex) => (
                      <Option key={oIndex}>
                        <input
                          onChange={handleAnswer}
                          type="radio"
                          name={index}
                          value={value}
                        />{" "}
                        {value}
                      </Option>
                    ))}
                  </TestBox>
                );
              }
            })}
        </TestWrapper>
        <FinishedButton
          process={submitProcess}
          disabled={
            submitProcess.loading ||
            submitProcess.success ||
            submitProcess.error
          }
          onClick={submitQuiz}
        >
          {submitProcess.loading ? (
            <Loading />
          ) : submitProcess.success ? (
            "Success"
          ) : submitProcess.error ? (
            "Error"
          ) : (
            "Finished"
          )}
        </FinishedButton>
      </Container>
      {/* )} */}
    </div>
  );
}

export default QuizPage;
