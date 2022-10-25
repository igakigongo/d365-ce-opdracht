declare namespace XrmContext {
  interface nrq_Session_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    nrq_description?: string | null;
    nrq_enabledforfeedback?: boolean | null;
    nrq_endtime?: string | null;
    nrq_endtimehour?: nrq_timehour | null;
    nrq_endtimeminutes?: nrq_timeminutes | null;
    nrq_location?: string | null;
    nrq_room?: string | null;
    nrq_session?: string | null;
    nrq_sessionid?: string | null;
    nrq_starttime?: string | null;
    nrq_starttimehour?: nrq_timehour | null;
    nrq_starttimeminutes?: nrq_timeminutes | null;
    overriddencreatedon?: Date | null;
    statecode?: nrq_session_statecode | null;
    statuscode?: nrq_session_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface nrq_Session_Relationships {
    nrq_EventId?: nrq_Event_Result | null;
    nrq_SpeakerId?: SystemUser_Result | null;
    nrq_nrq_sessionfeedback_session_nrq_session?: nrq_SessionFeedback_Result[] | null;
  }
  interface nrq_Session extends nrq_Session_Base, nrq_Session_Relationships {
    nrq_EventId_bind$nrq_events?: string | null;
    nrq_SpeakerId_bind$systemusers?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface nrq_Session_Create extends nrq_Session {
  }
  interface nrq_Session_Update extends nrq_Session {
  }
  interface nrq_Session_Select {
    createdby_guid: WebAttribute<nrq_Session_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<nrq_Session_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<nrq_Session_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<nrq_Session_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<nrq_Session_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<nrq_Session_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<nrq_Session_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    nrq_description: WebAttribute<nrq_Session_Select, { nrq_description: string | null }, {  }>;
    nrq_enabledforfeedback: WebAttribute<nrq_Session_Select, { nrq_enabledforfeedback: boolean | null }, {  }>;
    nrq_endtime: WebAttribute<nrq_Session_Select, { nrq_endtime: string | null }, {  }>;
    nrq_endtimehour: WebAttribute<nrq_Session_Select, { nrq_endtimehour: nrq_timehour | null }, { nrq_endtimehour_formatted?: string }>;
    nrq_endtimeminutes: WebAttribute<nrq_Session_Select, { nrq_endtimeminutes: nrq_timeminutes | null }, { nrq_endtimeminutes_formatted?: string }>;
    nrq_eventid_guid: WebAttribute<nrq_Session_Select, { nrq_eventid_guid: string | null }, { nrq_eventid_formatted?: string }>;
    nrq_location: WebAttribute<nrq_Session_Select, { nrq_location: string | null }, {  }>;
    nrq_room: WebAttribute<nrq_Session_Select, { nrq_room: string | null }, {  }>;
    nrq_session1;
    nrq_sessionid: WebAttribute<nrq_Session_Select, { nrq_sessionid: string | null }, {  }>;
    nrq_speakerid_guid: WebAttribute<nrq_Session_Select, { nrq_speakerid_guid: string | null }, { nrq_speakerid_formatted?: string }>;
    nrq_starttime: WebAttribute<nrq_Session_Select, { nrq_starttime: string | null }, {  }>;
    nrq_starttimehour: WebAttribute<nrq_Session_Select, { nrq_starttimehour: nrq_timehour | null }, { nrq_starttimehour_formatted?: string }>;
    nrq_starttimeminutes: WebAttribute<nrq_Session_Select, { nrq_starttimeminutes: nrq_timeminutes | null }, { nrq_starttimeminutes_formatted?: string }>;
    overriddencreatedon: WebAttribute<nrq_Session_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<nrq_Session_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<nrq_Session_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<nrq_Session_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<nrq_Session_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<nrq_Session_Select, { statecode: nrq_session_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<nrq_Session_Select, { statuscode: nrq_session_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<nrq_Session_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<nrq_Session_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<nrq_Session_Select, { versionnumber: number | null }, {  }>;
  }
  interface nrq_Session_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    nrq_description: string;
    nrq_enabledforfeedback: boolean;
    nrq_endtime: string;
    nrq_endtimehour: nrq_timehour;
    nrq_endtimeminutes: nrq_timeminutes;
    nrq_eventid_guid: XQW.Guid;
    nrq_location: string;
    nrq_room: string;
    nrq_session: string;
    nrq_sessionid: XQW.Guid;
    nrq_speakerid_guid: XQW.Guid;
    nrq_starttime: string;
    nrq_starttimehour: nrq_timehour;
    nrq_starttimeminutes: nrq_timeminutes;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: nrq_session_statecode;
    statuscode: nrq_session_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface nrq_Session_Expand {
    createdby: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    nrq_EventId: WebExpand<nrq_Session_Expand, nrq_Event_Select, nrq_Event_Filter, { nrq_EventId: nrq_Event_Result }>;
    nrq_SpeakerId: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { nrq_SpeakerId: SystemUser_Result }>;
    nrq_nrq_sessionfeedback_session_nrq_session: WebExpand<nrq_Session_Expand, nrq_SessionFeedback_Select, nrq_SessionFeedback_Filter, { nrq_nrq_sessionfeedback_session_nrq_session: nrq_SessionFeedback_Result[] }>;
    ownerid: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { ownerid: SystemUser_Result }>;
    owninguser: WebExpand<nrq_Session_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  }
  interface nrq_Session_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    nrq_endtimehour_formatted?: string;
    nrq_endtimeminutes_formatted?: string;
    nrq_eventid_formatted?: string;
    nrq_speakerid_formatted?: string;
    nrq_starttimehour_formatted?: string;
    nrq_starttimeminutes_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface nrq_Session_Result extends nrq_Session_Base, nrq_Session_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    nrq_eventid_guid: string | null;
    nrq_speakerid_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface nrq_Session_RelatedOne {
    createdby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    nrq_EventId: WebMappingRetrieve<XrmContext.nrq_Event_Select,XrmContext.nrq_Event_Expand,XrmContext.nrq_Event_Filter,XrmContext.nrq_Event_Fixed,XrmContext.nrq_Event_Result,XrmContext.nrq_Event_FormattedResult>;
    nrq_SpeakerId: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    ownerid: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    owninguser: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
  }
  interface nrq_Session_RelatedMany {
    nrq_nrq_sessionfeedback_session_nrq_session: WebMappingRetrieve<XrmContext.nrq_SessionFeedback_Select,XrmContext.nrq_SessionFeedback_Expand,XrmContext.nrq_SessionFeedback_Filter,XrmContext.nrq_SessionFeedback_Fixed,XrmContext.nrq_SessionFeedback_Result,XrmContext.nrq_SessionFeedback_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  nrq_sessions: WebMappingRetrieve<XrmContext.nrq_Session_Select,XrmContext.nrq_Session_Expand,XrmContext.nrq_Session_Filter,XrmContext.nrq_Session_Fixed,XrmContext.nrq_Session_Result,XrmContext.nrq_Session_FormattedResult>;
}
interface WebEntitiesRelated {
  nrq_sessions: WebMappingRelated<XrmContext.nrq_Session_RelatedOne,XrmContext.nrq_Session_RelatedMany>;
}
interface WebEntitiesCUDA {
  nrq_sessions: WebMappingCUDA<XrmContext.nrq_Session_Create,XrmContext.nrq_Session_Update,XrmContext.nrq_Session_Select>;
}
