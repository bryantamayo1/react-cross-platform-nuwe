import styled from 'styled-components'

type MiniTitleProps = {
    color?: string,
    children: string,
    marginStyle?: string
}
type StyleTtileProps = {
    marginStyle: string
}
export const MiniTitle = ({ color=  "#999999", children, marginStyle= "15px 0px 0px 0px" }: MiniTitleProps) => (
    <StyleTtile color={color} marginStyle={marginStyle}>
        {children}
    </StyleTtile>
);
const StyleTtile = styled.div<StyleTtileProps>`
    color: ${props => props.color};
    font-size: 12px;
    font-weight: 400;
    margin: ${props => props.marginStyle};
`;
export const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #333333;
`;