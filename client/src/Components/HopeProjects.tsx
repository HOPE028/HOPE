import ProjectsGrid from './ProjectsGrid'

const projectsData = [
  {
    title: 'Project 1',
    description: 'This is the first project.',
    githubLink: 'https://github.com/user/repo1',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description: 'This is the second project.',
    githubLink: 'https://github.com/user/repo2',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'This is the third project.',
    githubLink: 'https://github.com/user/repo3',
    image: 'https://via.placeholder.com/150',
  },
]

function HopeProjects() {
  return (
    <div className='Projects'>
      <ProjectsGrid projects={projectsData} />
    </div>
  )
}

export default HopeProjects
