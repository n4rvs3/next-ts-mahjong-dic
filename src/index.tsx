const Descript = () => {
        return (
                <h1>descript</h1>
        )
}

export default Descript

export const getStaticPaths = async () => {
        const url: any = process.env.api_url
        const res = await fetch(url)
        const pai = await res.json()
}