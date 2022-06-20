import React from "react";
import './Periodico.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Table,
//   Button,
//   Container,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   ModalFooter,
// } from "reactstrap";

const data = [
  { id: 1, periodico: "Marca", link: <a href="https://www.marca.com/">Marca</a> },
  { id: 2, periodico: "As", link: <a href="https://as.com/">As</a> },
  { id: 3, periodico: "Mundo deportivo", link: <a href="https://www.mundodeportivo.com/">Mundo deportivo</a> },
  { id: 4, periodico: "Sports", link: <a href="https://www.sport.es/es/">Sports</a> },
  { id: 5, periodico: "Digital Bernabeu", link: <a href="https://www.bernabeudigital.com/">Digital Bernabeu</a> },
];

class Periodico extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      periodico: "",
      link: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <div className="periodic">
        <container className="tabla">
        <br />
          <button className="button-periodico" onClick={()=>this.mostrarModalInsertar()}>Crear</button>
          <br />
          <br />
          <table className="table-crear">
            <thead>
              <tr>
                <th>ID</th>
                <th>Periodico</th>
                <th>Link</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.periodico}</td>
                  <td>{dato.link}</td>
                  <td>
                    <button
                      className="button-periodico"
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </button>{" "}
                    <button className="button-periodico" color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </container>

        <modal isOpen={this.state.modalActualizar}>
          <modalHeader className="tabla">
           <div><h3>Editar Registro</h3></div>
          </modalHeader>

          <modalBody className="tabla">
            <formGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </formGroup>
            
            <formGroup>
              <label>
                Periodico: 
              </label>
              <input
                className="form-control"
                name="periodico"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.periodico}
              />
            </formGroup>
            
            <formGroup>
              <label>
                Link: 
              </label>
              <input
                className="form-control"
                name="link"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.link}
              />
            </formGroup>
          </modalBody>

          <modalFooter className="tabla">
            <button
              className="button-periodico"
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </button>
            <button
              className="button-periodico"
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </button>
          </modalFooter>
        </modal>



        <modal isOpen={this.state.modalInsertar}>
          <modalHeader className="tabla">
           <div><h3>Insertar Periodico</h3></div>
          </modalHeader>

          <modalBody className="tabla">
            <formGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </formGroup>
            
            <formGroup>
              <label>
                Periodico: 
              </label>
              <input
                className="form-control"
                name="periodico"
                type="text"
                onChange={this.handleChange}
              />
            </formGroup>
            
            <formGroup>
              <label>
                Link: 
              </label>
              <input
                className="form-control"
                name="link"
                type="text"
                onChange={this.handleChange}
              />
            </formGroup>
          </modalBody>

          <modalFooter className="tabla">
            <button
              className="button-periodico"
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </button>
            <button
              className="button-periodico"
              // className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </button>
          </modalFooter>
        </modal>
        </div>
      </>
    );
  }
}
export default Periodico;