import { ReactElement } from 'react'
import { Header } from '../Header'
import { Footer } from "../Footer"

type LayoutProps = Required<{
        readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
        <div className='bg-slate-200 min-h-screen'>
                <Header />
                <div className='my-8'>
                        {children}
                </div>
                <Footer />
        </div>
)