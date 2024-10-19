const projectGroup = [
    {

      courses: [
        {
          title: "Book_marker",
          description: "Website for saving your website links",
          image: "../../assets/images/ProjectF/bookmarker.png",
          buttons: [{ text: "Learn More", type: "primary" }],
          link: 'https://ali-ashraf-510.github.io/book-marker/'
        },
        {
          title: "Weather App",
          description: "Website to show current weather in all countries",
          image: "../../assets/images/ProjectF/weatherApp.png",
          buttons: [{ text: "Learn More", type: "primary" }],
          link: 'https://ali-ashraf-510.github.io/weather-website/'
        },
        {
          title: "Mr Khaled",
          description: "Teacher website to learn English",
          image: "../../assets/images/ProjectF/c4.jpg",
          buttons: [{ text: "Learn More", type: "primary" }],
          link: 'https://ali-ashraf-510.github.io/mr-khaled/'
        }
      ]
    }
  ];

  function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear the container

    if (projectGroup.length > 0) {
      projectGroup.forEach(group => {
        const section = document.createElement('section');
        section.innerHTML = `
          <div class="courses-container container">
            <div class="row">
            ${group.courses.map(course => `
              <div class="col-md-4 mt-1">
                <div class="course-card">
                  <img src="${course.image}" alt="${course.title}">
                  <h3>${course.title}</h3>
                  <p>${course.description}</p>
                  <div class="btn-container text-center">
                    <a href="${course.link}" class="btn btn-primary" role="button">${course.buttons[0].text}</a>
                  </div>
                </div>
              </div>
            `).join('')}
            </div>
          </div>
        `;
        container.appendChild(section);
      });
    } 
  }

  function showLoading() {
    const container = document.getElementById('projects-container');
    container.innerHTML = `
      <div class="d-flex justify-content-center align-items-center min-vh-100" style="background-color: #f8f9fa;">
        <div class="text-center">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-3 text-muted" style="font-family: 'Arial', sans-serif; font-size: 1.2rem;">Loading, please wait...</p>
        </div>
      </div>
    `;
  }
  // Store project in localStorage after adding
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));


  document.addEventListener('DOMContentLoaded', function() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <h3>${project.projecttype}: ${project.courses[0].title}</h3>
        <p>${project.courses[0].description}</p>
      `;
      container.appendChild(projectElement);
    });
  });
  // Simulate loading state for 2 seconds, then render projects
  showLoading();
  setTimeout(renderProjects, 2000);