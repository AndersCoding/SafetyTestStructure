import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { riskQuestions } from "@/interface/IRiskQuestions";

export default function RiskChecker() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isComplete, setIsComplete] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null); // Reference for ScrollView

  const handleAnswer = (answer: boolean) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));

    if (currentQuestionIndex < riskQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

      // Scroll to the next question
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          y: currentQuestionIndex * 60, // Moves up smoothly
          animated: true,
        });
      }, 200); // Delay to allow UI update before scrolling
    } else {
      setIsComplete(true);
    }
  };

  const totalRiskScore = riskQuestions.reduce((total, question, index) => {
    return (
      total +
      (userAnswers[index] !== undefined
        ? question.calculateRisk(userAnswers[index])
        : 0)
    );
  }, 0);

  if (isComplete) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>
          Your total risk score is: {totalRiskScore}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk Assessment</Text>

      {/* Scrollable Questions List with Ref */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.questionList}>
          {riskQuestions.map((question, index) => {
            const isAnswered = userAnswers[index] !== undefined;
            const isCurrent = index === currentQuestionIndex;

            return (
              <View
                key={index}
                style={[
                  styles.questionItem,
                  isAnswered ? styles.answeredQuestion : null,
                  isCurrent ? styles.currentQuestion : null,
                ]}
              >
                <Text
                  style={[
                    styles.questionText,
                    isAnswered ? styles.answeredText : null,
                  ]}
                >
                  {question.question}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Buttons always visible */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(true)}
        >
          <Text style={styles.buttonText}>✔ Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(false)}
        >
          <Text style={styles.buttonText}>✖ No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20, // Prevents last item from being hidden
  },
  questionList: {
    width: "90%",
    alignSelf: "center",
  },
  questionItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
  },
  answeredQuestion: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  answeredText: {
    color: "#fff",
  },
  currentQuestion: {
    backgroundColor: "#fff3cd",
    borderColor: "#ffc107",
  },
  questionText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
});

