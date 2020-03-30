import { Component } from "@angular/core";
import { Profile, CareerSummary, WorkExperience } from "./model/profile";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styles: []
})
export class AppComponent {
	title = "waynedo";

	profile: Profile;
	careerSummany: CareerSummary;
	experiences: Array<WorkExperience>;

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

		this.careerSummany = {
			title: "Career Summary",
			summary:
				"An experienced software developer with over nine years working with various programming languages and technologies, such as Java (with EJB Hibernate, JPA, Spring), Web development (with HTML, CSS, JavaScript, Backbonejs, Angular), .NET (ASP.NET MVC, EntityFramework), Android development, and SQL; with special interest in new and emerging technologies. Professional, able to work autonomously and within a team environment to a high standard in a dynamic and changing industry; outcomes-focused with an attention to detail, quality and innovation."
		};

		// work experiences
		this.experiences = new Array();

		this.experiences.push({
			title: "Software Developer",
			companyName: "QIT Plus Pty Ltd",
			yearFrom: "2017",
			yearTo: "Present",
			companyUrl: "https://www.qitplus.com",
			roleDesc:
				"Fullstack software developer, developing Incident Management System that helps different local councils and organizations to manage operational location-based incidents in times of events such as Storms and Cyclons, Bushfires, Flood, etc with the ability to record requests/incidents; assign tasks to internal staff or external contacts; broadcast information to different parties; gather information via dynamic forms, etc. The system is developed using .NET Framework at the backend and BackboneJs in the front end.",
			achivements: "",
			technologies: [
				"C#",
				".NET Framework",
				"Entity Framework",
				"SQL Server",
				"Backbonejs",
				"jquery"
			]
		});

		this.experiences.push({
			title: "Seasonal Tutor and Lecturer",
			companyName: "James Cook University Brisbane",
			yearFrom: "2017",
			yearTo: "2019",
			companyUrl: "https://www.jcub.edu.au",
			roleDesc: `Running the workshops and lab activities of several subjects. Also help students with the assignments and team projects. The subjects include:<br/>
        - Problem solving and Programming (Fundamental Python Programming)<br/>
        - E-Business Technology (PHP, Javascript, CSS)<br/>
        - Enterprise database system with Oracle (Oracle server, PL/SQL, Trigger, Procedure)<br/>
        - Advanced mobile technology (Android Application)`,
			achivements: "",
			technologies: ["Oracle", "HTML5", "CSS", "Android SDK", "Python"]
		});

		// this.experiences.push({
		// 	title: "Intern Software Developer",
		// 	companyName: "Nuance Communications",
		// 	yearFrom: "2017",
		// 	yearTo: "2017",
		// 	companyUrl: "https://www.nuance.com/",
		// 	roleDesc: `Developed data processing system that reads data from CSV files, sends to Kafka server from which the data will be streamed by Apache Spark, and be aggregated using Spark Structured Streaming API. Finally the aggregated data is sent to the Wallboard system to display on multiple screens.`,
		// 	achivements: ""
		// });

		this.experiences.push({
			title: "Mobile Application Developer, Freelancer",
			companyName: "Self-employed",
			yearFrom: "2013",
			yearTo: "2015",
			companyUrl: "https://apkfab.com/developer/tndev",
			roleDesc: `Developed Android and iOS applications and games.`,
			achivements: "",
			technologies: [
				"Java",
				"Kotlin",
				"Android SDK",
				"Google AppEngine",
				"LibGdx"
			]
		});

		this.experiences.push({
			title: "Software Developer",
			companyName: "Phuc Nguyen Informatics Technology",
			yearFrom: "2011",
			yearTo: "2013",
			companyUrl: "",
			roleDesc: `Developed a central configuration system for an “E-Health” server, which is a network management system for Actions Results LCC based in the United States. The system is a web-based application and was written using Spring, Hibernate and GWT.`,
			achivements: "",
			technologies: ["Java", "Spring", "GWT", "HTML", "CSS"]
		});

		this.experiences.push({
			title: "On-site Software Developer",
			companyName: "Energia Communications - Japan",
			yearFrom: "2008",
			yearTo: "2009",
			companyUrl: "https://www.enecom.co.jp/",
			roleDesc: `Participating in building a new framework using Java, Struts, JSP.`,
			achivements: "",
			technologies: ["Java", "Struts", "HTML", "CSS"]
		});

		this.experiences.push({
			title: "Software Developer",
			companyName: "Aureole Information Technology Inc",
			yearFrom: "2006",
			yearTo: "2011",
			companyUrl: "http://aureole.vn/ait/vietnamese/CompanyProfile.html",
			roleDesc: `<strong>Developer, Team Leader</strong><br/>

      Led a team of up to five developers across several projects using Java language and technologies including JavaEE 5, Seam, Hibernate, JSF and JPA. Also trained in Japan with client (Energia Communications) in its VB.NET framework and took part in developing new Java framework using Struts and JSP. Notable projects include:<br/>
      - An academic management system project (IFMS) for the Malaysian Ministry of Higher Education project (Project Lead), working on-site at Fujitsu Malaysia.<br/>
      - Android mobile application for connecting to POWEREGG to get new messages, events and reminders<br/>
      - A plugin to manage trip fee for POWEREGG v2.0.<br/>
      - Developed internal appointment/dismissal management system for Energia Communications.<br/>
      - Developed several production and sale management systems for Japanese customers (Mitani Sangyo, Houken) using ASP.NET with VB.NET and Oracle database.`,
			achivements: "",
			technologies: [
				"Java",
				"Struts",
				"EJB",
				"Hibernate",
				"JPA",
				"VB.NET",
				"HTML",
				"Javascript"
			]
		});
	}
}
