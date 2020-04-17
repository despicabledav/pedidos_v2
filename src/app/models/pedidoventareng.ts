export class Pedidoventareng {
    $id: string;
    reng_num: number;
    doc_num: string;
    co_art: string;
    des_art: string;
    co_alma: string = "01";
    total_art: number;
    stotal_art: number = 0;
    co_uni: string;
    sco_uni: string;
    co_precio: string = "01";
    prec_vta: number;
    prec_vta_om: number;
    porc_desc: string;
    monto_desc: number = 0;
    tipo_imp: string;
    tipo_imp2: string;
    tipo_imp3: string;
    porc_imp: number;
    porc_imp2: number = 0;
    porc_imp3: number = 0;
    monto_imp: number;
    monto_imp2: number = 0;
    monto_imp3: number = 0;
    reng_neto: number;
    pendiente: number = 0;
    pendiente2: number = 0;
    lote_asignado: boolean = false;
    tipo_doc: string;
    num_doc: string;
    rowguid_doc: string;
    monto_desc_glob: number = 0;
    monto_reca_glob: number = 0;
    otros1_glob: number = 0;
    otros2_glob: number = 0;
    otros3_glob: number= 0;
    monto_imp_afec_glob: number = 0;
    monto_imp2_afec_glob: number = 0;
    monto_imp3_afec_glob: number = 0;
    total_dev: number = 0;
    monto_dev: number = 0;
    otros: number = 0;
    comentario: string;
    dis_cen: null;
    co_us_in: string = "MOVAPP";
    co_sucu_in: string;
    fe_us_in: string;
    co_us_mo: string = "MOVAPP";
    co_sucu_mo: string;
    fe_us_mo: string;
    revisado: string;
    trasnfe: string;
    rowguid: string;
}
