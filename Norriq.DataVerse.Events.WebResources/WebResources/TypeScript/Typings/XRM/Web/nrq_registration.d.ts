declare namespace XrmContext {
  interface nrq_Registration_Base extends WebEntity {
    createdon?: Date | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    nrq_paymentdate?: Date | null;
    nrq_price?: number | null;
    nrq_price_base?: number | null;
    nrq_registration?: string | null;
    nrq_registrationid?: string | null;
    nrq_waspresent?: boolean | null;
    overriddencreatedon?: Date | null;
    statecode?: nrq_registration_statecode | null;
    statuscode?: nrq_registration_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface nrq_Registration_Relationships {
    nrq_EventId?: nrq_Event_Result | null;
    nrq_UserId?: SystemUser_Result | null;
  }
  interface nrq_Registration extends nrq_Registration_Base, nrq_Registration_Relationships {
    nrq_EventId_bind$nrq_events?: string | null;
    nrq_UserId_bind$systemusers?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface nrq_Registration_Create extends nrq_Registration {
  }
  interface nrq_Registration_Update extends nrq_Registration {
  }
  interface nrq_Registration_Select {
    createdby_guid: WebAttribute<nrq_Registration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<nrq_Registration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<nrq_Registration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    exchangerate: WebAttribute<nrq_Registration_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<nrq_Registration_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<nrq_Registration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<nrq_Registration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<nrq_Registration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    nrq_eventid_guid: WebAttribute<nrq_Registration_Select, { nrq_eventid_guid: string | null }, { nrq_eventid_formatted?: string }>;
    nrq_paymentdate: WebAttribute<nrq_Registration_Select, { nrq_paymentdate: Date | null }, { nrq_paymentdate_formatted?: string }>;
    nrq_price: WebAttribute<nrq_Registration_Select, { nrq_price: number | null; transactioncurrencyid_guid: string | null }, { nrq_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_price_base: WebAttribute<nrq_Registration_Select, { nrq_price_base: number | null; transactioncurrencyid_guid: string | null }, { nrq_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_registration1;
    nrq_registrationid: WebAttribute<nrq_Registration_Select, { nrq_registrationid: string | null }, {  }>;
    nrq_userid_guid: WebAttribute<nrq_Registration_Select, { nrq_userid_guid: string | null }, { nrq_userid_formatted?: string }>;
    nrq_waspresent: WebAttribute<nrq_Registration_Select, { nrq_waspresent: boolean | null }, {  }>;
    overriddencreatedon: WebAttribute<nrq_Registration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<nrq_Registration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<nrq_Registration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<nrq_Registration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<nrq_Registration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<nrq_Registration_Select, { statecode: nrq_registration_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<nrq_Registration_Select, { statuscode: nrq_registration_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<nrq_Registration_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<nrq_Registration_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<nrq_Registration_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<nrq_Registration_Select, { versionnumber: number | null }, {  }>;
  }
  interface nrq_Registration_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    nrq_eventid_guid: XQW.Guid;
    nrq_paymentdate: Date;
    nrq_price: number;
    nrq_price_base: number;
    nrq_registration: string;
    nrq_registrationid: XQW.Guid;
    nrq_userid_guid: XQW.Guid;
    nrq_waspresent: boolean;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: nrq_registration_statecode;
    statuscode: nrq_registration_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface nrq_Registration_Expand {
    createdby: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    nrq_EventId: WebExpand<nrq_Registration_Expand, nrq_Event_Select, nrq_Event_Filter, { nrq_EventId: nrq_Event_Result }>;
    nrq_UserId: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { nrq_UserId: SystemUser_Result }>;
    ownerid: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { ownerid: SystemUser_Result }>;
    owninguser: WebExpand<nrq_Registration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  }
  interface nrq_Registration_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    nrq_eventid_formatted?: string;
    nrq_paymentdate_formatted?: string;
    nrq_price_base_formatted?: string;
    nrq_price_formatted?: string;
    nrq_userid_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface nrq_Registration_Result extends nrq_Registration_Base, nrq_Registration_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    nrq_eventid_guid: string | null;
    nrq_userid_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface nrq_Registration_RelatedOne {
    createdby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    nrq_EventId: WebMappingRetrieve<XrmContext.nrq_Event_Select,XrmContext.nrq_Event_Expand,XrmContext.nrq_Event_Filter,XrmContext.nrq_Event_Fixed,XrmContext.nrq_Event_Result,XrmContext.nrq_Event_FormattedResult>;
    nrq_UserId: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    ownerid: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    owninguser: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
  }
  interface nrq_Registration_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  nrq_registrations: WebMappingRetrieve<XrmContext.nrq_Registration_Select,XrmContext.nrq_Registration_Expand,XrmContext.nrq_Registration_Filter,XrmContext.nrq_Registration_Fixed,XrmContext.nrq_Registration_Result,XrmContext.nrq_Registration_FormattedResult>;
}
interface WebEntitiesRelated {
  nrq_registrations: WebMappingRelated<XrmContext.nrq_Registration_RelatedOne,XrmContext.nrq_Registration_RelatedMany>;
}
interface WebEntitiesCUDA {
  nrq_registrations: WebMappingCUDA<XrmContext.nrq_Registration_Create,XrmContext.nrq_Registration_Update,XrmContext.nrq_Registration_Select>;
}
