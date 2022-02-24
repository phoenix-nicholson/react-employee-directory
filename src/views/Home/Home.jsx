import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Hello World
      <p>
        <Link to="/login">sign in</Link>
      </p>
    </div>
  );
}
