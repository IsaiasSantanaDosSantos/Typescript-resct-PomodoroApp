import React from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTimer={mainTime} />

      <div className="controls">
        <Button text="Teste" onClick={() => console.log("Clicou!")} />
        <Button text="Teste" onClick={() => console.log("Clicou!")} />
        <Button text="Teste" onClick={() => console.log("Clicou!")} />
      </div>

      <div className="details">
        <p>Testando: dknkdnend dedd dewmd dwe </p>
        <p>Testando: dknkdnend dedd dewmd dwe </p>
        <p>Testando: dknkdnend dedd dewmd dwe </p>
        <p>Testando: dknkdnend dedd dewmd dwe </p>
        <p>Testando: dknkdnend dedd dewmd dwe </p>
      </div>
    </div>
  );
}
