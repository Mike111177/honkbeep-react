import { useBoardState } from "../types/BoardContext";
import { CardTarget } from "./CardFloat";

import "./HBHand.scss";

type CardInHandProps = {
  slot: number;
  player: number;
};

function CardInHand({ player, slot }: CardInHandProps) {
  return <CardTarget areaPath={["hands", player, slot]} />;
}

type HBHandProps = {
  player: number;
};

export function HBHand({ player }: HBHandProps) {
  const [playerNames, cards, myTurn] = useBoardState((boardState) => {
    return [
      boardState.initialTurn.game.definition.playerNames,
      boardState.viewTurn.game.hands[player],
      player ===
        (boardState.viewTurn.game.turn - 1) %
          boardState.viewTurn.game.definition.variant.numPlayers,
    ];
  });
  return (
    <div className={`HBHand${myTurn ? " OnPlayerTurn" : ""}`}>
      <div className="handCardArea">
        {cards.map((n, i) => (
          <CardInHand player={player} slot={i} key={i} />
        ))}
      </div>
      <span className="handname">{playerNames[player]}</span>
    </div>
  );
}

export function HBHandsArea() {
  const [playerNames, numPlayers, perspective] = useBoardState((boardState) => {
    const numPlayers =
      boardState.initialTurn.game.definition.variant.numPlayers;
    let perspective = boardState.perspective;
    if (perspective === undefined) {
      perspective = 0;
    } else if (perspective === -1) {
      perspective = (boardState.viewTurn.game.turn - 1) % numPlayers;
    }
    return [
      boardState.initialTurn.game.definition.playerNames,
      numPlayers,
      perspective,
    ];
  });
  return (
    <div className="HBHandsArea">
      {playerNames.map((n, i) => {
        const player = (i + perspective) % numPlayers;
        return <HBHand player={player} key={player} />;
      })}
    </div>
  );
}