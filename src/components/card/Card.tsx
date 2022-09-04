import Image from "next/image"

export const Card = ({ data }: any) => {
        return (
                <>
                        <div className="w-full h-44 md:h-64 flex items-center justify-center">
                                {
                                        data.is_image ? <Image src={`/mahjong/${data.name_eng}.jpg`} width="274" height="28" alt='麻雀役の画像' /> : <Image src="/mahjong/guess.jpg" width="200" height="121" alt='画像がありません' />
                                }
                        </div>
                        <p className="text-xl my-2 text-center">{data.name}</p>
                        <p className=" top-0 absolute w-16 text-center bg-slate-500 text-white rounded-sm">{data.count}飜</p>
                </>
        )
}