import { ReactNode } from 'react'

import CustomProvider from './customProvider'
import GlobalLayout from './globalLayout'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <CustomProvider>
                    <GlobalLayout>{children}</GlobalLayout>
                </CustomProvider>
            </body>
        </html>
    )
}
