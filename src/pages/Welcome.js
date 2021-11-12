import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h2>Welcome page</h2>
      <Link to="/welcome/new-user">new</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
