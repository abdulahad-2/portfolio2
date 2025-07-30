// Portfolio Data Configuration
// Add new portfolio items by adding objects to this array
// Each item should follow the structure shown in the examples below

const portfolioData = [
	{
		id: "minima",
		category: "f-tech",
		displayCategory: "Programming Language",
		title: "Minima | Programming Language",
		image: "images/works/minima.png",
		icon: "fab fa-github",
		description: "Minima is a beginner-friendly programming language designed for simplicity and clarity, using a natural and intuitive syntax that resembles everyday language.",
		techStack: {
			"Client": ["React"],
			"Server": ["Node", "Flask"],
			"Programming Languages": ["JavaScript", "Python"],
			"Tools": ["Lark"]
		},
		link: "https://minima-tau.vercel.app/",
		linkText: "View Project",
		popupCategory: "React Web App"
	},
	{
		id: "haliya",
		category: "f-tech",
		displayCategory: "Artificial Intelligence",
		title: "Haliya | AI Fortune Teller",
		image: "images/works/haliya.jpg",
		icon: "fab fa-github",
		description: "Haliya is an AI Fortune Teller Chatbot for students around Pamantasan ng Lungsod ng Maynila (PLM). Developed as a submission for our finals project in the course Application Development and Emerging Technologies, this project showcases my creativity and skills using frontend and backend technologies.",
		techStack: {
			"Client": ["React"],
			"Server": ["Node", "Flask", "Rasa"],
			"Programming Languages": ["JavaScript", "Python"],
			"Tools": ["Figma", "OpenAI API"]
		},
		link: "https://github.com/vinnyy-ph/Haliya-The-AI-Fortune-Teller",
		linkText: "View Project",
		popupCategory: "React Web App"
	},
	{
		id: "roxasweb",
		category: "f-tech",
		displayCategory: "Website",
		title: "Manuel A. Roxas High School Website",
		image: "images/works/roxasweb.jpg",
		icon: "fas fa-browsers",
		description: "This was the first website project that I have done. It was a project that was lead by my adviser and I was the lead programmer. This website contains information about the Manuel A. Roxas High School.",
		techStack: ["HTML", "CSS", "JavaScript"],
		link: "https://marshs.vercel.app/",
		linkText: "View Project"
	},
	{
		id: "vieux-fad",
		category: "f-tech",
		displayCategory: "Website",
		title: "The Vieux Fad Diner Cafe Website",
		image: "images/works/vieux-fad.png",
		icon: "fas fa-browsers",
		description: "I made this project for my sister's requirement in one of her college subjects. It is a website that contains information about the business she proposed. The backend is not implemented.",
		techStack: ["HTML", "CSS", "JavaScript"],
		link: "https://vieuxfad.vercel.app/",
		linkText: "View Project"
	},
	{
		id: "plmsite",
		category: "f-tech",
		displayCategory: "Website",
		title: "PLM SITE Website Project",
		image: "images/works/site.png",
		icon: "fas fa-browsers",
		description: "This website was submitted as a finals project for my Intro to Computing subject. The website was a prototype for the IT organization of PLM called SITE.",
		techStack: ["HTML", "CSS", "JavaScript"],
		link: "https://site-plm.vercel.app/",
		linkText: "View Project"
	},
	{
		id: "haribonsquadron",
		category: "f-tech",
		displayCategory: "Game",
		title: "Haribon Squadron",
		image: "images/works/haribonsquadron.png",
		icon: "fab fa-github",
		description: "Haribon Squadrons is a space invaders-like game themed around Pamantasan ng Lungsod ng Maynila (PLM). Developed as a submission for our finals project in the course Computer Architecture and Organization, this game showcases our skills in x86 assembly language programming and our creativity.",
		techStack: {
			"Programming Languages": ["x86 Assembly Language"],
			"Tools": ["DOSBox Emulator", "Turbo Assembler"]
		},
		link: "https://github.com/vinnyy-ph/Haribon-Squadron",
		linkText: "View Project",
		popupCategory: "Assembly Game"
	},
	{
		id: "ecarga",
		category: "f-tech",
		displayCategory: "Hackaton Entry",
		title: "eCarga",
		image: "images/works/ecarga.png",
		icon: "fab fa-github",
		description: "eCarga is a mobile ride-hailing application exclusively designed for people with mobility disabilities and physical impairments. It provides easy-access booking system for specialized vans and tricycles designed for people with mobility impairment. Developed as an entry to GDSC PLM Innolympics 2024.",
		techStack: {
			"Programming Languages": ["Flutter"],
			"Database and APIs": ["Firebase", "Google Maps API"],
			"Tools": ["Figma"]
		},
		link: "https://github.com/vinnyy-ph/eCarga",
		linkText: "View Project",
		popupCategory: "GDSC PLM Innolympics 2024 Hackaton Entry"
	},
	{
		id: "cengpictorial",
		category: "f-designs",
		displayCategory: "Poster",
		title: "PLM College of Engineering Class Pictorial Poster",
		image: "images/works/posters/CLASSPICT_POSTERcrop.jpg",
		icon: "fab fa-facebook",
		description: "Designed a poster for PLM College of Engineering 2024 Class Pictorial",
		createdWith: ["Adobe Illustrator"],
		link: "https://www.facebook.com/plmceng/posts/pfbid0TU7KvKYNND9U3fZ5qh93As1j6SKmkX6YMUQtymHwzcJkeYWfucADcobjz96pts62l",
		linkText: "View Post",
		popupImage: "images/works/posters/CLASSPICT_POSTER.jpg"
	},
	{
		id: "recoennectdp",
		category: "f-designs",
		displayCategory: "DP Frame",
		title: "PLM College of Engineering ReCOEnnect DP Frame",
		image: "images/works/pubmats/RECOENNECT_EVENT_DPFRAME.jpg",
		icon: "fab fa-facebook",
		description: "Designed a DP Frame for PLM College of Engineering ReCOEnnect Event",
		createdWith: ["Figma", "Adobe Illustrator"],
		link: "https://www.facebook.com/plmceng/posts/pfbid02X6EGQGPgxZJdQtAFBrYD91126Ab1sgoks2ntEaHCyV15HxUUDcA91hgTkqChXnwXl",
		linkText: "View Post"
	},
	{
		id: "cengxmas",
		category: "f-designs",
		displayCategory: "Logo Redesign",
		title: "PLM College of Engineering Logo Redesign",
		image: "images/works/posters/REDESIGN_XMAS_LOGO.jpg",
		icon: "fab fa-facebook",
		description: "Redesigned the logo for PLM College of Engineering to match the christmas theme",
		createdWith: ["Adobe Illustrator"],
		link: "https://www.facebook.com/photo?fbid=860448282541392&set=a.579812740604949",
		linkText: "View Post"
	},
	{
		id: "cenglace",
		category: "f-designs",
		displayCategory: "Lanyard Design",
		title: "PLM College of Engineering 2023 Lanyard Design",
		image: "images/works/posters/MOCKUP.png",
		icon: "fab fa-facebook",
		description: "Designed a lanyard following the design guidelines of PLM College of Engineering",
		createdWith: ["Adobe Illustrator", "Adobe Photoshop"],
		link: "https://www.facebook.com/plmcesc/posts/pfbid02ikxYf8FwbPDRSM9QH3XJeVatFmsqpX1NFArA9PNdjCRoatZyKXZNA48Znqzp5Htsl",
		linkText: "View Post"
	},
	{
		id: "csweek1",
		category: "f-designs",
		displayCategory: "Poster",
		title: "PLM CSS | CS WEEK Poster 1",
		image: "images/works/posters/CSWEEK_POSTER1crop.png",
		icon: "fas fa-image",
		isImagePopup: true,
		popupImage: "images/works/posters/CSWEEK_POSTER1.png"
	},
	{
		id: "csweek2",
		category: "f-designs",
		displayCategory: "Poster",
		title: "PLM CSS | CS WEEK Poster 2",
		image: "images/works/posters/CSWEEK_POSTER2.png",
		icon: "fas fa-image",
		isImagePopup: true,
		popupImage: "images/works/posters/CSWEEK_POSTER2.png"
	},
	{
		id: "cengmerchpromo",
		category: "f-videos",
		displayCategory: "Video Promo",
		title: "PLM College of Engineering 2024 Merch Promo",
		image: "images/works/videos/cengpromovid.png",
		icon: "fab fa-facebook",
		description: "Edited a video to promote the PLM College of Engineering 2024 Merch",
		createdWith: ["Adobe Premiere Pro", "Adobe After Effects"],
		link: "https://www.facebook.com/plmceng/videos/1129477031358695/",
		linkText: "View Post"
	},
	{
		id: "cengintramsteaser",
		category: "f-videos",
		displayCategory: "Video Teaser",
		title: "PLM College of Engineering 2024 Intramurals Teaser",
		image: "images/works/videos/cengintramsteaser.png",
		icon: "fab fa-facebook",
		description: "Edited a video teaser for the PLM College of Engineering 2024 Intramurals",
		createdWith: ["Adobe After Effects"],
		link: "https://www.facebook.com/plmceng/videos/369083386190093/",
		linkText: "View Post"
	},
	{
		id: "plmrecogsde",
		category: "f-videos",
		displayCategory: "SDE Video",
		title: "PLM 2023 Recognition<br>Same Day Edit",
		image: "images/works/videos/plmrecogsde.png",
		icon: "fab fa-google-drive",
		description: "Edited a video for the PLM 2023 Recognition",
		createdWith: ["Adobe After Effects", "Adobe Premiere Pro"],
		link: "https://drive.google.com/file/d/1PdfOCBJSx2E5X0K-Cce2nuoNfzlW7Mbi/view?pli=1",
		linkText: "View Post",
		popupCategory: "SDE Video",
		popupTitle: "Pamantasan ng Lungsod ng Maynila 2023 Recognition Same Day Edit"
	},
	{
		id: "beanthere",
		category: "f-videos",
		displayCategory: "Post Event Video",
		title: "Notion @ PLM<br> Bean There, Notion That!",
		image: "images/works/videos/beantherenotion.jpg",
		icon: "fab fa-facebook",
		description: "Edited a post event video for Notion - PLM",
		createdWith: ["Adobe After Effects", "Adobe Premiere Pro"],
		link: "https://www.facebook.com/notion.plm/videos/555823316980733",
		linkText: "View Post",
		popupCategory: "Post Event Video",
		popupTitle: "Bean There, Notion That: Video Recap"
	}
];

