import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../model/profile";

@Component({
	selector: "skillitem",
	template: `
		<li class="mb-2">
			<div class="resume-skill-name">{{ skill.skillName }}</div>
			<div class="progress resume-progress">
				<div
					class="progress-bar theme-progress-bar-dark"
					role="progressbar"
					[style.width.%]="skill.level"
					aria-valuenow="25"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
		</li>
	`,
	styles: []
})
export class SkillitemComponent implements OnInit {
	@Input() skill: Skill;
	constructor() {}

	ngOnInit() {}
}
