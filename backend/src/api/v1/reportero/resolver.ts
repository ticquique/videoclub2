'use strict';

import { All } from "../../methods";
import { Reportero as IReportero } from "../../../interfaces/reportero"
import { Reportero } from "../../../models/reportero";

export class ReporteroResolver extends All<IReportero>{
    constructor() {
        super(Reportero);
    }
}
