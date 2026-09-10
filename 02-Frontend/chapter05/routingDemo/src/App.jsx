import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, About, Contact, NotFound, Register, Products, ProductItem } from '@/pages/';

import { MainLayout } from '@/layouts/';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='register' element={<Register />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:slug' element={<ProductItem />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
