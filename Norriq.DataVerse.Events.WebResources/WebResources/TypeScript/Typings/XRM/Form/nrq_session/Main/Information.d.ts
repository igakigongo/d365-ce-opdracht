declare namespace Form.nrq_session.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Location"): Xrm.PageSection;
        get(name: "_section_398"): Xrm.PageSection;
        get(name: "basic_info"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "nrq_description"): Xrm.Attribute<string>;
      get(name: "nrq_enabledforfeedback"): Xrm.OptionSetAttribute<boolean>;
      get(name: "nrq_endtime"): Xrm.Attribute<string>;
      get(name: "nrq_endtimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
      get(name: "nrq_endtimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
      get(name: "nrq_eventid"): Xrm.LookupAttribute<"nrq_event">;
      get(name: "nrq_location"): Xrm.Attribute<string>;
      get(name: "nrq_room"): Xrm.Attribute<string>;
      get(name: "nrq_session"): Xrm.Attribute<string>;
      get(name: "nrq_speakerid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "nrq_starttime"): Xrm.Attribute<string>;
      get(name: "nrq_starttimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
      get(name: "nrq_starttimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_nrq_endtime"): Xrm.StringControl;
      get(name: "header_nrq_eventid"): Xrm.LookupControl<"nrq_event">;
      get(name: "header_nrq_starttime"): Xrm.StringControl;
      get(name: "nrq_description"): Xrm.StringControl;
      get(name: "nrq_enabledforfeedback"): Xrm.OptionSetControl<boolean>;
      get(name: "nrq_endtimehour"): Xrm.OptionSetControl<nrq_timehour>;
      get(name: "nrq_endtimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
      get(name: "nrq_location"): Xrm.StringControl;
      get(name: "nrq_room"): Xrm.StringControl;
      get(name: "nrq_session"): Xrm.StringControl;
      get(name: "nrq_speakerid"): Xrm.LookupControl<"systemuser">;
      get(name: "nrq_starttimehour"): Xrm.OptionSetControl<nrq_timehour>;
      get(name: "nrq_starttimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "nrq_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_enabledforfeedback"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "nrq_endtime"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_endtimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
    getAttribute(attributeName: "nrq_endtimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
    getAttribute(attributeName: "nrq_eventid"): Xrm.LookupAttribute<"nrq_event">;
    getAttribute(attributeName: "nrq_location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_room"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_session"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_speakerid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "nrq_starttime"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_starttimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
    getAttribute(attributeName: "nrq_starttimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_nrq_endtime"): Xrm.StringControl;
    getControl(controlName: "header_nrq_eventid"): Xrm.LookupControl<"nrq_event">;
    getControl(controlName: "header_nrq_starttime"): Xrm.StringControl;
    getControl(controlName: "nrq_description"): Xrm.StringControl;
    getControl(controlName: "nrq_enabledforfeedback"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "nrq_endtimehour"): Xrm.OptionSetControl<nrq_timehour>;
    getControl(controlName: "nrq_endtimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
    getControl(controlName: "nrq_location"): Xrm.StringControl;
    getControl(controlName: "nrq_room"): Xrm.StringControl;
    getControl(controlName: "nrq_session"): Xrm.StringControl;
    getControl(controlName: "nrq_speakerid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "nrq_starttimehour"): Xrm.OptionSetControl<nrq_timehour>;
    getControl(controlName: "nrq_starttimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
