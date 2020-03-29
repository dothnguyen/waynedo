import { Component, OnInit, Input } from "@angular/core";
import { SocialLink } from "../model/profile";

@Component({
	selector: "sociallinklist",
	template: `
		<ul class="resume-social list-unstyled" *ngIf="socialLinks.length > 0">
			<li class="mb-3" *ngFor="let link of socialLinks">
				<sociallink [socialLink]="link"></sociallink>
			</li>
		</ul>
	`,
	styles: []
})
export class SociallinklistComponent implements OnInit {
	@Input() socialLinks: SocialLink[];

	constructor() {}

	ngOnInit() {}
}
