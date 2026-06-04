export interface Certification {
  name: string;
  provider: string; // Placeholder in CV: "Add Provider"
  isCustomized: boolean;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  metrics: string[]; // E.g., custom outcomes
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  graduationYear: string; // Placeholder in CV: "Add Year"
  cgpa: string; // Placeholder in CV: "Add CGPA"
  isCustomized: boolean;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string; // Placeholder in CV
  leetcode: string; // Placeholder in CV
  codechef: string; // Placeholder in CV
  hackerrank: string; // Placeholder in CV
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  summary: string;
  education: Education;
  skills: {
    programming: string[];
    aiMl: string[];
    frameworks: string[];
    development: string[];
    databases: string[];
    tools: string[];
  };
  projects: Project[];
  certifications: Certification[];
  achievements: {
    title: string;
    description: string;
    isCustomized: boolean;
  }[];
  socials: SocialLinks;
  profilePicture: string;
}

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Yegireddy Chandu",
  title: "AI/ML Engineer",
  location: "Kakinada, Andhra Pradesh, India",
  summary: "Aspiring AI/ML engineer and B.Tech CSE (AI/ML) student with interest in building practical machine learning systems, NLP applications, and computer vision solutions. Familiar with Python, machine learning fundamentals, and real-world AI workflows. Seeking opportunities to apply engineering skills, problem-solving ability, and implementation-focused learning in software and AI development roles.",
  profilePicture: "/src/assets/images/chandu_profile_photo_1780551829676.png",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering (AI/ML)",
    institution: "Kakinada Institute of Engineering and Technology",
    location: "Andhra Pradesh, India",
    graduationYear: "", // Placeholder in CV: "Add Year"
    cgpa: "", // Placeholder in CV: "Add CGPA"
    isCustomized: false,
  },
  skills: {
    programming: ["Python", "C++", "Java"],
    aiMl: ["Machine Learning", "NLP", "Computer Vision"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn"],
    development: ["Flask", "FastAPI", "REST APIs", "Git/GitHub"],
    databases: ["MySQL", "MongoDB"],
    tools: ["VS Code", "Jupyter Notebook", "Linux", "Overleaf"]
  },
  projects: [
    {
      name: "AI Resume Screening System",
      description: "Developed an NLP-based resume screening application using machine learning techniques to classify and rank resumes based on job descriptions. Implemented preprocessing pipelines, feature extraction, and backend APIs for prediction support.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-Learn", "Feature Extraction", "REST APIs"],
      metrics: ["NLP pipeline for parsing resumes", "Automated resume-to-job pairing with scoring"]
    },
    {
      name: "Computer Vision Detection System",
      description: "Built a deep learning-based image classification system using TensorFlow/PyTorch and OpenCV. Improved model performance using augmentation and preprocessing techniques.",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "Python", "Data Augmentation", "Image Processing"],
      metrics: ["Deep learning image classification engine", "Performance gains via custom preprocessing"]
    },
    {
      name: "Full Stack AI Application",
      description: "Designed a web-based AI application integrating frontend interfaces with backend APIs for inference and data processing using Flask/FastAPI.",
      technologies: ["Flask", "FastAPI", "Python", "Frontend Integrations", "APIs", "Model Inference"],
      metrics: ["Full-stack interface with clean api", "FastAPI routing for dynamic predictions"]
    }
  ],
  certifications: [
    {
      name: "Machine Learning Certification",
      provider: "", // Placeholder in CV: "Add Provider"
      isCustomized: false,
    },
    {
      name: "Deep Learning / NLP Certification",
      provider: "", // Placeholder in CV: "Add Provider"
      isCustomized: false,
    },
    {
      name: "Python / Data Science Certification",
      provider: "", // Placeholder in CV: "Add Provider"
      isCustomized: false,
    }
  ],
  achievements: [
    {
      title: "Coding Profiles",
      description: "", // Placeholder in CV: "Add LeetCode / CodeChef / HackerRank profiles"
      isCustomized: false,
    },
    {
      title: "GitHub Repositories",
      description: "", // Placeholder in CV: "Add GitHub repositories and deployment links"
      isCustomized: false,
    },
    {
      title: "Hackathons & Technical Achievements",
      description: "", // Placeholder in CV: "Add hackathon participation or technical achievements"
      isCustomized: false,
    }
  ],
  socials: {
    email: "23b21a42b3@kietgroup.com",
    linkedin: "https://linkedin.com/in/chandu-yegireddy-0641a8410",
    github: "", // Placeholder in CV
    leetcode: "", // Placeholder in CV
    codechef: "", // Placeholder in CV
    hackerrank: "", // Placeholder in CV
  }
};
