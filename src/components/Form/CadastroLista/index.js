import React from 'react';
import Header from '../../Header';
import Dia from '../../Dia';
import Mes from '../../Mes';
import Ano from '../../Ano';
import Button from '../../Button';
import Textarea from '../../Textarea';
import Lista from '../../Lista'

class FormCadastroLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dia: '',
            mes: '',
            ano: '',
            texto: ''
        }
    }

    handlerInputChangeDia = (e) => {
        // console.log('DIA ATUALIZADO');
        this.setState({
            dia: e.target.value
        });
    }

    handlerInputChangeMes = (e) => {
        // console.log('MES ATUALIZADO');
        this.setState({
            mes: e.target.value
        });
    }

    handlerInputChangeAno = (e) => {
        // console.log('ANO ATUALIZADO');
        this.setState({
            ano: e.target.value
        });
    }

    handlerInputChangeTexto = (e) => {
        // console.log('TEXTO ATUALIZADO');
        this.setState({
            texto: e.target.value
        });
    }

    resetState() {
        let select = document.getElementsByTagName('select');
        let textarea = document.getElementsByTagName('textarea')[0];
        for(let i=0; i<select.length; i++){
            select[i].value = select[i].options[0].value;
        }
        textarea.value = '';
    }

    handleSubmit = (e) => {
        console.log('FORM SUBMETIDO');

        e.preventDefault();

        let data = {
            dia: this.state.dia,
            mes: this.state.mes,
            ano: this.state.ano,
            texto: this.state.texto,
            formatado: this.state.dia + '/' + this.state.mes + '/' + this.state.ano + ': ' + this.state.texto
        }

        let storage = window.localStorage;

        let listaDatas = JSON.parse(localStorage.getItem('data')) || [];

        listaDatas.push(data);

        storage.setItem('data', JSON.stringify(listaDatas));

        let lista = document.getElementsByTagName('ul')[0];
        let elemento = document.createElement('li');
        lista.appendChild(elemento).innerText = data.formatado;

        this.resetState();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Header title="Cadastro Lista" />
                    <Dia onChange={this.handlerInputChangeDia}/>
                    <Mes onChange={this.handlerInputChangeMes}/>
                    <Ano onChange={this.handlerInputChangeAno}/><br/><br/>
                    <Textarea placeholder={'Digite algo a fazer'} onChange={this.handlerInputChangeTexto}/><br/><br/>
                    <Button text="Gravar"/>
                    <Lista />
                </form>
            </div>
        );
    }

}

export default FormCadastroLista;