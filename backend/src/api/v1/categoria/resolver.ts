'use strict';

import { Categoria } from "../../../models/categoria";
import { Categoria as ICategoria } from "../../../interfaces/categoria";
import { All } from "../../methods";

export class CategoriaResolver extends All<ICategoria>{
    constructor() { 
        super(Categoria);
        this.model = Categoria 
    }
}
