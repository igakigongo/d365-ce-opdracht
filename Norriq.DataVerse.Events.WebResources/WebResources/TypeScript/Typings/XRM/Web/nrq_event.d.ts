declare namespace XrmContext {
  interface nrq_Event_Base extends WebEntity {
    createdon?: Date | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    nrq_date?: Date | null;
    nrq_endtime?: string | null;
    nrq_endtimehour?: nrq_timehour | null;
    nrq_endtimeminutes?: nrq_timeminutes | null;
    nrq_event?: string | null;
    nrq_eventid?: string | null;
    nrq_income?: number | null;
    nrq_income_base?: number | null;
    nrq_location?: string | null;
    nrq_price?: number | null;
    nrq_price_base?: number | null;
    nrq_starttime?: string | null;
    nrq_starttimehour?: nrq_timehour | null;
    nrq_starttimeminutes?: nrq_timeminutes | null;
    nrq_totalcost?: number | null;
    nrq_totalcost_base?: number | null;
    overriddencreatedon?: Date | null;
    statecode?: nrq_event_statecode | null;
    statuscode?: nrq_event_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface nrq_Event_Relationships {
    nrq_EventTypeId?: nrq_EventType_Result | null;
    nrq_Organizer?: SystemUser_Result | null;
    nrq_nrq_registration_eventid_nrq_event?: nrq_Registration_Result[] | null;
    nrq_nrq_session_event_nrq_event?: nrq_Session_Result[] | null;
  }
  interface nrq_Event extends nrq_Event_Base, nrq_Event_Relationships {
    nrq_EventTypeId_bind$nrq_eventtypes?: string | null;
    nrq_Organizer_bind$systemusers?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface nrq_Event_Create extends nrq_Event {
  }
  interface nrq_Event_Update extends nrq_Event {
  }
  interface nrq_Event_Select {
    createdby_guid: WebAttribute<nrq_Event_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<nrq_Event_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<nrq_Event_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    exchangerate: WebAttribute<nrq_Event_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<nrq_Event_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<nrq_Event_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<nrq_Event_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<nrq_Event_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    nrq_date: WebAttribute<nrq_Event_Select, { nrq_date: Date | null }, { nrq_date_formatted?: string }>;
    nrq_endtime: WebAttribute<nrq_Event_Select, { nrq_endtime: string | null }, {  }>;
    nrq_endtimehour: WebAttribute<nrq_Event_Select, { nrq_endtimehour: nrq_timehour | null }, { nrq_endtimehour_formatted?: string }>;
    nrq_endtimeminutes: WebAttribute<nrq_Event_Select, { nrq_endtimeminutes: nrq_timeminutes | null }, { nrq_endtimeminutes_formatted?: string }>;
    nrq_event1;
    nrq_eventid: WebAttribute<nrq_Event_Select, { nrq_eventid: string | null }, {  }>;
    nrq_eventtypeid_guid: WebAttribute<nrq_Event_Select, { nrq_eventtypeid_guid: string | null }, { nrq_eventtypeid_formatted?: string }>;
    nrq_income: WebAttribute<nrq_Event_Select, { nrq_income: number | null; transactioncurrencyid_guid: string | null }, { nrq_income_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_income_base: WebAttribute<nrq_Event_Select, { nrq_income_base: number | null; transactioncurrencyid_guid: string | null }, { nrq_income_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_location: WebAttribute<nrq_Event_Select, { nrq_location: string | null }, {  }>;
    nrq_organizer_guid: WebAttribute<nrq_Event_Select, { nrq_organizer_guid: string | null }, { nrq_organizer_formatted?: string }>;
    nrq_price: WebAttribute<nrq_Event_Select, { nrq_price: number | null; transactioncurrencyid_guid: string | null }, { nrq_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_price_base: WebAttribute<nrq_Event_Select, { nrq_price_base: number | null; transactioncurrencyid_guid: string | null }, { nrq_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_starttime: WebAttribute<nrq_Event_Select, { nrq_starttime: string | null }, {  }>;
    nrq_starttimehour: WebAttribute<nrq_Event_Select, { nrq_starttimehour: nrq_timehour | null }, { nrq_starttimehour_formatted?: string }>;
    nrq_starttimeminutes: WebAttribute<nrq_Event_Select, { nrq_starttimeminutes: nrq_timeminutes | null }, { nrq_starttimeminutes_formatted?: string }>;
    nrq_totalcost: WebAttribute<nrq_Event_Select, { nrq_totalcost: number | null; transactioncurrencyid_guid: string | null }, { nrq_totalcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
    nrq_totalcost_base: WebAttribute<nrq_Event_Select, { nrq_totalcost_base: number | null; transactioncurrencyid_guid: string | null }, { nrq_totalcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    overriddencreatedon: WebAttribute<nrq_Event_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<nrq_Event_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<nrq_Event_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<nrq_Event_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<nrq_Event_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<nrq_Event_Select, { statecode: nrq_event_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<nrq_Event_Select, { statuscode: nrq_event_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<nrq_Event_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<nrq_Event_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<nrq_Event_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<nrq_Event_Select, { versionnumber: number | null }, {  }>;
  }
  interface nrq_Event_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    nrq_date: Date;
    nrq_endtime: string;
    nrq_endtimehour: nrq_timehour;
    nrq_endtimeminutes: nrq_timeminutes;
    nrq_event: string;
    nrq_eventid: XQW.Guid;
    nrq_eventtypeid_guid: XQW.Guid;
    nrq_income: number;
    nrq_income_base: number;
    nrq_location: string;
    nrq_organizer_guid: XQW.Guid;
    nrq_price: number;
    nrq_price_base: number;
    nrq_starttime: string;
    nrq_starttimehour: nrq_timehour;
    nrq_starttimeminutes: nrq_timeminutes;
    nrq_totalcost: number;
    nrq_totalcost_base: number;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: nrq_event_statecode;
    statuscode: nrq_event_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface nrq_Event_Expand {
    createdby: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    nrq_EventTypeId: WebExpand<nrq_Event_Expand, nrq_EventType_Select, nrq_EventType_Filter, { nrq_EventTypeId: nrq_EventType_Result }>;
    nrq_Organizer: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { nrq_Organizer: SystemUser_Result }>;
    nrq_nrq_registration_eventid_nrq_event: WebExpand<nrq_Event_Expand, nrq_Registration_Select, nrq_Registration_Filter, { nrq_nrq_registration_eventid_nrq_event: nrq_Registration_Result[] }>;
    nrq_nrq_session_event_nrq_event: WebExpand<nrq_Event_Expand, nrq_Session_Select, nrq_Session_Filter, { nrq_nrq_session_event_nrq_event: nrq_Session_Result[] }>;
    ownerid: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { ownerid: SystemUser_Result }>;
    owninguser: WebExpand<nrq_Event_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  }
  interface nrq_Event_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    nrq_date_formatted?: string;
    nrq_endtimehour_formatted?: string;
    nrq_endtimeminutes_formatted?: string;
    nrq_eventtypeid_formatted?: string;
    nrq_income_base_formatted?: string;
    nrq_income_formatted?: string;
    nrq_organizer_formatted?: string;
    nrq_price_base_formatted?: string;
    nrq_price_formatted?: string;
    nrq_starttimehour_formatted?: string;
    nrq_starttimeminutes_formatted?: string;
    nrq_totalcost_base_formatted?: string;
    nrq_totalcost_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface nrq_Event_Result extends nrq_Event_Base, nrq_Event_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    nrq_eventtypeid_guid: string | null;
    nrq_organizer_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface nrq_Event_RelatedOne {
    createdby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    nrq_EventTypeId: WebMappingRetrieve<XrmContext.nrq_EventType_Select,XrmContext.nrq_EventType_Expand,XrmContext.nrq_EventType_Filter,XrmContext.nrq_EventType_Fixed,XrmContext.nrq_EventType_Result,XrmContext.nrq_EventType_FormattedResult>;
    nrq_Organizer: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    ownerid: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    owninguser: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
  }
  interface nrq_Event_RelatedMany {
    nrq_nrq_registration_eventid_nrq_event: WebMappingRetrieve<XrmContext.nrq_Registration_Select,XrmContext.nrq_Registration_Expand,XrmContext.nrq_Registration_Filter,XrmContext.nrq_Registration_Fixed,XrmContext.nrq_Registration_Result,XrmContext.nrq_Registration_FormattedResult>;
    nrq_nrq_session_event_nrq_event: WebMappingRetrieve<XrmContext.nrq_Session_Select,XrmContext.nrq_Session_Expand,XrmContext.nrq_Session_Filter,XrmContext.nrq_Session_Fixed,XrmContext.nrq_Session_Result,XrmContext.nrq_Session_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  nrq_events: WebMappingRetrieve<XrmContext.nrq_Event_Select,XrmContext.nrq_Event_Expand,XrmContext.nrq_Event_Filter,XrmContext.nrq_Event_Fixed,XrmContext.nrq_Event_Result,XrmContext.nrq_Event_FormattedResult>;
}
interface WebEntitiesRelated {
  nrq_events: WebMappingRelated<XrmContext.nrq_Event_RelatedOne,XrmContext.nrq_Event_RelatedMany>;
}
interface WebEntitiesCUDA {
  nrq_events: WebMappingCUDA<XrmContext.nrq_Event_Create,XrmContext.nrq_Event_Update,XrmContext.nrq_Event_Select>;
}
