import Categories from './Categories'
import Filters from './Filters'
import TopMenu from './TopMenu'
import Cards from './Cards'

import { RightBox, MiddleBox, Wrraper } from './styleComponents'
function Middle() {
    return (
        <Wrraper>
            <MiddleBox>
                <TopMenu />
                <Cards />
            </MiddleBox>
            <RightBox>
                <Categories />
                <Filters />
            </RightBox>
        </Wrraper>
    )
}

export default Middle
