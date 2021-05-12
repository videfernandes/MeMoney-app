import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Despesa } from "./despesa.model";

@Injectable({
  providedIn: "root",
})
export class DespesaService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByCategoria(id_cat: String): Observable<Despesa[]> {
    const url = `${this.baseUrl}/despesas?categoria=${id_cat}`;
    return this.http.get<Despesa[]>(url);
  }

  findById(id: String): Observable<Despesa> {
    const url = `${this.baseUrl}/despesas/${id}`;
    return this.http.get<Despesa>(url);
  }

  update(despesa: Despesa): Observable<Despesa> {
    const url = `${this.baseUrl}/despesas/${despesa.id}`;
    return this.http.put<Despesa>(url, despesa);
  }

  create(lespesa: Despesa, id_cat: String): Observable<Despesa> {
    const url = `${this.baseUrl}/despesas?categoria=${id_cat}`;
    return this.http.post<Despesa>(url, lespesa);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/despesas/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
