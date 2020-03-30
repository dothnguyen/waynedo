import { Component, OnInit, Input } from "@angular/core";
import { Skill, SkillList } from "../model/profile";

@Component({
	selector: "skilllist",
	template: `
		<div class="resume-skill-item">
			<h4 class="resume-skills-cat font-weight-bold">
				{{ skills.name }}
			</h4>
			<ul class="list-unstyled mb-4">
				<skillitem
					*ngFor="let skill of skills.skills"
					[skill]="skill"
				></skillitem>
			</ul>
		</div>
	`,
	styles: []
})
export class SkilllistComponent implements OnInit {
	@Input() skills: SkillList;
	constructor() {}

	ngOnInit() {}
}
