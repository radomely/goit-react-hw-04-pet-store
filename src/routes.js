import Loadable from 'react-loadable';
import Loader from './components/Loader/Loader';

const AsyncHome = Loadable({
  loader: () =>
    import('./pages/HomePage/HomePage' /* webpackChunkName: 'home-page' */),
  loading: Loader,
});

const AsyncAbout = Loadable({
  loader: () =>
    import('./pages/AboutPage/AboutPage' /* webpackChunkName: 'about-page' */),
  loading: Loader,
});

const AsyncPetsPage = Loadable({
  loader: () =>
    import('./pages/PetsPage/PetsPage' /* webpackChunkName: 'pets-page' */),
  loading: Loader,
});

const AsyncPetPage = Loadable({
  loader: () =>
    import('./pages/PetPage/PetPage' /* webpackChunkName: 'pet-page' */),
  loading: Loader,
});
const AsyncNotFaundPage = Loadable({
  loader: () =>
    import(
      './pages/NotFaundPage/NotFaundPage' /* webpackChunkName: 'not-faund-page' */
    ),
  loading: Loader,
});

const routes = [
  {
    path: '/',
    exact: true,
    component: AsyncHome,
  },
  {
    path: '/about',
    component: AsyncAbout,
  },
  {
    path: '/pets/:id',
    component: AsyncPetPage,
  },
  {
    path: '/pets',
    component: AsyncPetsPage,
  },
  {
    component: AsyncNotFaundPage,
  },
];
export default routes;
