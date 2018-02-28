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

  it("Should return the current state of an unknown action", () => {
    let currentState = {};
    let state = reducer(currentState, {type: "__UNKNOWN"});
    expect(state).toBe(currentState);
  });


  describe("generateAuralUpdate", () => {
    it("Should generate aural update", () => {
      let state = {
        guesses: [25, 3, 90],
        feedback: "You're Warm.",
        auralStatus: ""
      };

      state = reducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25");
    });
  });

  describe("restartGame", () => {
    it("Should restart the game", () => {
      let state = {
        guesses: [9, 99, 42],
        feedback: "Caliente",
        correctAnswer: 23
      };
      let correctAnswer = 42;

      state = reducer(state, restartGame(correctAnswer));
      // The state is reset with a correct answer, a new game is started
      // console.log(state);

      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual("Make your guess!");
      expect(state.correctAnswer).toEqual(42);
      expect(state.auralStatus).toEqual("");
    });
  });

  describe("makeGuess", () => {
    it("Should make a guess", () => {
      let state = {
        guesses: [],
        feedback: "",
        correctAnswer: 42
      };

      state = reducer(state, makeGuess(100));
      expect(state.guesses).toEqual([100]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(53));
      expect(state.guesses).toEqual([100, 53]);
      expect(state.feedback).toEqual("You're Warm.");

      state = reducer(state, makeGuess(42));
      expect(state.guesses).toEqual([100, 53, 42]);
      expect(state.feedback).toEqual("You got it!");
    });
  });

});
