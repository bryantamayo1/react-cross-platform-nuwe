import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import {AiOutlineSetting} from 'react-icons/ai';
import { MiniCard } from '../components/MiniCard';
import { PieChartCard } from '../components/PieChartCard';
import { useEffect, useState } from 'react';
import { dataGraphAreaChartInterface, dataPieChartInterface } from '../interfaces/PieChart';
import { dataGraphPieChart } from '../utils/Constants';
import { AreaChartGrpah } from '../components/AreaChartGrpah';

export const Dashboard = () => {

  const [dataPieChart, setdataPieChart] = useState([] as dataPieChartInterface[]);
  const [dataGraphAreaChart, setDataGraphAreaChart] = useState([] as dataGraphAreaChartInterface[]);
  const mintMoney = 1000;
  const maxMoney = 50000;

  useEffect(() => {
    // Load data, also this can be download of api e.g.
    setdataPieChart(dataGraphPieChart);

    Math.floor(Math.random() * (maxMoney - mintMoney)) + mintMoney;
    let aux:dataGraphAreaChartInterface[] = [];
    for(let i = 0; i < 100; i++) {
        aux.push({
            name: `v-${i}`,
            value:  (Math.floor(Math.random() * (maxMoney - mintMoney)) + mintMoney) /1000
        })
    }
    setDataGraphAreaChart(aux);
  }, []);
    
  return (
    <ContainerApp>
        <NavBar>
            <span style={{ marginLeft: 31 }}>
                <img src={logo} alt-="logo" height="24px"/>
                <span className="ttileApp">BANKS</span>
            </span>
            <AiOutlineSetting size="20" style={{ marginRight: 25, cursor: "pointer" }}/>
        </NavBar>
        <TitlePage>
            Dashboard
        </TitlePage>

        <Main>
            <div style={{ width: "100%" }}>
                <ContainerMiniCards>
                    <MiniCard title="Transactions" value="35" date="LAST MONTH"/>
                    <MiniCard title="Transactions" value="3" date="TODAY"/>
                </ContainerMiniCards>

                <PieChartCard title="Conversión" data={dataPieChart}/>
            </div>

            <AreaChartGrpah title="Weekly expenses" data={dataGraphAreaChart}/>
        </Main>
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
    min-height: 100vh;
`;
const NavBar = styled.div`
    align-items: center;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    height: 88px;
`;
const TitlePage = styled.div`
    background-color: #F5F5F5;
    height: 56px;
    line-height: 56px;
    padding-left: 16px;
`;

const Main = styled.div`
    box-sizing: border-box;
    display: grid;
    min-height: calc(100vh - 88px - 56px);
    grid-template-columns: 25% 75%;
    padding: 20px 14px;

    @media(max-width: 900px){
        grid-template-columns: 100%;
        grid-row-gap: 20px;
    }
`;
const ContainerMiniCards = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1300px){
        align-items: center;
        flex-direction: column;
        row-gap: 15px;
    }
`;