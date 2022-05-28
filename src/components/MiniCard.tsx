import styled from 'styled-components'
import { MiniTitle } from './MyComponents'

type MiniCardProps = {
    title: string,
    value: string,
    date: string
}

export const MiniCard = ({ title, value, date }: MiniCardProps) => {
  return (
    <ContainerMiniCard className="cardDashboard">
        <CardTitle>{title}</CardTitle>
        <CardContainer>{value}</CardContainer>
        <MiniTitle>{date}</MiniTitle>
    </ContainerMiniCard>
  )
}

const ContainerMiniCard = styled.div`
    height: 145px;
    text-align: center;
    width: 178px;
`;
const CardTitle = styled.div`
    font-size: 15px;
    font-weight: 700;
    margin-top: 14px;
`;
const CardContainer = styled.div`
    color: #6979F8;
    font-size: 48px;
    margin-top: 20px;
`;