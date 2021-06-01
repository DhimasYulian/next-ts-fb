import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { db } from '../firebase'
import Login from './Login'

const Home = ({session}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
    <Head>
        <title>Next Typescript FB</title>
    </Head>

    <Header/>
    <main className="flex">
      <Sidebar />
      <Feed />
      <Widgets />
    </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    }
  }
}

export default Home
