declare namespace XrmContext {
  interface nrq_SessionFeedback_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    nrq_rating?: number | null;
    nrq_sessionfeedback?: string | null;
    nrq_sessionfeedbackid?: string | null;
    nrq_speakerscore?: number | null;
    overriddencreatedon?: Date | null;
    statecode?: nrq_sessionfeedback_statecode | null;
    statuscode?: nrq_sessionfeedback_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface nrq_SessionFeedback_Relationships {
    nrq_SessionId?: nrq_Session_Result | null;
    nrq_SpeakerId?: SystemUser_Result | null;
    nrq_UserId?: SystemUser_Result | null;
  }
  interface nrq_SessionFeedback extends nrq_SessionFeedback_Base, nrq_SessionFeedback_Relationships {
    nrq_SessionId_bind$nrq_sessions?: string | null;
    nrq_SpeakerId_bind$systemusers?: string | null;
    nrq_UserId_bind$systemusers?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface nrq_SessionFeedback_Create extends nrq_SessionFeedback {
  }
  interface nrq_SessionFeedback_Update extends nrq_SessionFeedback {
  }
  interface nrq_SessionFeedback_Select {
    createdby_guid: WebAttribute<nrq_SessionFeedback_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<nrq_SessionFeedback_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<nrq_SessionFeedback_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<nrq_SessionFeedback_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<nrq_SessionFeedback_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<nrq_SessionFeedback_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<nrq_SessionFeedback_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    nrq_rating: WebAttribute<nrq_SessionFeedback_Select, { nrq_rating: number | null }, {  }>;
    nrq_sessionfeedback1;
    nrq_sessionfeedbackid: WebAttribute<nrq_SessionFeedback_Select, { nrq_sessionfeedbackid: string | null }, {  }>;
    nrq_sessionid_guid: WebAttribute<nrq_SessionFeedback_Select, { nrq_sessionid_guid: string | null }, { nrq_sessionid_formatted?: string }>;
    nrq_speakerid_guid: WebAttribute<nrq_SessionFeedback_Select, { nrq_speakerid_guid: string | null }, { nrq_speakerid_formatted?: string }>;
    nrq_speakerscore: WebAttribute<nrq_SessionFeedback_Select, { nrq_speakerscore: number | null }, {  }>;
    nrq_userid_guid: WebAttribute<nrq_SessionFeedback_Select, { nrq_userid_guid: string | null }, { nrq_userid_formatted?: string }>;
    overriddencreatedon: WebAttribute<nrq_SessionFeedback_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<nrq_SessionFeedback_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<nrq_SessionFeedback_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<nrq_SessionFeedback_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<nrq_SessionFeedback_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<nrq_SessionFeedback_Select, { statecode: nrq_sessionfeedback_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<nrq_SessionFeedback_Select, { statuscode: nrq_sessionfeedback_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<nrq_SessionFeedback_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<nrq_SessionFeedback_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<nrq_SessionFeedback_Select, { versionnumber: number | null }, {  }>;
  }
  interface nrq_SessionFeedback_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    nrq_rating: number;
    nrq_sessionfeedback: string;
    nrq_sessionfeedbackid: XQW.Guid;
    nrq_sessionid_guid: XQW.Guid;
    nrq_speakerid_guid: XQW.Guid;
    nrq_speakerscore: number;
    nrq_userid_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: nrq_sessionfeedback_statecode;
    statuscode: nrq_sessionfeedback_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface nrq_SessionFeedback_Expand {
    createdby: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    nrq_SessionId: WebExpand<nrq_SessionFeedback_Expand, nrq_Session_Select, nrq_Session_Filter, { nrq_SessionId: nrq_Session_Result }>;
    nrq_SpeakerId: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { nrq_SpeakerId: SystemUser_Result }>;
    nrq_UserId: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { nrq_UserId: SystemUser_Result }>;
    ownerid: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { ownerid: SystemUser_Result }>;
    owninguser: WebExpand<nrq_SessionFeedback_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  }
  interface nrq_SessionFeedback_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    nrq_sessionid_formatted?: string;
    nrq_speakerid_formatted?: string;
    nrq_userid_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface nrq_SessionFeedback_Result extends nrq_SessionFeedback_Base, nrq_SessionFeedback_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    nrq_sessionid_guid: string | null;
    nrq_speakerid_guid: string | null;
    nrq_userid_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface nrq_SessionFeedback_RelatedOne {
    createdby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    nrq_SessionId: WebMappingRetrieve<XrmContext.nrq_Session_Select,XrmContext.nrq_Session_Expand,XrmContext.nrq_Session_Filter,XrmContext.nrq_Session_Fixed,XrmContext.nrq_Session_Result,XrmContext.nrq_Session_FormattedResult>;
    nrq_SpeakerId: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    nrq_UserId: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    ownerid: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
    owninguser: WebMappingRetrieve<XrmContext.SystemUser_Select,XrmContext.SystemUser_Expand,XrmContext.SystemUser_Filter,XrmContext.SystemUser_Fixed,XrmContext.SystemUser_Result,XrmContext.SystemUser_FormattedResult>;
  }
  interface nrq_SessionFeedback_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  nrq_sessionfeedbacks: WebMappingRetrieve<XrmContext.nrq_SessionFeedback_Select,XrmContext.nrq_SessionFeedback_Expand,XrmContext.nrq_SessionFeedback_Filter,XrmContext.nrq_SessionFeedback_Fixed,XrmContext.nrq_SessionFeedback_Result,XrmContext.nrq_SessionFeedback_FormattedResult>;
}
interface WebEntitiesRelated {
  nrq_sessionfeedbacks: WebMappingRelated<XrmContext.nrq_SessionFeedback_RelatedOne,XrmContext.nrq_SessionFeedback_RelatedMany>;
}
interface WebEntitiesCUDA {
  nrq_sessionfeedbacks: WebMappingCUDA<XrmContext.nrq_SessionFeedback_Create,XrmContext.nrq_SessionFeedback_Update,XrmContext.nrq_SessionFeedback_Select>;
}
