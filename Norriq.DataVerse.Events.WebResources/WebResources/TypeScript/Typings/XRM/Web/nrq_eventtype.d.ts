declare namespace XrmContext {
  interface nrq_EventType_Base extends WebEntity {
    createdon?: Date | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    nrq_cost?: number | null;
    nrq_cost_base?: number | null;
    nrq_eventtype?: string | null;
    nrq_eventtypeid?: string | null;
    overriddencreatedon?: Date | null;
    statecode?: nrq_eventtype_statecode | null;
    statuscode?: nrq_eventtype_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface nrq_EventType_Relationships {
    nrq_nrq_event_eventtypeid_nrq_eventtype?: nrq_Event_Result[] | null;
  }
  interface nrq_EventType extends nrq_EventType_Base, nrq_EventType_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface nrq_EventType_Create extends nrq_EventType {
  }
  interface nrq_EventType_Update extends nrq_EventType {
  }
  interface nrq_EventType_Select {
    createdby_guid: WebAttribute<nrq_EventType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<nrq_EventType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<nrq_EventType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    exchangerate: WebAttribute<nrq_EventType_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<nrq_EventType_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<nrq_EventType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<nrq_EventType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<nrq_EventType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    nrq_cost: WebAttribute<nrq_EventType_Select, { nrq_cost: number | null; transactioncurrencyid_guid: string | null }, { nrq_cost_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_cost_base: WebAttribute<nrq_EventType_Select, { nrq_cost_base: number | null; transactioncurrencyid_guid: string | null }, { nrq_cost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_eventtype1;
    nrq_eventtypeid: WebAttribute<nrq_EventType_Select, { nrq_eventtypeid: string | null }, {  }>;
    overriddencreatedon: WebAttribute<nrq_EventType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<nrq_EventType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<nrq_EventType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<nrq_EventType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<nrq_EventType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<nrq_EventType_Select, { statecode: nrq_eventtype_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<nrq_EventType_Select, { statuscode: nrq_eventtype_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<nrq_EventType_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<nrq_EventType_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<nrq_EventType_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<nrq_EventType_Select, { versionnumber: number | null }, {  }>;
  }
  interface nrq_EventType_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    nrq_cost: number;
    nrq_cost_base: number;
    nrq_eventtype: string;
    nrq_eventtypeid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: nrq_eventtype_statecode;
    statuscode: nrq_eventtype_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface nrq_EventType_Expand {
    createdby: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    nrq_nrq_event_eventtypeid_nrq_eventtype: WebExpand<nrq_EventType_Expand, nrq_Event_Select, nrq_Event_Filter, { nrq_nrq_event_eventtypeid_nrq_eventtype: nrq_Event_Result[] }>;
    ownerid: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { ownerid: SystemUser_Result }>;
    owninguser: WebExpand<nrq_EventType_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  }
  interface nrq_EventType_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    nrq_cost_base_formatted?: string;
    nrq_cost_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface nrq_EventType_Result extends nrq_EventType_Base, nrq_EventType_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface nrq_EventType_RelatedOne {
    createdby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    ownerid: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    owninguser: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
  }
  interface nrq_EventType_RelatedMany {
    nrq_nrq_event_eventtypeid_nrq_eventtype: WebMappingRetrieve<XrmContext.nrq_Event_Select,XrmContext.nrq_Event_Expand,XrmContext.nrq_Event_Filter,XrmContext.nrq_Event_Fixed,XrmContext.nrq_Event_Result,XrmContext.nrq_Event_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  nrq_eventtypes: WebMappingRetrieve<XrmContext.nrq_EventType_Select,XrmContext.nrq_EventType_Expand,XrmContext.nrq_EventType_Filter,XrmContext.nrq_EventType_Fixed,XrmContext.nrq_EventType_Result,XrmContext.nrq_EventType_FormattedResult>;
}
interface WebEntitiesRelated {
  nrq_eventtypes: WebMappingRelated<XrmContext.nrq_EventType_RelatedOne,XrmContext.nrq_EventType_RelatedMany>;
}
interface WebEntitiesCUDA {
  nrq_eventtypes: WebMappingCUDA<XrmContext.nrq_EventType_Create,XrmContext.nrq_EventType_Update,XrmContext.nrq_EventType_Select>;
}
