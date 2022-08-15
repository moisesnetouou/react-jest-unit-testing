import {render, fireEvent} from '@testing-library/react';

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

  it('should be able to add new item to the list', ()=> {
    const { getByText } = render(<App />)

    const addButton = getByText('Adicionar');
    fireEvent.click(addButton)

    expect(getByText('Novo')).toBeInTheDocument()
  })
})