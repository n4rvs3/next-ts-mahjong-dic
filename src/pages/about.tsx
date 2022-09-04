import type { NextPage } from "next"

import { BiLinkAlt } from "react-icons/bi"

import Link from "next/link"

const About: NextPage = () => {
        return (
                <div className="
                 w-11/12
                 mx-auto
                bg-white
                p-10
                 rounded-md
                ">
                        <h1 className="text-2xl pb-2 border-b-2 mb-5">当サイトについて</h1>
                        <div>
                                <p>当サイトは麻雀を遊ぶ上で鬼門となる役の形を纏めたサイトになります。</p>
                                <p>ローカル役に関しては未対応です。</p>
                                <p>ソースコードはこちら</p>
                                <Link href="https://github.com/n4rvs3/next-ts-mahjong-dic">
                                        <a target="_blank" className=" text-teal-400 flex items-center">
                                                <span className="mr-1">
                                                        <BiLinkAlt />
                                                </span>
                                                https://github.com/n4rvs3/next-ts-mahjong-dic
                                        </a>
                                </Link>
                                <p>何かありましたら上記リポジトリのissueへご連絡ください。</p>
                        </div>
                </div>
        )
}

export default About