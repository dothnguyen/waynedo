import { Component, OnInit, Input } from "@angular/core";
import { CareerSummary } from "../model/profile";

@Component({
	selector: "careersummary",
	template: `
		<section class="resume-section summary-section mb-5">
			<sectiontitle [title]="summary.title"></sectiontitle>
			<div class="resume-section-content">
				<p class="mb-0" style="text-align: justify;">
					{{ summary.summary }}
				</p>
			</div>
		</section>
	`,
	styles: []
})
export class CareersummaryComponent implements OnInit {
	@Input() summary: CareerSummary;

	constructor() {}

	ngOnInit() {}
}
