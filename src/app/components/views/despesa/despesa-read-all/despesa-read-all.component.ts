import { Despesa } from './../despesa.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DespesaService } from "../despesa.service";

@Component({
  selector: "app-despesa-read-all",
  templateUrl: "./despesa-read-all.component.html",
  styleUrls: ["./despesa-read-all.component.css"],
})
export class DespesaReadAllComponent implements OnInit {
  displayedColumns: string[] = ["id", "titulo", "despesas", "acoes"];

  id_cat: String = "";
  despesas: Despesa[] = [];

  constructor(
    private service: DespesaService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.despesas = resposta;
      console.log(this.despesas);
    });
  }

  navegarParaCriarDespesa(): void {
    this.router.navigate([`categorias/${this.id_cat}/despesas/create`])
  }
}
