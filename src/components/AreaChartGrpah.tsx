import { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

type AreaChartGrpahProps = {
  title: string
}

export const AreaChartGrpah = ({ title }: AreaChartGrpahProps) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="cardDashboard" style={{ marginLeft: 20, padding: 32 }}>
      <div className="containerTitle">
        <div className="title">{title}</div>
        <DatePicker 
          selected={startDate}
          onChange={(date:Date) => setStartDate(date)}
        />
      </div>
    </div>
  )
}

