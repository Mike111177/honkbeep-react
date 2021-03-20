import { useMemo, useContext } from "react";
import ArrayUtil from "../../util/ArrayUtil";
import { GameUIContext } from "./ClientState";

import "./HBScoreBoard.scss";

export function HBScoreBoard() {
  const context = useContext(GameUIContext);
  const viewState = context.useViewTurn();

  const { turn, clues, strikes, stacks } = viewState.game;
  const score = useMemo(() => stacks.reduce((acc, v) => acc + v.length, 0), [
    stacks,
  ]);
  return (
    <div className="HBScoreBoard">
      Turn: {turn}
      <br />
      Score: {score} / 25
      <br />
      Clues:{" "}
      <span
        style={{
          color: clues === 8 ? "lightgreen" : clues === 1 ? "red" : "white",
        }}
      >
        {clues}
      </span>
      <br />
      Strikes:{" "}
      {ArrayUtil.fill(3, (i) =>
        i + 1 > strikes ? undefined : (
          <span key={i} style={{ color: "red" }}>
            {" "}
            X{" "}
          </span>
        )
      )}
    </div>
  );
}