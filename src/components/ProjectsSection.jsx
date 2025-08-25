import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinCrypt: DeFi Lending Platform",
    description:
      "Engineered a DeFi lending platform with React.js, Express.js, and MongoDB, integrating multi-functional pages for loans, deposits, investments, and an NFT marketplace with real-time dashboards. Integrated MetaMask for secure cryptocurrency transactions, enabling decentralized lending, borrowing, and NFT trading. Deployed secure, gas-efficient Ethereum smart contracts in Solidity using Hardhat.",
    image: "/projects/project1.png",
    tags: ["React.js", "Express.js", "MongoDB", "Solidity", "Hardhat", "Ethereum", "MetaMask", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/aditiisinha/DeFi-Lending",
  },
  {
    id: 2,
    title: "E-retail Management Platform with CI/CD Pipeline",
    description:
      "Architected a secure two-tier e-commerce platform with containerized React frontend and Node.js/Express backend, integrating user authentication. Developed a full product catalog management system (CRUD) via RESTful APIs, tested with Postman. Automated AWS deployment with Terraform and Jenkins CI/CD for Docker builds and infrastructure provisioning.",
    image: "/projects/project2.jpeg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "AWS", "Terraform", "Jenkins"],
    demoUrl: "#",
    githubUrl: "https://github.com/aditiisinha/e-dashboard",
  },
  {
    id: 3,
    title: "BudgetWise: Dynamic Budget Tracking Platform",
    description:
      "Built a real-time finance platform using Next.js, Supabase, and PostgreSQL (via Prisma) for budgeting and expense tracking. Integrated AI-driven insights and automated budgeting with Inngest and ArcJet for secure, serverless automation. Designed a responsive UI using Tailwind CSS and Shadcn UI, improving user experience across devices.",
    image: "/projects/project3.jpeg",
    tags: ["Next.js", "Supabase", "Prisma", "PostgreSQL", "Inngest", "ArcJet", "Tailwind CSS", "Shadcn UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/aditiisinha/AI_Finance_Tracker",
  },
  {
    id: 4,
    title: "AI-Powered Image Generator",
    description:
      "Built a browser-based AI image generation platform using HTML, CSS, and JavaScript, enabling creation of high-quality, customizable visuals. Integrated AI APIs for text-to-image generation with real-time rendering, downloads, and advanced features like prompt customization, style selection, and resolution control.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript", "AI APIs", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/aditiisinha/ai-image-generator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aditiisinha"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
