import { Link as RouterLink, useLocation } from 'react-router-dom';
import {clsx} from 'clsx';

export interface PropsLink {
  toPage: string
  name: string
}

export const NavItem = ({toPage, name}: PropsLink) => {
  const currentRoute = useLocation()
  console.log(currentRoute.pathname, toPage)
  return (
    <RouterLink className={`text-white hover:text-gray-300 ${clsx(currentRoute.pathname === toPage && 'underline hover:underline focus:underline text-gray-400')}`} to={toPage}>{name}</RouterLink>
  );
};
