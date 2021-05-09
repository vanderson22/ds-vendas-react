import React from 'react';
import NavBar from "components/navbar";
import Footer from 'components/footer';
import DataTable from 'components/dataTable';
import Barchart from 'components/barcharts';
import DonutChart from 'components/donutchart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';

//retorno só pode ter um elemento, para isso usar o fragment <> </>


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default Routes;
