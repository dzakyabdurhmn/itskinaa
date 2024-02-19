import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Post } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        posts.
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Post
            group="Sosial Budaya"
            id="harmoni-bhinneka"
            title="Dekonstruksi Harmoni"
            thumbnail={thumbInkdrop}
          >
            Menafsir ulang Bhinneka Tunggal Ika dalam Pluralitas Sosial,
            Ekonomi, dan Gender Era Kontemporer
          </Post>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
