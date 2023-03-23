import Project from './Project'

type ProjectData = {
  title: string
  description: string
  githubLink: string
  image: string
}

type ProjectsGridProps = {
  projects: ProjectData[]
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className='projects-grid'>
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          image={''}
        />
      ))}
    </div>
  )
}

export default ProjectsGrid
