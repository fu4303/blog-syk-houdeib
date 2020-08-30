import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to Syknapse blog!</h1>

        <div className="description">
          <p>A blog by Syk Houdeib</p>
          <p>
            This is blog about front-end development, late career change, learning to program, and becoming a developer.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
