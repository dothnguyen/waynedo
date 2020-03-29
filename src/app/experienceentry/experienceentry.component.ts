import { Component, OnInit, Input } from "@angular/core";
import { WorkExperience } from "../model/profile";

@Component({
	selector: "experienceentry",
	templateUrl: "./experienceenty.component.html",
	styles: []
})
export class ExperienceentryComponent implements OnInit {
	@Input() experience: WorkExperience;

	constructor() {}

	ngOnInit() {}
}
