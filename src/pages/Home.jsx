import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/employees">
            Employees
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Home;
