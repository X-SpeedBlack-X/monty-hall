import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Card } from "../components/Card";
import { InputNumber } from "../components/InputNumber";

export default function Home() {
  const [doorsNumbers, setDoorsNumbers] = useState(3);
  const [haveGift, setHaveGift] = useState(1);

  return (
    <div>
      <Head>
        <title>Monty Hall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex">
          <Card bgColor="#c0392c">
            <h1 className=" flex flex-1 items-center justify-center">
              {" "}
              Monty Hall
            </h1>
          </Card>
          <Card>
            <InputNumber
              text="Qtde de Portas?"
              value={doorsNumbers}
              onChange={(newDoorsNumbers) => setDoorsNumbers(newDoorsNumbers)}
            />
          </Card>
        </div>

        <div className="flex">
          <Card>
            <InputNumber
              text="Porta com Presente?"
              value={haveGift}
              onChange={(newDoorGift) => setHaveGift(newDoorGift)}
            />
          </Card>
          <Card bgColor="#28a085">
            <Link href={`/play`}>
              <h2 className="flex flex-1 items-center justify-center cursor-pointer m-0">
                Iniciar
              </h2>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
