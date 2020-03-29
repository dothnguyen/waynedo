import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../model/profile";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styles: []
})
export class HeaderComponent implements OnInit {
	@Input() profile: Profile;

	constructor() {}

	ngOnInit() {}
}
