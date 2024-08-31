import { Link as RouterLink } from 'react-router-dom';

interface Props {
  toPage: string
  name: string
}

export const Link = ({toPage, name}: Props) => {
  return (
    <RouterLink to={toPage}>{name}</RouterLink>
  );
};
