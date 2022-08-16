import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {List} from './List';

describe('List Component', () => {
  it('should render list items', async () => {
    const { getByText, unmount, queryByText } = render(<List initialItems={['Moises', 'Geo', 'Neto', 'Besourinha', 'Gaia', 'Tobias']} />)
    
    expect(getByText('Moises')).toBeInTheDocument()
    expect(getByText('Geo')).toBeInTheDocument()
    expect(getByText('Neto')).toBeInTheDocument()
    expect(getByText('Besourinha')).toBeInTheDocument()
    expect(getByText('Gaia')).toBeInTheDocument()
    expect(getByText('Tobias')).toBeInTheDocument()
 
    unmount();
    render(<List initialItems={['Florzinha']} />)
  
    expect(getByText('Florzinha')).toBeInTheDocument()
    expect(queryByText('Neto')).not.toBeInTheDocument()
  });

  it('should be able to add new item to the list', async ()=> {
    const { getByText,getByPlaceholderText } = render(<List initialItems={[]} />)

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    await userEvent.type(inputElement, 'Novo');

    await userEvent.click(addButton)

    await waitFor(async ()=> {
      expect(getByText('Novo')).toBeInTheDocument()
    })
  })

  it('should be able to add remove item to the list', async ()=> {
    const { getByText,getAllByText, queryByText } = render(<List initialItems={['Moises']} />)

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