import { appRoutes } from 'app/routes'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import {
    HeaderDropdown,
    HeaderGroup,
    HeaderLink,
    HeaderPicture,
    HeaderProfile
} from '../../../components'
import SignOutBtn from './SignOutBtn'

const RightNavHeader = async () => {
    // const [searchTerm, setSearchTerm] = useState<string>('')
    const session = await getServerSession()
    const { name, email } = session.user

    if (!session) {
        redirect(appRoutes.HOME)
    }

    return (
        <HeaderGroup>
            {/* <HeaderSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            /> */}
            <HeaderProfile>
                <HeaderPicture src='2' />
                <HeaderDropdown>
                    <HeaderGroup>
                        <HeaderLink href='#'>{name || email || ''}</HeaderLink>
                    </HeaderGroup>
                    <SignOutBtn />
                </HeaderDropdown>
            </HeaderProfile>
        </HeaderGroup>
    )
}

export default RightNavHeader
