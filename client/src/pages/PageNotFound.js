import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import '../styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <Layout title={'Go Back - Page Not Found'}>
      <div className='pnf-container'>
        <div className='pnf-content'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Ooops! Page not Found</h2>
          <p className='pnf-description'>
            Sorry, the page you are looking for might have been moved or deleted.
          </p>
          <Link to='/' className='pnf-button'>
            Go Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound
