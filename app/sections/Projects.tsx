import SectionHeader from '../components/SectionHeader'
import { gradients } from '../mocks/gradients'
import Card from '../components/Card'
import { projects } from '../mocks/projects';

const Projects = () => {
    return (
        <section id='projects' className='section py-20'>
            <SectionHeader label='Projects' gradient={gradients[1]} />
            <div
                className="
                    z-50
                    grid 
                    gap-8
                    grid-cols-1 
                    lg:grid-cols-2
                    xl:grid-cols-3 
                    3xl:grid-cols-4 
                    lg:gap-x-20 
                    justify-items-center 
                    pt-16
                "
            >
                {
                    projects.map((project, index) => {
                        return <Card key={'project-' + index} project={project} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects