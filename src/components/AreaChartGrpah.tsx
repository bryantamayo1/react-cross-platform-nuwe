import styled from "styled-components";

type AreaChartGrpahProps = {
  title: string
}

export const AreaChartGrpah = ({ title }: AreaChartGrpahProps) => {
  return (
    <div className="cardDashboard" style={{ marginLeft: 20, padding: 32 }}>
      <div className="containerTitle">
        <div className="title">{title}</div>
        <div>Datepicker</div>
      </div>
    </div>
  )
}

