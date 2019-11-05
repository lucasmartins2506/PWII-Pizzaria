import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'has-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  formcomanda: FormGroup;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formcomanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizza : this.formBuilder.control(''),
      recheio : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      taxaServico : this.formBuilder.control(true)
      })
  }
  onCalcular() {
    let vlChopp:number = this.formcomanda.value.chopp * 7.30;
    let vlPizza:number = this.formcomanda.value.pizza * 31.50;
    let vlRecheio:number = this.formcomanda.value.recheio * 5.90;
    let vlPessoas:number = this.formcomanda.value.pessoas;
    let vlConsumo:number = (vlChopp + vlPizza + vlRecheio);
    let TaxaServico:boolean = this.formcomanda.value.taxaServico;
    let vlTaxaServico:number = (vlChopp + vlPizza + vlRecheio)* 0.1;
    let vlTotalTaxas:number = (vlChopp + vlPizza + vlRecheio + vlTaxaServico) / vlPessoas;
    let vlTotal:number = (vlChopp + vlPizza + vlRecheio + vlTaxaServico);

    if(TaxaServico == true){
      alert("Consumo :" + vlConsumo + 
        "\n Serviços :" + vlTaxaServico +
        "\n Total"      + vlTotal + 
        "\n Por pessoa:"+ vlTotalTaxas); 
    }
    else
    {
      alert("Consumo :" + vlConsumo + 
        "\n Serviços :" + 0 +
        "\n Total"      + vlConsumo + 
        "\n Por pessoa:"+ vlTotalTaxas); 
    }
    
    }

}
