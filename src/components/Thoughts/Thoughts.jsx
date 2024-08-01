import React from "react";
import { thoughts } from "./thoughts";

export default function Thoughts() {
  return (
    <div className='layout'>
      <h1>Thoughts</h1>
      {thoughts.map((thought) => {
        return (
          <div key={thought.id} className='thought-wrapper'>
            <h2>{thought.title}</h2>
            <div className='line' />
            <p className='date'>{thought.date}</p>
            <div dangerouslySetInnerHTML={{ __html: thought.body }} />
          </div>
        );
      })}
    </div>
  );
}
