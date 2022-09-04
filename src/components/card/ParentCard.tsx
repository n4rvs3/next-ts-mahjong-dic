import { ReactNode } from "react";

import Link from "next/link"

interface Props {
        children: ReactNode;
        link: String;
}

export const ParentCard = ({ children, link }: Props) => {
        return (
                <div className="
                        w-full
                        md:w-80
                        lg:w-80
                        h-64
                        md:h-96
                        min-h-full
                        flex
                        items-center
                        md:justify-around
                        flex-col
                        shadow-md
                        rounded-md
                        my-3
                        hover:-translate-y-3
                        ease-in-out
                        transition
                        bg-white
                        relative
                ">
                        <Link href={`/${link}`}>
                                <a className=" block w-full h-full">
                                        {children}
                                </a>
                        </Link>
                </div>
        )
}