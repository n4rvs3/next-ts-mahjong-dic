import { ReactElement } from 'react'
import { Header } from '../Header'

type LayoutProps = Required<{
        readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
        <div className='bg-slate-50 min-h-screen'>
                <Header />
                <div className='my-8'>
                        {children}
                </div>
        </div>
)