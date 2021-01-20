import { Item, Submit, MenuItem } from './styleComponents'
import { Link } from "react-router-dom";
export function MenuItems() {
    return (<>
        <MenuItem>
            <Submit>ثبت رایگان آگهی</Submit>
            <Item>
                <Link to="/mydivar">دیوار من</Link>
            </Item>
            <Item>
                <Link to="/chat"> چت</Link>
            </Item>
            <Item>
                <Link to="/aboutUs"> درباره ما</Link>
            </Item>
            <Item>
                <Link to="/blog"> بلاگ</Link>
            </Item>
            <Item>
                <Link to="/support"> پشتیبانی و قوانین </Link>
            </Item>
            <Item>
                <Link to="/contactUs"> تماس با ما</Link>
            </Item>
        </MenuItem>
    </>
    )
}
