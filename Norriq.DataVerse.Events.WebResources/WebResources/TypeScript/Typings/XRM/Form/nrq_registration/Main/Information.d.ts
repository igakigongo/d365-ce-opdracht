declare namespace Form.nrq_registration.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "_section_772"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "nrq_eventid"): Xrm.LookupAttribute<"nrq_event">;
      get(name: "nrq_paymentdate"): Xrm.DateAttribute;
      get(name: "nrq_price"): Xrm.NumberAttribute;
      get(name: "nrq_registration"): Xrm.Attribute<string>;
      get(name: "nrq_userid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "nrq_waspresent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_nrq_eventid"): Xrm.LookupControl<"nrq_event">;
      get(name: "nrq_paymentdate"): Xrm.DateControl;
      get(name: "nrq_price"): Xrm.NumberControl;
      get(name: "nrq_registration"): Xrm.StringControl;
      get(name: "nrq_userid"): Xrm.LookupControl<"systemuser">;
      get(name: "nrq_waspresent"): Xrm.OptionSetControl<boolean>;
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
    getAttribute(attributeName: "nrq_eventid"): Xrm.LookupAttribute<"nrq_event">;
    getAttribute(attributeName: "nrq_paymentdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "nrq_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "nrq_registration"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nrq_userid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "nrq_waspresent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_nrq_eventid"): Xrm.LookupControl<"nrq_event">;
    getControl(controlName: "nrq_paymentdate"): Xrm.DateControl;
    getControl(controlName: "nrq_price"): Xrm.NumberControl;
    getControl(controlName: "nrq_registration"): Xrm.StringControl;
    getControl(controlName: "nrq_userid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "nrq_waspresent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
