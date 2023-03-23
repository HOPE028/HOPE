import ProjectsGrid from './ProjectsGrid'
import './Projects.css'

const projectsData = [
  {
    title: 'Country Compare-er',
    description:
      'Country Compare-er lets you compare economic, demographic, social, and military statistics of different countries for free. It gathers data from reliable sources like the World Bank and the United Nations and is part of the HOPE open-source project.',
    githubLink: 'https://country-compare-er.netlify.app/',
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
