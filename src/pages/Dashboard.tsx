import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import {AiOutlineSetting} from 'react-icons/ai';
import { MiniCard } from '../components/MiniCard';
import { PieChart } from '../components/PieChart';
import { useEffect, useState } from 'react';
import { dataPieChartInterface } from '../interfaces/PieChart';

export const Dashboard = () => {

  const [dataPieChart, setdataPieChart] = useState([] as dataPieChartInterface[]);

  useEffect(() => {
    // Load data, also this download api e.g.
    setdataPieChart(dataPieChart);
  }, []);
    
  return (
    <ContainerApp>
        <NavBar>
            <span style={{ marginLeft: 31 }}>
                <img src={logo} alt-="logo" height="24px"/>
                <span className="ttileApp">BANKS</span>
            </span>
            <AiOutlineSetting size="20" style={{ marginRight: 25 }}/>
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

                <PieChart title="Conversión" data={dataPieChart}/>
            </div>

            <div>

            </div>
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
    border: 1px solid red;
    box-sizing: border-box;
    display: grid;
    height: calc(100vh - 88px - 56px);
    grid-template-columns: 35% 65%;
    padding: 20px 14px;
`;
const ContainerMiniCards = styled.div`
    display: flex;
    justify-content: space-between;
`;