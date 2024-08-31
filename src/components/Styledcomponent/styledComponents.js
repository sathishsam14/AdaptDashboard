import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;
  color: ${(props) => (props.isDashboard ? "#f93dee" : "#99a3a4")}; 
  background-color:${(props)=>props.isDashboard?"#d7bde2":"#ffffff"};
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  margin: 15px 5px;
  text-align: left;
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const DashContainer = styled.div`
  background-color: #d5d8dc;
  height: 90vh;
`;

export const LineContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 10px;
  width: 100%;
  flex-grow: 1;
`;

export const PieContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 10px;
  width: 50%;
  flex-grow: 1;
`;


export const HeadContainer = styled.div`
  background-color: #abb2b9;
  height: 10vh;
  width: 100%;
  padding:10px;
`;

export const HeadElement = styled.h1`
  color: #f93dee;
  font-family: "Roboto";
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-weight: 500;
  font-size: 20px;
  width: 90px;
 padding:5px;
`;

export const HeaderChart = styled.h1`
  color: #00000;
  font-weight: 600;
  font-size: 17px;
  font-family: "Roboto";
  margin-bottom:40px;
  margin-left:20px;
`;

export const ListContainer = styled.ul`
  padding-left: 5px;
  padding-right: 20px;
  padding-top: 5px;
`;
