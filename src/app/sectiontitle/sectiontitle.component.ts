import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "sectiontitle",
	template: `
		<h2
			class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
		>
			{{ title }}
		</h2>
	`,
	styles: []
})
export class SectiontitleComponent implements OnInit {
	@Input() title: string;
	constructor() {}

	ngOnInit() {}
}
