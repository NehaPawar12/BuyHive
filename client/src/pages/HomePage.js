import React from 'react';
import Layout from './../components/Layout/Layout';
import { useAuth } from '../context/auth';

const HomePage = () => {
  const [auth, setAuth] = useAuth(); // Correctly access auth and setAuth

  return (
    <Layout title={'Best Offers'}>
      <h1>
        Home Page
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h1>
    </Layout>
  );
};

export default HomePage;
