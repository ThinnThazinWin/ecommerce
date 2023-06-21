import React from 'react'
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

function Unauthorized() {

    const router = useRouter();
    const {message} = router.query;
    
  return (
    <Layout title='Unauthorized page'>
      <h1>Access Denied</h1>
      {message && <div className='mb-4 text-red-500'>{message}</div>}
    </Layout>
  )
}

export default Unauthorized
