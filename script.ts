
// Interface to define the structure of the resume data
interface ResumeData {
    name: string;
    email: unknown;
    phone: unknown;
    degree: string;
    university: string;
    inter: string;
    college: string;
    matric : string;
    school: string;
    skills: string;
    Experience: string;
  }
  
//   +

//   +
  // Get form and output element references
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  
  // Function to capture form input and generate the resume
  function generateResume(event: Event): void {
    event.preventDefault();
  
    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const university = (document.getElementById("university") as HTMLInputElement).value;
    const inter = (document.getElementById("inter") as HTMLInputElement).value;
    const college = (document.getElementById("college") as HTMLInputElement).value;
    const matric = (document.getElementById("matric")as HTMLInputElement).value;
    const school = (document.getElementById("school")as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const Experience = (document.getElementById("experience")as HTMLInputElement).value;
  
    // Create resume data object
    const resumeData : ResumeData = {
    name,
    email,
    phone,
    degree,
    university,
    inter,
    college,
    matric ,
    school,
    skills,
    Experience
    };
  
    // Generate and display the resume
    displayResume(resumeData);
  }
  
  // Function to display the resume data
  function displayResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
      <h1>${data.name}</h1>
      <p>Email: ${data.email}</p>
      <p>Contact: ${data.phone}</p>
      <h3>Education</h3>
      <p>${data.degree} from ${data.university}</p>
      <p>intermediate in ${data.inter} from ${data.college}</p>
      <p>matriculated in ${data.matric} from ${data.school}</p>
      <h3>Work Experience</h3>
      <p>${data.Experience}</p>
      <h3>Skills</h3>
      <ul>
        ${data.skills}
      </ul>
    `;
  }
  
  // Add event listener for form submission
form.addEventListener("submit", generateResume);
  