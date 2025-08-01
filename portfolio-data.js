// Portfolio Data Configuration
// Add new portfolio items by adding objects to this array
// Each item should follow the structure shown in the examples below

const portfolioData = [
	{
	  id: "shopify-store",
	  category: "f-ecommerce",
	  displayCategory: "eCommerce",
	  title: "01 Custom Shopify Store",
	  role: "Shopify Developer",
	  techStack: "React, JS, HTML, CSS, TS, Shopify",
	  image: "images/works/projectOne.webp",
	  link: "https://by39tk-uv.myshopify.com/",
	  icon: "fa-brands fa-chrome",
	  description: "Shopify Developer",
	},
	{
	  id: "gdsc-plm-website",
	  category: "f-portfolio-community",
	  displayCategory: "Portfolio & Community",
	  title: "02 GDSC PLM Website",
	  role: "Web Developer",
	  techStack: "Next.js, Tailwind, Shadcn",
	  image: "images/works/projectTwo.webp",
	  link: "https://www.gdsc-plm.org/",
	  icon: "fa-brands fa-chrome",
	  description: "Web Developer",
	},
	{
	  id: "grievdesk",
	  category: "f-webapps",
	  displayCategory: "Web Apps",
	  title: "03 GrievDesk",
	  role: "Full Stack Developer",
	  techStack: "React, CSS, Spring Boot",
	  image: "images/works/projectThree.webp",
	  link: "https://plmce-grievdesk.web.app/",
	  icon: "fa-brands fa-chrome",
	  description: "Full Stack Developer",
	},
	{
	  id: "conso-compiler",
	  category: "f-webapps",
	  displayCategory: "Web Apps",
	  title: "04 Conso Programming Language and Compiler",
	  role: "Full Stack Developer",
	  techStack: "React, CSS, Python, FastAPI, WebSockets",
	  image: "images/works/projectFour.webp",
	  link: "https://conso-frontend-v2.onrender.com/",
	  icon: "fa-brands fa-chrome",
	  description: "Full Stack Developer",
	},
	{
	  id: "aceframe",
	  category: "f-webapps",
	  displayCategory: "Web Apps",
	  title: "05 AceFrame",
	  role: "Web Developer",
	  techStack: "Next.js, Tailwind",
	  image: "images/works/projectFive.webp",
	  link: "https://aceframe.web.app/",
	  icon: "fa-brands fa-chrome",
	  description: "Web Developer",
	},
	{
	  id: "khanjee",
	  category: "f-ecommerce f-wordpress",
	  displayCategory: "eCommerce",
	  title: "06 KhanJee | Authentic Pakistani Cuisine",
	  role: "WordPress Developer",
	  techStack: "JS, PHP, HTML, CSS, WordPress",
	  image: "images/works/projectSix.webp",
	  link: "https://khanjeecanada.com/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
	{
	  id: "gdsc-plm-wp",
	  category: "f-portfolio-community",
	  displayCategory: "Portfolio & Community",
	  title: "07 GDSC PLM",
	  role: "WordPress Developer",
	  techStack: "HTML, CSS, JS, WordPress, PHP",
	  image: "images/works/projectTwo.webp",
	  link: "https://www.gdsc-plm.org/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
	{
	  id: "the-ikigai",
	  category: "f-wordpress",
	  displayCategory: "WordPress",
	  title: "08 The Ikigai",
	  role: "WordPress Developer",
	  techStack: "HTML, CSS, JS, WordPress, PHP",
	  image: "images/works/ikigai.webp",
	  link: "https://theikigai.co/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
	{
	  id: "jamachi-plastic-surgery",
	  category: "f-wordpress",
	  displayCategory: "WordPress",
	  title: "09 Jamachi Plastic Surgery",
	  role: "WordPress Developer",
	  techStack: "HTML, CSS, JS, WordPress, PHP",
	  image: "images/works/jamichi.webp",
	  link: "https://jamachi.com.au/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
	{
	  id: "ems-innovations",
	  category: "f-wordpress",
	  displayCategory: "WordPress",
	  title: "10 EMS Innovations",
	  role: "WordPress Developer",
	  techStack: "HTML, CSS, JS, WordPress, PHP",
	  image: "images/works/ems.webp",
	  link: "https://emsinnovations.com.au/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
	{
	  id: "dark-mode-dashboard",
	  category: "f-portfolio-community",
	  displayCategory: "Portfolio & Community",
	  title: "11 Dark‑Mode React Admin Dashboard",
	  role: "Lead Front‑End Developer & DevOps Engineer",
	  techStack: "React, Next.js, TS",
	  image: "images/works/reactdashboard.webp",
	  link: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
	  icon: "fa-brands fa-chrome",
	  description: "Lead Front‑End Developer & DevOps Engineer",
	},
	{
	  id: "personal-branding-website",
	  category: "f-wordpress f-portfolio-community",
	  displayCategory: "WordPress",
	  title: "12 Personal Branding Website Design",
	  role: "Lead Web Designer & Front‑End Developer",
	  techStack: "JavaScript, CSS, HTML, WordPress, PHP",
	  image: "images/works/igor.webp",
	  link: "https://igorvainshtein.com/",
	  icon: "fa-brands fa-chrome",
	  description: "Lead Web Designer & Front‑End Developer",
	},
	{
	  id: "b2b-consulting-website",
	  category: "f-wordpress",
	  displayCategory: "WordPress",
	  title: "13 B2B Consulting Website Design",
	  role: "Lead Web Designer & Front‑End Developer",
	  techStack: "JavaScript, CSS, HTML, WordPress, PHP",
	  image: "images/works/priotize.webp",
	  link: "https://priorityib.com.au/",
	  icon: "fa-brands fa-chrome",
	  description: "Lead Web Designer & Front‑End Developer",
	},
	{
	  id: "nonprofit-advocacy",
	  category: "f-wordpress",
	  displayCategory: "WordPress",
	  title: "14 NGO Web Design & Development",
	  role: "Lead Web Designer & WordPress Developer",
	  techStack: "JavaScript, CSS, HTML, WordPress, PHP",
	  image: "images/works/australia.webp",
	  link: "https://aidn.org.au/",
	  icon: "fa-brands fa-chrome",
	  description: "Lead Web Designer & WordPress Developer",
	},
	{
	  id: "the-mehfil",
	  category: "f-ecommerce f-wordpress",
	  displayCategory: "eCommerce",
	  title: "15Elegant Event Services Website",
	  role: "WordPress Developer",
	  techStack: "JavaScript, CSS, HTML, WordPress, PHP",
	  image: "images/works/mehfil.webp",
	  link: "https://themehfil.ca/",
	  icon: "fa-brands fa-chrome",
	  description: "WordPress Developer",
	},
  ];
  
  // Portfolio Management Functions
  const PortfolioManager = {
	// Function to generate tech stack HTML
	generateTechStack(techStack) {
	  if (Array.isArray(techStack)) {
		return techStack.map((tech) => `<li>${tech}</li>`).join("");
	  } else if (typeof techStack === "object") {
		return Object.entries(techStack)
		  .map(
			([key, values]) =>
			  `<li><strong>${key}:</strong> ${
				Array.isArray(values) ? values.join(", ") : values
			  }</li>`
		  )
		  .join("");
	  }
	  return "";
	},
  
	// Function to generate created with HTML
	generateCreatedWith(createdWith) {
	  return createdWith.map((tool) => `<li>${tool}</li>`).join("");
	},
  
	// Function to generate portfolio item HTML
	generatePortfolioItem(item) {
	  const isImagePopup = item.isImagePopup;
	  const hasPopup = !isImagePopup;
	  const popupClass = isImagePopup ? "has-popup-image" : "has-popup-media";
	  const popupHref = isImagePopup ? item.popupImage : `#${item.id}`;
  
	  let popupContent = "";
	  if (hasPopup) {
		const techStackHTML = item.techStack
		  ? `
				  <ul>
					  <p>Tech Stack:</p>
					  <li>${item.techStack}</li>
				  </ul>
			  `
		  : "";
  
		const createdWithHTML = item.createdWith
		  ? `
				  <ul>
					  <p>Created with:</p>
					  ${this.generateCreatedWith(item.createdWith)}
				  </ul>
			  `
		  : "";
  
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
							  ${
				  item.link
					? `
								  <a href="${item.link}" target="_blank" rel="noopener" class="btn">
									  <span class="animated-button"><span>${
					  item.linkText || "View Project"
					}</span></span>
									  <i class="icon fas fa-chevron-right"></i>
								  </a>
							  `
					: ""
				}
						  </div>
					  </div>
				  </div>
			  `;
	  }
  
	  return `
			  <div class="box-col ${item.category}">
				  <div class="box-item">
					  <div class="image">
						  <a href="${popupHref}" class="${
		item.isImagePopup ? "has-popup-image" : "has-popup-link"
	  }">
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
						  <a href="${popupHref}" class="name ${
		item.isImagePopup ? "has-popup-image" : "has-popup-link"
	  }">${item.title}</a>
						  <div class="info-text">
							  <div class="project-role">${item.role}</div>
							  <div class="project-tech">${item.techStack}</div>
						  </div>
					  </div>
					  ${popupContent}
				  </div>
			  </div>
		  `;
	},
  
	// Function to render all portfolio items
	renderPortfolio() {
	  const container = document.getElementById("portfolio-container");
	  if (container) {
		container.innerHTML = portfolioData
		  .map((item) => this.generatePortfolioItem(item))
		  .join("");
  
		// Reinitialize any filtering/isotope after content is loaded
		if (typeof $ !== "undefined" && $.fn.isotope) {
		  setTimeout(() => {
			$(container).isotope("reloadItems").isotope();
		  }, 100);
		}
  
		// Reinitialize magnific popup for the new content
		if (typeof $ !== "undefined" && $.fn.magnificPopup) {
		  setTimeout(() => {
			$(".has-popup-image").magnificPopup({
			  type: "image",
			  gallery: { enabled: true },
			});
			$(".has-popup-media").magnificPopup({
			  type: "inline",
			  midClick: true,
			});
			// For the main portfolio items using has-popup-link directly
			$(
			  ".has-popup-link:not(.has-popup-media):not(.has-popup-image)"
			).magnificPopup({
			  type: "inline",
			  midClick: true,
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
	  return portfolioData.filter((item) => item.category.includes(category));
	},
  };
  
  // Initialize portfolio when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
	console.log("Portfolio script loaded");
	console.log("Portfolio data items:", portfolioData.length);
  
	const container = document.getElementById("portfolio-container");
	console.log("Portfolio container found:", !!container);
  
	if (container) {
	  PortfolioManager.renderPortfolio();
	  console.log("Portfolio rendered");
	} else {
	  console.error("Portfolio container not found!");
	}
  });
  
  // Also try to render after a short delay in case there are timing issues
  setTimeout(function () {
	console.log("Backup portfolio render attempt");
	const container = document.getElementById("portfolio-container");
	if (
	  container &&
	  container.innerHTML.trim() ===
		"<!-- Portfolio items will be dynamically generated here -->"
	) {
	  console.log("Portfolio still empty, retrying...");
	  PortfolioManager.renderPortfolio();
	}
  }, 1000);
  