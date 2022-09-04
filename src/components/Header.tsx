import Link from "next/link"

export const Header = () => {
        return (
                <div className="
                w-full
                h-14
                px-5 md:px-10
                flex
                text-xl
                justify-between
                items-center
                text-slate-100
                bg-slate-800
                ">
                        <h1>
                                <Link href="/">
                                        <a>
                                                Mahjong.dev
                                        </a>
                                </Link>
                        </h1>
                        <nav>
                                <ul>
                                        <li className="text-sm">
                                                <Link href="/about">
                                                        About
                                                </Link>
                                        </li>
                                </ul>
                        </nav>
                </div>
        )
}