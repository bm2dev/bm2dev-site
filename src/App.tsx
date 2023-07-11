import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { useEffect } from 'react';
import TemaProvider from './context/Tema/Tema';
import { Home } from './pages/Home';

function App() {
	useEffect(() => {
		moment.locale('pt-BR');
	}, []);
	return (
		<TemaProvider>
			<Home />
		</TemaProvider>
	);
}

export default App;
