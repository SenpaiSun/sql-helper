import { Link as RouterLink } from 'react-router-dom';

export interface PropsLink {
  toPage: string
  name: string
}

export const NavItem = ({toPage, name}: PropsLink) => {
  return (
    <RouterLink className='text-white hover:text-gray-300' to={toPage}>{name}</RouterLink>
  );
};
