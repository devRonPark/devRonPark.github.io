import styled from "styled-components";

const Header = () => {
    return (
        <Wrap>
            <ContentWrap>
                <LogoWrap>
                    <a href="/">BE.Byung Chan</a>
                </LogoWrap>
                <MenuList>
                    <MenuItem>
                        <a href="#">Blog Posts</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">TIL</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">CV</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">Contact</a>
                    </MenuItem>
                </MenuList>
            </ContentWrap>
        </Wrap>
    )
}

const Wrap = styled.header`
    width: 100%;
    border-bottom: 1px solid #f2f3f3;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 36px;
    justify-content: flex-start;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 18px 0;
`;

const LogoWrap = styled.div`
    font-weight: bold;
    position: relative;

    & > a {
        display: block;
        padding: 9px 0;
        cursor: pointer;

        &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            background: #bdc1c4;
            width: 100%;
            transition: all 0.2s ease-in-out;
            transform: scaleX(0);
        }

        &:hover {
            color: #5c6266;

            &:before {
                transform: scaleX(1);
            }
        }
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    column-gap: 18px;
`

const MenuItem = styled.li`
    white-space: nowrap;
    position: relative;

    & > a {
        display: block;
        padding: 9px 0;
        cursor: pointer;

        &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            background: #bdc1c4;
            width: 100%;
            transition: all 0.2s ease-in-out;
            transform: scaleX(0);
        }

        &:hover {
            color: #5c6266;

            &:before {
                transform: scaleX(1);
            }
        }
    }
`

export default Header;