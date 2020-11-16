import React from "react";

const Message = props => {
    return(
        <p id='bmi-message'>
            You should {props.bmiMessage} with a BMI of {props.bmiValue}
        </p>
    );
};

export default Message;