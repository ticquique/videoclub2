'use strict';

import { Reportaje } from "../../../models/reportaje";
import { Reportaje as IReportaje } from "../../../interfaces/reportaje";
import { All } from "../../methods";

export class ReportajeResolver extends All<IReportaje>{
    constructor() { 
        super(Reportaje);
        this.model = Reportaje 
    }
}
