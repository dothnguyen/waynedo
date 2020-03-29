import { Component } from "@angular/core";
import { Profile } from "./model/profile";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styles: []
})
export class AppComponent {
	title = "waynedo";

	profile: Profile;

	constructor() {
		this.profile = {
			name: "Wayne Do",
			position: "Software Developer",
			email: "dothnguyen@gmail.com",
			mobile: "+61 452639779",
			profileImg:
				"https://github.com/dothnguyen/dothnguyen/raw/master/src/assets/img/profile.png",
			socials: [
				{
					link: "linkedin.com/in/dothnguyen",
					faIconClass: "fa-linkedin-in",
					url: "www.linkedin.com/in/dothnguyen"
				},
				{
					link: "github.com/dothnguyen",
					faIconClass: "fa-github-alt",
					url: "https://github.com/dothnguyen"
				}
			]
		};
	}
}
