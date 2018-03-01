import React from "react";
import {shallow} from "enzyme";

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessCount />);
  });

  /*
  it("Renders the correct guess count", () => {
    let value = 9;
    let wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
  */
});
