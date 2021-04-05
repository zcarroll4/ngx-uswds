import { Directive, Host, Input, Optional } from "@angular/core";
import { UsaPanel } from "./accordion-items";
import { UsaAccordionComponent } from "./accordion.component";

/**
 * A directive to put on a button that toggles panel opening and closing.
 * 
 * Due to circular dependency issue, this toggle button is on a separate file
 */
@Directive({
  selector: 'button[UsaAccordionToggle]',
  host: {
    'type': 'button',
    '[disabled]': 'panel.disabled',
    'class': 'usa-accordion__button',
    '[class.collapsed]': '!panel.isOpen',
    '[attr.aria-expanded]': 'panel.isOpen',
    '[attr.aria-controls]': 'panel.isOpen ? panel.id : undefined',
    '[attr.aria-disabled]': 'panel.disabled && panel.isOpen ? true : undefined',
    '(click)': 'accordion.toggle(panel.id)',
  }
})
export class UsaAccordionToggle {
  static ngAcceptInputType_UsaAccordionToggle: UsaPanel | '';

  @Input()
  set UsaAccordionToggle(panel: UsaPanel) {
    if (panel) {
      this.panel = panel;
    }
  }

  constructor(public accordion: UsaAccordionComponent, @Optional() @Host() public panel: UsaPanel) { }
}