import type { NextPage, InferGetStaticPropsType } from 'next'

import { mahjong_pai } from "@prisma/client";

import { Card } from "../components/card/Card"
import { ParentCard } from "../components/card/ParentCard"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ pai }) => {

  return (
    <div className=' w-11/12 mx-auto'>
      <h1 className='text-2xl border-b-2 pb-2 mb-5'>役一覧</h1>
      <div className='flex flex-wrap justify-between'>
        {pai.map((res => (
          <ParentCard key={res.id} link={res.name_eng}>
            <Card data={res} />
          </ParentCard>
        )))}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const url: any = process.env.api_url
  const res = await fetch(url)
  const pai: mahjong_pai[] = await res.json()

  return {
    props: {
      pai,
    },
  }
}