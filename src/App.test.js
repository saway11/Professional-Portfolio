import { render, screen } from '@testing-library/react';
import App from './App';

TextDecoderStream('renders learn react links', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});