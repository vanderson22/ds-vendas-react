import Barchart from "components/barcharts";
import DataTable from "components/dataTable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";
import NavBar from "components/navbar";
import React from "react";



function Dashboard() {
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

export default Dashboard;
