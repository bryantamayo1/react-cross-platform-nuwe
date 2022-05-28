import styled from 'styled-components';
import { dataPieChartInterface } from '../interfaces/PieChart';

type ItemFooterPieChart = {
  info: dataPieChartInterface
}

export const ItemFooterPieChart = ({ info }: ItemFooterPieChart) => (
    <div style={{ marginLeft: 10 }}>
        <Point color={info.color}/>
        <TitleItemPieChart>{info.name}</TitleItemPieChart>
    </div>
)

const TitleItemPieChart = styled.span`
    color: #9C9C9C;
    font-weight: 400;
    font-size: 12px;
    margin-left: 10px;
`;
const Point = styled.span`
    display: inline-block;
    border-radius: 50%;
    background-color: ${props => props.color};
    height: 8px;
    width: 8px;
`;
