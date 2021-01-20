import React, {useState} from 'react'
import { TopWrapper, Inp, Selecte, Icon, SelectLabel, Sugessted, SugesstedWrraper,Label } from './styleComponents'
import * as gr from "react-icons/gr";

function TopMenu({onHandleInputValue}) {
    const [value, setValue] = useState("");
    function handleInputValue(e){
        setValue(e.target.value)
        onHandleInputValue("inputValue", e.target.value)
    }
    return (<>
        <TopWrapper>

            <Inp placeholder='جستجو در همه ی آگهی ها' value={value} onChange={handleInputValue} />
            <Selecte>

                <Icon><gr.GrDown /></Icon>
                <SelectLabel>همه ی آگهی ها </SelectLabel>

            </Selecte>

        </TopWrapper>
        <SugesstedWrraper>
            <Sugessted>خودرو سواری </Sugessted>
            <Sugessted>فروش آپارتمان </Sugessted>
            <Sugessted>اجاره آپارتمان  </Sugessted>
            <Sugessted>موبایل  </Sugessted>
            <Sugessted>مبلمان </Sugessted>
            <Sugessted>حیوانات </Sugessted>
            <Sugessted>وسایل شخصی  </Sugessted>
            <Sugessted>خدمات </Sugessted>
            <Sugessted>استخدام  </Sugessted>
            <Sugessted>تلویزیون </Sugessted>
        </SugesstedWrraper>
        <Label>دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران</Label>
    </>

    )
}

export default TopMenu
