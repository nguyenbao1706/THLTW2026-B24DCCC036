import { useState } from "react";
import { Button, Table, Space, Typography } from "antd";

const { Title } = Typography;

type Choice = "Kéo" | "Búa" | "Bao";

interface GameHistory {
  key: number;
  player: Choice;
  computer: Choice;
  result: string;
}

const choices: Choice[] = ["Kéo", "Búa", "Bao"];

const getComputerChoice = (): Choice => {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const getResult = (player: Choice, computer: Choice) => {
  if (player === computer) return "Hòa";

  if (
    (player === "Kéo" && computer === "Bao") ||
    (player === "Búa" && computer === "Kéo") ||
    (player === "Bao" && computer === "Búa")
  ) {
    return "Thắng";
  }

  return "Thua";
};

const Game = () => {
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  const playGame = (playerChoice: Choice) => {
    const computer = getComputerChoice();
    const gameResult = getResult(playerChoice, computer);

    setComputerChoice(computer);
    setResult(gameResult);

    const newGame: GameHistory = {
      key: history.length + 1,
      player: playerChoice,
      computer: computer,
      result: gameResult,
    };

    setHistory([newGame, ...history]);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
    },
    {
      title: "Người chơi",
      dataIndex: "player",
    },
    {
      title: "Máy",
      dataIndex: "computer",
    },
    {
      title: "Kết quả",
      dataIndex: "result",
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Title level={2}>Trò Chơi Oẳn Tù Tì</Title>

      <Space>
        <Button type="primary" onClick={() => playGame("Kéo")}>
          Kéo
        </Button>
        <Button type="primary" onClick={() => playGame("Búa")}>
          Búa
        </Button>
        <Button type="primary" onClick={() => playGame("Bao")}>
          Bao
        </Button>
      </Space>

      <div style={{ marginTop: 20 }}>
        <p>Máy chọn: {computerChoice}</p>
        <h3>Kết quả: {result}</h3>
      </div>

      <Table
        style={{ marginTop: 20 }}
        dataSource={history}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default Game;