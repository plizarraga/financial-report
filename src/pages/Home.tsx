import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <NavLink to="/about">About</NavLink>
      <br />
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </>
  );
};

export default Home;
