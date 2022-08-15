import {render, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)

    expect(getByText('Moises')).toBeInTheDocument()
    expect(getByText('Geo')).toBeInTheDocument()
    expect(getByText('Neto')).toBeInTheDocument()
    expect(getByText('Besourinha')).toBeInTheDocument()
    expect(getByText('Gaia')).toBeInTheDocument()
    expect(getByText('Tobias')).toBeInTheDocument()
  });

  it('should be able to add new item to the list', async ()=> {
    const { getByText,getByPlaceholderText } = render(<App />)

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    await userEvent.type(inputElement, 'Novo');

    await userEvent.click(addButton)

    await waitFor(async ()=> {
      expect(getByText('Novo')).toBeInTheDocument()
    })
  })

  it('should be able to add remove item to the list', async ()=> {
    const { getByText,getAllByText, queryByText } = render(<App />)

    const addButton = getByText('Adicionar');
    const removeButtons = getAllByText('Remover');

    await userEvent.click(removeButtons[0])

    // await waitForElementToBeRemoved(()=> {
    //   return getByText('Moises')
    // })
    await waitFor(() => {
      expect(queryByText('Moises')).not.toBeInTheDocument()
    })
  })
})