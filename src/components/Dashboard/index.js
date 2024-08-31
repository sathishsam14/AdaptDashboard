import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

import { MainContainer, DashContainer, LineContainer, PieContainer, HeaderChart } from '../Styledcomponent/styledComponents';

const COLORS = ['#FF8042', '#00C49F'];

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
};

const Dashboard = () => {
  const [apiStatus, setApiStatus] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getSalesData = async () => {
      console.log("Fetching data...");

      setApiStatus({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });

      const url = "https://bbd12392-7226-41c6-b56d-23a939be6690.mock.pstmn.io/dashboard-data";
      const option = {
        method: "GET"
      };

      try {
        const response = await fetch(url, option);
        const data = await response.json();

        if (response.ok) {
          setApiStatus({
            status: apiStatusConstants.success,
            data: data,
            errorMsg: null,
          });
        } else {
          setApiStatus({
            status: apiStatusConstants.failure,
            data: null,
            errorMsg: data.errorMsg || "Something went wrong",
          });
        }
      } catch (error) {
        setApiStatus({
          status: apiStatusConstants.failure,
          data: null,
          errorMsg: error.message || "Network error",
        });
      }

      console.log("Data fetch complete");
    };
    getSalesData();
  }, []);

  const renderSuccess = () => {
    const { lineChart, pieChart } = apiStatus.data;
    const lineChartData = lineChart.data;
    const pieData = pieChart.portions;

    const formatLeftYAxis = (value) => {
      return `${(value / 1000).toFixed(1)}k`;
    }

    return (
      <DashContainer>
        <MainContainer>
          <LineContainer>
            <HeaderChart>Sales vs Orders</HeaderChart>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line type="monotone" dataKey="orders" stroke="#FF8042" />
                <Line type="monotone" dataKey="sales" stroke="#00C49F" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="dateRange"
                  tickFormatter={(tick) => tick}
                  type="category"
                 
                />
                <YAxis tickFormatter={formatLeftYAxis} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </LineContainer>

          <PieContainer>
            <HeaderChart>Portion of Sales</HeaderChart>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}  
                  dataKey="sales"
                  nameKey="storeType"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom" 
                  align="center"         
                  layout="horizontal"    
                />
              </PieChart>
            </ResponsiveContainer>
          </PieContainer>
        </MainContainer>
      </DashContainer>
    );
  };

  const renderProgress = () => (
    <div>
      <p>Loading...</p>
    </div>
  );

  const renderFailure = () => (
    <div>
      <p>{apiStatus.errorMsg}</p>
    </div>
  );

  const renderContent = () => {
    switch (apiStatus.status) {
      case apiStatusConstants.inProgress:
        return renderProgress();
      case apiStatusConstants.success:
        return renderSuccess();
      case apiStatusConstants.failure:
        return renderFailure();
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        {renderContent()}
      </div>
    </MainContainer>
  );
}

export default Dashboard;
