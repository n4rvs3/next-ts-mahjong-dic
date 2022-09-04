import { ReactNode } from "react";

import { TbArrowBack } from "react-icons/tb"

import Link from "next/link"

interface Props {
        children: ReactNode;
}

export const Description = ({ children }: Props) => {
        return (
                <div className=" w-11/12 mx-auto bg-white my-5 p-10 rounded-md">
                        <Link href="/">
                                <a className=" w-20 flex items-center border-b-2">
                                        <TbArrowBack />
                                        <p className="ml-2">戻る</p>
                                </a>
                        </Link>
                        <div className="mt-20 lg:flex lg:items-center lg:justify-around">
                                {children}
                        </div>
                </div>
        )
}