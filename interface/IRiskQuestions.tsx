type RiskQuestions = {
    question: string;
    calculateRisk: (answer: boolean) => number;
}

export const riskQuestions: RiskQuestions[] = [
    {
        question: 'Do you smoke?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you drink alcohol?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you exercise regularly?',
        calculateRisk: (answer) => answer ? -20 : 10
    },
    {
        question: 'Do you have a family history of heart disease?',
        calculateRisk: (answer) => answer ? 20 : 0
    },
    {
        question: 'Do you have a family history of diabetes?',
        calculateRisk: (answer) => answer ? 20 : 0
    },
    {
        question: 'Do you have a family history of cancer?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of Alzheimer\'s?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of Parkinson\'s?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of stroke?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of high blood pressure?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of high cholesterol?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of obesity?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of arthritis?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of osteoporosis?',
        calculateRisk: (answer) => answer ? 10 : 0
    },
    {
        question: 'Do you have a family history of depression?',
        calculateRisk: (answer) => answer ? 10 : 0
    }]