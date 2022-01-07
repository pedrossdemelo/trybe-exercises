import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Input field tests', () => {
  test('Testing the insertion of multiple todo items to the app', () => {
    const listTodo = ['Do a Code Review', 'Read a Medium post', 'Drink Water'];
    render(<App />);
    // Selecting the input by the label
    const inputTask = screen.getByLabelText('Tarefa:');
    // Selecting the add button by the innerText
    const addButton = screen.getByText('Adicionar');
    // Simulating the user inputing multiple tasks
    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(addButton);
    });
    // Validating that the tasks are in the DOM
    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testing the item component', () => {
  test('When receiving a string as prop it must appear on the screen', () => {
    render(<Item content="Practice and practice" />);
    expect(screen.getByText('Practice and practice')).toBeInTheDocument();
  });
});
