import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Despesa } from "../despesa.model";
import { DespesaService } from "../despesa.service";

@Component({
  selector: "app-despesa-create",
  templateUrl: "./despesa-create.component.html",
  styleUrls: ["./despesa-create.component.css"],
})
export class DespesaCreateComponent implements OnInit {
  id_cat: String = "";

  despesa: Despesa = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  //nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: DespesaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }

  create(): void {
    this.service.create(this.despesa, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/despesas`]);
      this.service.mensagem("Despesa criada com sucesso!");
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/Despesa`]);
      this.service.mensagem("Erro ao criar nova Despesa! Tente mais tarde!");
    });
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/despesas`]);
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "O campo TITULO deve conter entre 3 e 100 carateres";
    }

    // if (this.nome_autor.invalid) {
    //   return "O campo NOME DO AUTOR deve conter entre 3 e 100 carateres";
    // }

    if (this.texto.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2.000.000 carateres";
    }

    return false;
  }
}
