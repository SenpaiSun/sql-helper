import { Link as RouterLink } from 'react-router-dom';

export interface PropsLink {
  toPage: string
  name: string
}

export const Link = ({toPage, name}: PropsLink) => {
  return (
    <RouterLink to={toPage}>{name}</RouterLink>
  );
};
