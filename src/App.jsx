import About from './pages/about/About';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Housing from './pages/housing/Housing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/housing",
    element: <Housing />
  },
  {
    path: "*",
    element: <Error />,
  },
])


function App() {
  return (
    <>
			<RouterProvider router={router}/>
		</>
  );
}

export default App;
