import styled from 'styled-components';
import { dataPieChartInterface } from '../interfaces/PieChart';

type PieChartProps = {
  title: string,
  data: dataPieChartInterface[],
}

export const PieChart = ({ title, data }: PieChartProps) => {
  return (
    <ContianerPieChart className="cardDashboard">

    </ContianerPieChart>
  )
}

const ContianerPieChart = styled.div`
    margin-top: 15px;
`;
