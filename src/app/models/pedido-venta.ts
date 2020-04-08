export class PedidoVenta {
    $id: number;
    doc_num: string;
    descrip: string;
    co_cli: string;
    co_tran: string = "01";
    co_mone: string = "BS";
    co_ven: number;
    co_cond: string = "01";
    fec_emis: string;
    fec_venc: string;
    fec_reg: string;
    anulado: boolean = false;
    status: number = 0;
    n_control: string;
    ven_ter: boolean = false;
    tasa: number = 1;
    porc_desc_glob: string;
    monto_desc_glob: number = 0;
    porc_reca: number;
    monto_reca: number = 0;
    total_bruto: number = 0;
    monto_imp: number = 0;
    monto_imp2: number = 0;
    monto_imp3: number = 0;
    otros1: number = 0;
    otros2: number = 0;
    otros3: number = 0;
    total_neto: number = 0;
    saldo: number = 0;
    dir_ent: string;
    comentario: string;
    dis_cen: null;
    feccom: string;
    numcom: number;
    contrib: boolean = true;
    impresa: boolean = false;
    seriales_s: number;
    salestax: string;
    impfis: string;
    impfisfac: string;
    campo1: string;
    campo2: string;
    campo3: string;
    campo4: string;
    campo5: string;
    campo6: string;
    campo7: string;
    campo8: string;
    co_us_in: string = "MOVAPP";
    co_sucu_in: string;
    fe_us_in: string;
    co_us_mo: string = "MOVAPP";
    co_sucu_mo: string;
    fe_us_mo: string;
    revisado: string;
    trasnfe: string;
    validador: string;
    rowguid: string;
    co_cta_ingr_egr: string;
    saCliente: object;
    saPedidoVentaReng: object;
}
