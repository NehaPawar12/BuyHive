import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const PageNotFound = () => {
  return (
    <Layout title={'go back - page not found'}>
      <div classname='pnf'>
        <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>Ooops! Page not Found</h2>
        <Link to='/' className='pnf-button'>
        Go Back
        </Link>
      </div>
    </Layout>
  )
}

export default PageNotFound