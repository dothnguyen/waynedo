import { Component, OnInit, Input } from "@angular/core";
import { SocialLink } from "../model/profile";

@Component({
	selector: "sociallink",
	template: `
		<a href="{{ socialLink.url }}" target="_blank"
			><span class="fa-container text-center mr-2"
				><i class="fab {{ socialLink.faIconClass }} fa-fw"></i></span
			>{{ socialLink.link }}</a
		>
	`,
	styles: []
})
export class SociallinkComponent implements OnInit {
	@Input() socialLink: SocialLink;

	constructor() {}

	ngOnInit() {}
}
