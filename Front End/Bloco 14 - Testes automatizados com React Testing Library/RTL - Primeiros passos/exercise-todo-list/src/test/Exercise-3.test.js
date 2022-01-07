/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Não deve haver botões de remover após a primeira renderização da página', () => {
    const { findAllByTestId } = render(<App />);
    const btnRemove = findAllByTestId('id-remove')[0];

    expect(btnRemove).toBe(undefined);
  });

  test('Testando a seleção de elemento', async () => {
    const { getByLabelText, getByText, findAllByText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    const [btnRemove] = await findAllByText('Remover');
    const selectTask = getByText('Exercitar');

    expect(selectTask).toBeInTheDocument();
    expect(btnRemove.disabled).toBe(true);
    userEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    userEvent.click(btnRemove);
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  });
});
