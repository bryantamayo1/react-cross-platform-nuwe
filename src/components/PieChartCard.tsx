import styled from 'styled-components';
import { dataPieChartInterface } from '../interfaces/PieChart';
import { BsThreeDots } from "react-icons/bs";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ItemFooterPieChart } from './ItemFooterPieChart';

type PieChartProps = {
  title: string,
  data: dataPieChartInterface[],
}
type ItemFooterPieChart = {

}

export const PieChartCard = ({ title, data }: PieChartProps) => {

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ContianerPieChart className="cardDashboard">
        <div className="containerTitle">
          <div className="title">{title}</div>
          <ContainerMenu className="cardDashboard">
            <BsThreeDots size="20"/>
          </ContainerMenu>
        </div>

        <ContianerGraph>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ContianerGraph>

      <FooterPieChart>
          {data.map( (item, index) => (
            <ItemFooterPieChart key={`${item}-${index}`} info={item}/>
          ))}
      </FooterPieChart>
    </ContianerPieChart>
  )
}

const ContianerPieChart = styled.div`
    height: calc(100vh - 88px - 56px - 145px - 20px - 15px - 80px);
    /* height: 472px; */
    margin-top: 15px;
    padding: 32px;
`;
const ContainerMenu = styled.span`
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    padding: 5px;
`;
const FooterPieChart = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const ContianerGraph = styled.div`
    height: 300px;
`;