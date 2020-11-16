import React from "react";
import { shallow } from "enzyme";

import Message from "../component/Message";

describe("Message component", () => {
    const wrapper = shallow(<Message bmiMessage="Take a shot" bmiValue="23.59" />);

    it("renders with message prop", () => {
        expect(wrapper.find("#bmi-message").text()).toEqual(
            "Take a shot 23.59"
        );
    });
});