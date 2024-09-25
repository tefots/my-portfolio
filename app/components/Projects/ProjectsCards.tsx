interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
  }
  
export default function Portfolio({title, description, link, imageUrl}: ProjectItem ){

    const projects: ProjectItem[] = [
        {
          title: "Project One",
          description: "A stunning website design with a user-friendly interface.",
          imageUrl: "/images/project1.jpg", // Replace with actual image path
          tags: ["Web", "UI/UX", "Responsive"],
          link: "/project-one",
        },
        {
          title: "Project Three",
          description: "A captivating branding design that tells your story.",
          imageUrl: "/images/project3.jpg", // Replace with actual image path
          tags: ["Branding", "Graphic Design", "Storytelling"],
          link: "/project-three",
        },
      ];
      

    return(
        <>
        <div className="">


        </div>
        
        </>
    )
}  