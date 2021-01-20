import { CategoryWrapper, CatHead, Category } from './styleComponents'

function Categories({ onhandleCatClick }) {
    function handleCatClick(cat) {
        onhandleCatClick("category", cat)
    }
    return (
        <CategoryWrapper>
            <CatHead>دسته بندی ها </CatHead>
            <Category onClick={() => handleCatClick("املاک")}>املاک </Category>
            <Category onClick={() => handleCatClick("وسایل نقلیه")}>وسایل نقلیه  </Category>
            <Category onClick={() => handleCatClick("لوازم الکترونیکی")}>لوازم الکترونیکی </Category>
            <Category onClick={() => handleCatClick("مربوط به خانه")}>مربوط به خانه  </Category>
            <Category onClick={() => handleCatClick("خدمات")}>خدمات </Category>
            <Category onClick={() => handleCatClick("وسایل شخصی")}>وسایل شخصی </Category>
            <Category onClick={() => handleCatClick("سرگرمی و فراغت")}>سرگرمی و فراغت  </Category>
            <Category onClick={() => handleCatClick("اجتماعی")}> اجتماعی </Category>
            <Category onClick={() => handleCatClick("برای کسب و کار")}>برای کسب و کار  </Category>
            <Category onClick={() => handleCatClick("استخدم و کاریابی")}>استخدم و کاریابی </Category>

        </CategoryWrapper>
    )
}

export default Categories
