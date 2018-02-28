import {
  GENERATE_AURAL_UPDATE, generateAuralUpdate,
  RESTART_GAME, restartGame,
  MAKE_GUESS, makeGuess
} from "./actions";

describe("generateAuralUpdate", () => {
  it("Should return the action", () => {
    let action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe("restartGame", function () {
  it("Should return the action", function () {
    let correctAnswer = "99";
    let action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe("makeGuess", () => {
  it("Should return the action", () => {
    let guess = "42";
    let action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
