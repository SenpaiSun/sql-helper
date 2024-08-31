import { Link, PropsLink } from "./Link/Link";


export const GroupedLinks = ({ toPage, name }: PropsLink) => {
  return (
    <div>
      <Link toPage={toPage} name={name} />
    </div>
  );
};
