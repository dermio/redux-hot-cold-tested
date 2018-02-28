import reducer from "./reducer";
import {generateAuralUpdate, restartGame, makeGuess} from "./actions";

describe("reducer", function () {
  it("Should set the initial state when nothing is passed in", function () {
    let state = reducer(undefined, {type: "__UNKNOWN"});
    // console.log(state); to look at the initial state

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.auralStatus).toEqual("");
    expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });

});
