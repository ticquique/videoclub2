'use strict';

import { Solicitud } from "../../../models/solicitud";
import { Solicitud as ISolicitud } from "../../../interfaces/solicitud";
import { All } from "../../methods";

export class SolicitudResolver extends All<ISolicitud>{
    constructor() { 
        super(Solicitud);
        this.model = Solicitud 
    }
}
