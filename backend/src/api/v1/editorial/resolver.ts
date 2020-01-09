'use strict';

import { Editorial } from "../../../models/editorial";
import { Editorial as IEditorial } from "../../../interfaces/editorial";
import { All } from "../../methods";

export class EditorialResolver extends All<IEditorial>{
    constructor() { 
        super(Editorial);
        this.model = Editorial 
    }
}
