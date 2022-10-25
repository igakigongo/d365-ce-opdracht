declare namespace Form.nrq_event.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "General_section_4"): Xrm.PageSection;
        get(name: "General_section_5"): Xrm.PageSection;
        get(name: "General_section_6"): Xrm.PageSection;
        get(name: "_section_148"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "nrq_date"): Xrm.DateAttribute;
      get(name: "nrq_endtime"): Xrm.Attribute<string>;
      get(name: "nrq_endtimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
      get(name: "nrq_endtimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
      get(name: "nrq_event"): Xrm.Attribute<string>;
      get(name: "nrq_eventtypeid"): Xrm.LookupAttribute<"nrq_eventtype">;
      get(name: "nrq_income"): Xrm.NumberAttribute;
      get(name: "nrq_location"): Xrm.Attribute<string>;
      get(name: "nrq_organizer"): Xrm.LookupAttribute<"systemuser">;
      get(name: "nrq_price"): Xrm.NumberAttribute;
      get(name: "nrq_starttime"): Xrm.Attribute<string>;
      get(name: "nrq_starttimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
      get(name: "nrq_starttimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
      get(name: "nrq_totalcost"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_new_2"): Xrm.SubGridControl<"nrq_registration">;
      get(name: "Subgrid_new_3"): Xrm.SubGridControl<"nrq_session">;
      get(name: "header_createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "header_nrq_endtime"): Xrm.StringControl;
      get(name: "header_nrq_starttime"): Xrm.StringControl;
      get(name: "nrq_date"): Xrm.DateControl;
      get(name: "nrq_endtimehour"): Xrm.OptionSetControl<nrq_timehour>;
      get(name: "nrq_endtimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
      get(name: "nrq_event"): Xrm.StringControl;
      get(name: "nrq_eventtypeid"): Xrm.LookupControl<"nrq_eventtype">;
      get(name: "nrq_income"): Xrm.NumberControl;
      get(name: "nrq_location"): Xrm.StringControl;
      get(name: "nrq_organizer"): Xrm.LookupControl<"systemuser">;
      get(name: "nrq_price"): Xrm.NumberControl;
      get(name: "nrq_starttimehour"): Xrm.OptionSetControl<nrq_timehour>;
      get(name: "nrq_starttimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
      get(name: "nrq_totalcost"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "nrq_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "nrq_endtime"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_endtimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
    getAttribute(attributeName: "nrq_endtimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
    getAttribute(attributeName: "nrq_event"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_eventtypeid"): Xrm.LookupAttribute<"nrq_eventtype">;
    getAttribute(attributeName: "nrq_income"): Xrm.NumberAttribute;
    getAttribute(attributeName: "nrq_location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_organizer"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "nrq_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "nrq_starttime"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_starttimehour"): Xrm.OptionSetAttribute<nrq_timehour>;
    getAttribute(attributeName: "nrq_starttimeminutes"): Xrm.OptionSetAttribute<nrq_timeminutes>;
    getAttribute(attributeName: "nrq_totalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Subgrid_new_2"): Xrm.SubGridControl<"nrq_registration">;
    getControl(controlName: "Subgrid_new_3"): Xrm.SubGridControl<"nrq_session">;
    getControl(controlName: "header_createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "header_nrq_endtime"): Xrm.StringControl;
    getControl(controlName: "header_nrq_starttime"): Xrm.StringControl;
    getControl(controlName: "nrq_date"): Xrm.DateControl;
    getControl(controlName: "nrq_endtimehour"): Xrm.OptionSetControl<nrq_timehour>;
    getControl(controlName: "nrq_endtimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
    getControl(controlName: "nrq_event"): Xrm.StringControl;
    getControl(controlName: "nrq_eventtypeid"): Xrm.LookupControl<"nrq_eventtype">;
    getControl(controlName: "nrq_income"): Xrm.NumberControl;
    getControl(controlName: "nrq_location"): Xrm.StringControl;
    getControl(controlName: "nrq_organizer"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "nrq_price"): Xrm.NumberControl;
    getControl(controlName: "nrq_starttimehour"): Xrm.OptionSetControl<nrq_timehour>;
    getControl(controlName: "nrq_starttimeminutes"): Xrm.OptionSetControl<nrq_timeminutes>;
    getControl(controlName: "nrq_totalcost"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
