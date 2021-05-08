import React from 'react';
import NavBar from "components/navbar";
import Footer from 'components/footer';
import DataTable from 'components/dataTable';

//retorno só pode ter um elemento, para isso usar o fragment <> </>
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
      
        <DataTable />  
      </div>
     
      <Footer />
    </React.Fragment>
  );
}

export default App;
