type ProjectProps = {
  title: string
  description: string
  githubLink: string
}

const Project = ({ title, description, githubLink }: ProjectProps) => {
  return (
    <div className='project-card'>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink}>GitHub Link</a>
    </div>
  )
}

export default Project
