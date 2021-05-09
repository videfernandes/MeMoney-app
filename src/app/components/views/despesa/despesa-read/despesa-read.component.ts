import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Despesa } from "../despesa.model";
import { DespesaService } from "../despesa.service";

@Component({
  selector: 'app-despesa-read',
  templateUrl: './despesa-read.component.html',
  styleUrls: ['./despesa-read.component.css']
})
export class DespesaReadComponent implements OnInit {

  id_cat: String = "";

  despesa: Despesa = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

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

}
