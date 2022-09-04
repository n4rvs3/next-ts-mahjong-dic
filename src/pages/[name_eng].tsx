import type { NextPage, InferGetStaticPropsType } from 'next'

import Image from 'next/image'

import { mahjong_pai } from "@prisma/client"

import { Description } from "../components/pages/descrip"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Descrip: NextPage<Props> = ({ pai }) => {

        console.log(pai)

        return (
                <Description>
                        <div className=' w-full lg:w-2/5 text-center lg:text shadow-md rounded-md'>
                                {
                                        pai[0].is_image ? <Image src={`/mahjong/${pai[0].name_eng}.jpg`} width="274" height="28" alt='麻雀役の画像' /> : <Image src="/mahjong/guess.jpg" width="200" height="121" alt='画像がありません' />
                                }
                        </div>
                        <div className=' w-full lg:w-1/2 mt-20 lg:mt-0'>
                                <h1 className='text-2xl border-b-2 pb-2'>{pai[0].name}</h1>
                                <p className='my-6'>{pai[0].description}</p>
                                <p className=' border-b-2 text-2xl pb-2'>飜数</p>
                                <p className='my-6'>{pai[0].count}</p>
                                {
                                        pai[0].is_menzen ?
                                                <>
                                                        <p className=' border-b-2 text-2xl pb-2'>門前が必須？</p>
                                                        <p className='my-6'>必須</p>
                                                </> :
                                                <>
                                                        <p className=' border-b-2 text-2xl pb-2'>門前が必須？</p>
                                                        <p className='my-6'>必須でない</p>
                                                </>
                                }
                        </div>
                </Description>
        )
}

export default Descrip

export const getStaticPaths = async () => {
        const url: any = process.env.api_url
        const res = await fetch(url)
        const pai: mahjong_pai[] = await res.json()
        const paths = pai.map((res) => `/${res.name_eng}`)

        return {
                paths,
                fallback: false
        }
}

export const getStaticProps = async ({ params }: any) => {
        const name = params.name_eng
        const url: any = process.env.api_url
        const res = await fetch(url)
        const data: mahjong_pai[] = await res.json()
        const pai: mahjong_pai[] = []
        data.map((dt) => {
                if (dt.name_eng == name) {
                        pai.push(dt)
                }
        })
        return {
                props: {
                        pai,
                }
        }
}