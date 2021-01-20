import { Filter, FilterName, FilterWrapper } from './styleComponents'
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React, { useState, useEffect } from 'react'

const DivarSwitch = withStyles({
    switchBase: {
      color: "#eee",
      '&$checked': {
        color: "#eee",
      },
      '&$checked + $track': {
        backgroundColor: "#A62626",
        opacity: 1
      },
    },
    checked: {},
    track: {},
  })(Switch);

function Filters({data, handleDataFilter }) {
    const [check, setCheck] = useState({
        shop: false,
        withImage: false,
        immadiate: false,
      });

      useEffect(() => {

        handleDataFilter("switchs", check);
      }, [check])

    
      const handleChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });

      };

    return (<FilterWrapper>
        <Filter>
            <div>
                <DivarSwitch checked={check.shop} onChange={handleChange} name="shop" />
            </div>
            <FilterName>فقط آگهی های فروشگاه </FilterName>
        </Filter>
        <Filter>
            <div>
                <DivarSwitch checked={check.withImage} onChange={handleChange} name="withImage" />
            </div>
            <FilterName>فقط عکس دار  </FilterName>
        </Filter>
        <Filter>
            <div>
                <DivarSwitch checked={check.immadiate} onChange={handleChange} name="immadiate" />
            </div>
            <FilterName>فقط فوری ها  </FilterName>
        </Filter>

    </FilterWrapper>
    )
}

export default Filters
