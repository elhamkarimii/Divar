import { Filter, FilterName, FilterWrapper } from './styleComponents'

function Filters() {
    
    return (<FilterWrapper>
        <Filter>
          <div>switch</div>
            <FilterName>فقط آگهی های فروشگاه </FilterName>
        </Filter>
        <Filter>
           <div>switch</div>
            <FilterName>فقط عکس دار  </FilterName>
        </Filter>
        <Filter>
           <div>switch</div>
            <FilterName>فقط فوری ها  </FilterName>
        </Filter>

    </FilterWrapper>
    )
}

export default Filters
