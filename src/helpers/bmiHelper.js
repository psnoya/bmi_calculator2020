export const calculateBmi = (weight, height) => {
    const bmiValue = (weight / (((height / 100) * height) / 100)).toFixed(2);
    const bmiMessage = setBMIMessage(bmiValue);
    return [bmiValue, bmiMessage];
};

const setBMIMessage = finalBMI => { 
    if (finalBMI <= 18.5) {
        return "Eat cake";
    }

    if (finalBMI > 18.5 && finalBMI <= 25 ) {
        return "Take a shot";
    }

    if (finalBMI > 18.5 && finalBMI <= 30 ) { 
        return "be Chunky and Funky";
    }

    if (finalBMI > 30) {
        return "Just stop";
    }
};
