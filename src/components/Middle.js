import Categories from './Categories'
import Filters from './Filters'
import TopMenu from './TopMenu'
import Cards from './Cards'
import { RightBox, MiddleBox, Wrraper } from './styleComponents'
import { DATA } from "./DATA";
import { useState, useEffect } from 'react';


function Middle() {
    const [data, setData] = useState(DATA);
    const [filters, setFilters] = useState({
        inputValue: '',
        category: '',
        switchs: {}
    })

    function handleFilter(key, value) {
        const filtered = {
            ...filters,
            [key]: value
        }
        setFilters(filtered)
    }

    useEffect(() => {
        const {inputValue, category, switchs} = filters;
        const {shop, immadiate, withImage} = switchs;

        let filteredData = [...DATA]
        if (shop) {
            filteredData = filteredData.filter(item => item.shop)
        } if (immadiate) {
            filteredData = filteredData.filter(item => item.immadiate)
        } if (withImage) {
            filteredData = filteredData.filter(item => item.image)
        } if (inputValue) {
            filteredData = filteredData.filter(item => item.title.includes(inputValue))
        } if(category){
            filteredData = filteredData.filter(item => item.category === category)
        }
        setData(filteredData)
    }, [filters]);


    return (
        <Wrraper>
            <MiddleBox>
                <TopMenu onHandleInputValue={handleFilter} />
                <Cards data={data} />
            </MiddleBox>
            <RightBox>
                <Categories onhandleCatClick={handleFilter} />
                <Filters data={data} handleDataFilter={handleFilter} />
            </RightBox>
        </Wrraper>
    )
}

export default Middle
