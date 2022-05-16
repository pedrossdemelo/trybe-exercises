import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const sampleTask = 'Sample Task';

describe('Testing the main todo list functionality', () => {
  test('Validate the button exists and has the correct text',
    () => {
      render(<App />);
      // Selecting the button by its innerText and verifying it is a button
      const addButton = screen.getByText('Adicionar');
      expect(addButton.type).toBe('button');
      // Asserting that the button is in the DOM
      expect(addButton).toBeInTheDocument();
    });

  test('Validating if the button is clickable and if the input is visible',
    () => {
      render(<App />);
      // Selecting the input by the label
      const inputTask = screen.getByLabelText('Tarefa:');
      // Selecting the add button by the innerText
      const addButton = screen.getByText('Adicionar');
      // Simulating the user inputing a task
      userEvent.type(inputTask, sampleTask);
      // The input from the user should not be visible yet
      expect(screen.queryByText(sampleTask)).not.toBeInTheDocument();
      // Simulating the user click on the button
      userEvent.click(addButton);
      // The input from the user should be visible
      expect(screen.queryByText(sampleTask)).toBeInTheDocument();
    });
});
