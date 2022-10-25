interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
declare namespace XrmContext {
  interface WebEntity {
  }
  interface WebEntity_Fixed {
    "@odata.etag": string;
  }
  interface nrq_Event_Base extends WebEntity {
  }
  interface nrq_Event_Fixed extends WebEntity_Fixed {
    nrq_eventid: string;
  }
  interface nrq_Event extends nrq_Event_Base, nrq_Event_Relationships {
  }
  interface nrq_Event_Relationships {
  }
  interface nrq_Event_Result extends nrq_Event_Base, nrq_Event_Relationships {
  }
  interface nrq_Event_FormattedResult {
  }
  interface nrq_Event_Select {
  }
  interface nrq_Event_Expand {
  }
  interface nrq_Event_Filter {
  }
  interface nrq_Event_Create extends nrq_Event {
  }
  interface nrq_Event_Update extends nrq_Event {
  }
  interface nrq_EventType_Base extends WebEntity {
  }
  interface nrq_EventType_Fixed extends WebEntity_Fixed {
    nrq_eventtypeid: string;
  }
  interface nrq_EventType extends nrq_EventType_Base, nrq_EventType_Relationships {
  }
  interface nrq_EventType_Relationships {
  }
  interface nrq_EventType_Result extends nrq_EventType_Base, nrq_EventType_Relationships {
  }
  interface nrq_EventType_FormattedResult {
  }
  interface nrq_EventType_Select {
  }
  interface nrq_EventType_Expand {
  }
  interface nrq_EventType_Filter {
  }
  interface nrq_EventType_Create extends nrq_EventType {
  }
  interface nrq_EventType_Update extends nrq_EventType {
  }
  interface nrq_Registration_Base extends WebEntity {
  }
  interface nrq_Registration_Fixed extends WebEntity_Fixed {
    nrq_registrationid: string;
  }
  interface nrq_Registration extends nrq_Registration_Base, nrq_Registration_Relationships {
  }
  interface nrq_Registration_Relationships {
  }
  interface nrq_Registration_Result extends nrq_Registration_Base, nrq_Registration_Relationships {
  }
  interface nrq_Registration_FormattedResult {
  }
  interface nrq_Registration_Select {
  }
  interface nrq_Registration_Expand {
  }
  interface nrq_Registration_Filter {
  }
  interface nrq_Registration_Create extends nrq_Registration {
  }
  interface nrq_Registration_Update extends nrq_Registration {
  }
  interface nrq_Session_Base extends WebEntity {
  }
  interface nrq_Session_Fixed extends WebEntity_Fixed {
    nrq_sessionid: string;
  }
  interface nrq_Session extends nrq_Session_Base, nrq_Session_Relationships {
  }
  interface nrq_Session_Relationships {
  }
  interface nrq_Session_Result extends nrq_Session_Base, nrq_Session_Relationships {
  }
  interface nrq_Session_FormattedResult {
  }
  interface nrq_Session_Select {
  }
  interface nrq_Session_Expand {
  }
  interface nrq_Session_Filter {
  }
  interface nrq_Session_Create extends nrq_Session {
  }
  interface nrq_Session_Update extends nrq_Session {
  }
  interface nrq_SessionFeedback_Base extends WebEntity {
  }
  interface nrq_SessionFeedback_Fixed extends WebEntity_Fixed {
    nrq_sessionfeedbackid: string;
  }
  interface nrq_SessionFeedback extends nrq_SessionFeedback_Base, nrq_SessionFeedback_Relationships {
  }
  interface nrq_SessionFeedback_Relationships {
  }
  interface nrq_SessionFeedback_Result extends nrq_SessionFeedback_Base, nrq_SessionFeedback_Relationships {
  }
  interface nrq_SessionFeedback_FormattedResult {
  }
  interface nrq_SessionFeedback_Select {
  }
  interface nrq_SessionFeedback_Expand {
  }
  interface nrq_SessionFeedback_Filter {
  }
  interface nrq_SessionFeedback_Create extends nrq_SessionFeedback {
  }
  interface nrq_SessionFeedback_Update extends nrq_SessionFeedback {
  }
  interface SystemUser_Base extends WebEntity {
  }
  interface SystemUser_Fixed extends WebEntity_Fixed {
    systemuserid: string;
  }
  interface SystemUser extends SystemUser_Base, SystemUser_Relationships {
  }
  interface SystemUser_Relationships {
  }
  interface SystemUser_Result extends SystemUser_Base, SystemUser_Relationships {
  }
  interface SystemUser_FormattedResult {
  }
  interface SystemUser_Select {
  }
  interface SystemUser_Expand {
  }
  interface SystemUser_Filter {
  }
  interface SystemUser_Create extends SystemUser {
  }
  interface SystemUser_Update extends SystemUser {
  }
  interface Connection_Base extends WebEntity {
  }
  interface Connection_Fixed extends WebEntity_Fixed {
    connectionid: string;
  }
  interface Connection extends Connection_Base, Connection_Relationships {
  }
  interface Connection_Relationships {
  }
  interface Connection_Result extends Connection_Base, Connection_Relationships {
  }
  interface Connection_FormattedResult {
  }
  interface Connection_Select {
  }
  interface Connection_Expand {
  }
  interface Connection_Filter {
  }
  interface Connection_Create extends Connection {
  }
  interface Connection_Update extends Connection {
  }
}
