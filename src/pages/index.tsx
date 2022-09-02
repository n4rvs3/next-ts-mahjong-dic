import type { NextPage, InferGetStaticPropsType } from 'next'
// import { useEffect } from 'react'

import { mahjong_pai } from "@prisma/client";

// type Props = InferGetStaticPropsType<typeof getStaticProps>

// const Home: NextPage<Props> = ({ pai }) => {
const Home = () => {

  // console.log(pai)

  return (
    <div >
      <p>hello world</p>
      {/* <div>
        {pai.map((res => (
          <div
            key={res.id}
            className=""
          >
            <p className='text-lg my-2'>{res.name}</p>
          </div>
        )))}
      </div> */}
    </div>
  )
}

export default Home

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/mahjong')
//   const pai: mahjong_pai[] = await res.json()

//   return {
//     props: {
//       pai,
//     },
//   }
// }