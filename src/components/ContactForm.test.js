import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders ContactForm', () => {
    render(<ContactForm />);
});

test('user can fill out and submit the form', async () => {
    render(<ContactForm />);

    const firstName = screen.getByPlaceholderText(/enter name/i);
    const lastName = screen.getByPlaceholderText(/enter last name/i);
    const email = screen.getByPlaceholderText(/enter email/i);
    const message = screen.getByPlaceholderText(/enter message/i);

    // fill out the form (top to bottom)
    fireEvent.change(firstName, { target: { value: 'William' } });
    fireEvent.change(lastName, { target: { value: 'Jensen' } });
    fireEvent.change(email, { target: { value: 'thisismyemail@gmail.com'} });
    fireEvent.change(message, { target: { value: 'This is my very interesting message'} });

    // assert the forms have the values
    expect(firstName).toHaveValue('William');
    expect(lastName).toHaveValue('Jensen');
    expect(email).toHaveValue('thisismyemail@gmail.com');
    expect(message).toHaveValue('This is my very interesting message');

    // submit the form - click button - this will somestimes update the page asynchronously
    const button = screen.getByRole("button", { name: /submit/i});
    fireEvent.click(button);

});