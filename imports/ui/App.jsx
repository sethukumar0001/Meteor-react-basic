import React from 'react';
import { Task } from './Task';

const tasks = [
  {id:1,text:'task1'},
  {id:2,text:'task2'},
  {id:3,text:'task3'},
  {id:4,text:'task4'}
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor@sethu!</h1>
    <ul>
      {tasks.map(task=><Task key={task.id} task={task.text} />)}
    </ul>
  </div>
);
