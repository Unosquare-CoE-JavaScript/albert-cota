import {render, screen } from '@testing-library/react';
import UserForm from './UserForm';

test('it shows two input fields and a button', () => {
    render(<UserForm />);
    
    const inputs = screen.getAllByRole('textbox');
    const submitButton = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});