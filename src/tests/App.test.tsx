import { render, screen } from '@testing-library/react';
//
import App from '../App';

describe('App', () => {
	test('should render app', () => {
		render(<App />);
		expect(screen.getByText('Em Desenvolvimento...')).toBeInTheDocument();
	});
});
