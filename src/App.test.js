import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render ( 
  
      <App />
      );
  const welcomeElement = getByText(/Welcome to Khalil App/i); 
  expect(welcomeElement).toBeInTheDocument();
});