// Portfolio Management Functions
const PortfolioManager = {
	// Function to generate tech stack HTML
	generateTechStack(techStack) {
		if (Array.isArray(techStack)) {
			return techStack.map(tech => `<li>${tech}</li>`).join('');
		} else if (typeof techStack === 'object') {
			return Object.entries(techStack).map(([key, values]) => 
				`<li><strong>${key}:</strong> ${Array.isArray(values) ? values.join(', ') : values}</li>`
			).join('');
		}
		return '';
	},

	// Function to generate created with HTML
	generateCreatedWith(createdWith) {
		return createdWith.map(tool => `<li>${tool}</li>`).join('');
	},

	// Function to generate portfolio item HTML
	generatePortfolioItem(item) {
		const isImagePopup = item.isImagePopup;
		const hasPopup = !isImagePopup;
		const popupClass = isImagePopup ? 'has-popup-image' : 'has-popup-media';
		const popupHref = isImagePopup ? item.popupImage : `#${item.id}`;

		let popupContent = '';
		if (hasPopup) {
			const techStackHTML = item.techStack ? `
				<ul>
					<p>Tech Stack:</p>
					${this.generateTechStack(item.techStack)}
				</ul>
			` : '';

			const createdWithHTML = item.createdWith ? `
				<ul>
					<p>Created with:</p>
					${this.generateCreatedWith(item.createdWith)}
				</ul>
			` : '';

			popupContent = `
				<div id="${item.id}" class="popup-box mfp-fade mfp-hide">
					<div class="web">
						<div class="image">
							<img src="${item.popupImage || item.image}" alt="">
						</div>
						<div class="desc">
							<div class="category">${item.popupCategory || item.displayCategory}</div>
							<h4>${item.popupTitle || item.title}</h4>
							<p>
								${item.description}
								${techStackHTML}
								${createdWithHTML}
							</p>
							${item.link ? `
								<a href="${item.link}" target="_blank" rel="noopener" class="btn">
									<span class="animated-button"><span>${item.linkText}</span></span>
									<i class="icon fas fa-chevron-right"></i>
								</a>
							` : ''}
						</div>
					</div>
				</div>
			`;
		}

		return `
			<div class="box-col ${item.category}">
				<div class="box-item">
					<div class="image">
						<a href="${popupHref}" class="${popupClass}">
							<img src="${item.image}" alt="" />
							<span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<i class="icon ${item.icon}"></i>
									</span>
								</span>
							</span>
						</a>
					</div>
					<div class="desc">
						<div class="category">${item.displayCategory}</div>
						<a href="${popupHref}" class="name ${popupClass}">${item.title}</a>
					</div>
					${popupContent}
				</div>
			</div>
		`;
	},

	// Function to render all portfolio items
	renderPortfolio() {
		const container = document.getElementById('portfolio-container');
		if (container) {
			container.innerHTML = portfolioData.map(item => this.generatePortfolioItem(item)).join('');
			
			// Reinitialize any filtering/isotope after content is loaded
			if (typeof $ !== 'undefined' && $.fn.isotope) {
				setTimeout(() => {
					$(container).isotope('reloadItems').isotope();
				}, 100);
			}
			
			// Reinitialize magnific popup for the new content
			if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
				setTimeout(() => {
					$('.has-popup-image').magnificPopup({
						type: 'image',
						gallery: { enabled: true }
					});
					$('.has-popup-media').magnificPopup({
						type: 'inline',
						midClick: true
					});
				}, 100);
			}
		}
	},

	// Function to add a new portfolio item
	addPortfolioItem(newItem) {
		portfolioData.push(newItem);
		this.renderPortfolio();
	},

	// Function to get portfolio items by category
	getItemsByCategory(category) {
		return portfolioData.filter(item => item.category === category);
	}
};

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
	console.log('Portfolio script loaded');
	console.log('Portfolio data items:', portfolioData.length);
	
	const container = document.getElementById('portfolio-container');
	console.log('Portfolio container found:', !!container);
	
	if (container) {
		PortfolioManager.renderPortfolio();
		console.log('Portfolio rendered');
	} else {
		console.error('Portfolio container not found!');
	}
});

// Also try to render after a short delay in case there are timing issues
setTimeout(function() {
	console.log('Backup portfolio render attempt');
	const container = document.getElementById('portfolio-container');
	if (container && container.innerHTML.trim() === '<!-- Portfolio items will be dynamically generated here -->') {
		console.log('Portfolio still empty, retrying...');
		PortfolioManager.renderPortfolio();
	}
}, 1000); 