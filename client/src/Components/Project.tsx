type ProjectProps = {
  title: string
  description: string
  githubLink: string
  image: string
}

const Project = ({ title, description, githubLink, image }: ProjectProps) => {
  return (
    <div className='project-card'>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink}>App Link</a>
    </div>
  )
}

export default Project
