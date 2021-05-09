import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Despesa } from "../despesa.model";
import { DespesaService } from "../despesa.service";

@Component({
  selector: 'app-despesa-update',
  templateUrl: './despesa-update.component.html',
  styleUrls: ['./despesa-update.component.css']
})
export class DespesaUpdateComponent implements OnInit {

  id_cat: String = "";

  despesa: Despesa = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: DespesaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.despesa.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/despesas`]);
  }

  findById(): void {
    this.service.findById(this.despesa.id!).subscribe((resposta) => {
      this.despesa = resposta
    })
  }

  update():void {
    this.service.update(this.despesa).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/despesas`]);
      this.service.mensagem('Despesa atualizada com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/despesas`]);
      this.service.mensagem('Falha ao atualizar despesa! Tente mais tarde..')
    })
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "O campo TITULO deve conter entre 3 e 100 carateres";
    }

    if (this.nome_autor.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100 carateres";
    }

    if (this.texto.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2.000.000 carateres";
    }

    return false;
  }
}