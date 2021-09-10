import React from "react";
import Answer from "../Answer";
import { MiniPlayer } from "../MiniPlayer";
import { ProggresBar } from "../ProggresBar";
const Quize = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <ProggresBar />
      <MiniPlayer />
    </>
  );
};
export default Quize;
