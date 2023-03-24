import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layout'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'

import { Button, Card, CardHeader, CardContent } from '@mui/material';



export default function Home({
}) {
  const router = useRouter();
  const {id} = router.query;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Welcome to the questionnaire app</h2>
        <Card raised>
          <CardHeader title="Please click below to begin"></CardHeader>
          <CardContent>
            <Button variant='contained' onClick={()=>{router.push({pathname: `/questions/${1}`})}}>Start</Button>
          </CardContent>
        </Card>
        
      </section>
    </Layout>
  )
}