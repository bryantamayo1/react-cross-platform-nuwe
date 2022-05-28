import { useState } from "react";
import DatePicker from "react-datepicker";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import { dataGraphAreaChartInterface } from "../interfaces/PieChart";
import { MiniTitle, Title } from "./MyComponents";
import {IoArrowUpOutline} from 'react-icons/io5';

type AreaChartGrpahProps = {
  title: string,
  data: dataGraphAreaChartInterface[]
}

export const AreaChartGrpah = ({ title, data }: AreaChartGrpahProps) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="cardDashboard" style={{ marginLeft: 20, padding: 32 }}>
      <div className="containerTitle">
        <Title>{title}</Title>
        <div>
          <DatePicker 
            dateFormat="dd/MM/yyyy" 
            selected={startDate}
            onChange={(date:Date) => setStartDate(date)}
          />
        </div>
      </div>

      <ContianerGraph>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </ContianerGraph>

      <MiniTitle marginStyle="30px 0px 0px 0px">Total Revenue</MiniTitle>
      <Title>$76685.41</Title>
      <ContainerPercent>
        <IoArrowUpOutline size="10" color="#4AAF05"/>
        <MiniTitle marginStyle="0px" color="#4AAF05">7,00%</MiniTitle>
      </ContainerPercent>
    </div>
  )
}

const ContianerGraph = styled.div`
    margin-top: 25px;
    height: 400px;
`;
const ContainerPercent = styled.div`
    align-items: center;
    display: flex;
    justify-content: start;
`;
