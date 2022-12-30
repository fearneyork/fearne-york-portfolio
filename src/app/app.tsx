// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Home } from '@fearne-york-portfolio/home';
import { Cv } from '@fearne-york-portfolio/cv';
import { Route, Routes} from 'react-router-dom'


export function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<Cv />}></Route>
      </Routes>
  );
}

export default App;
