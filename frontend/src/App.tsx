import React from 'react';
import NavBar from "components/navbar";
import Footer from 'components/footer';
import DataTable from 'components/dataTable';
import Barchart from 'components/barcharts';
import DonutChart from 'components/donutchart';

//retorno só pode ter um elemento, para isso usar o fragment <> </>
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center">Taxa de Sucesso (%)</h5>
            <Barchart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center">Todas as vendas</h5>

            <DonutChart />
          </div>
        </div>
        <div className="py-3" >
          <h2 className="text-primary"> Todas vendas</h2>

        </div>
        <DataTable />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
