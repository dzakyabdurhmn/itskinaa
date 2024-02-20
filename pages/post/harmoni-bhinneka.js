import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>harmoni bhinneka</Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center className="text-center">
          Menjelajahi Harmoni dalam Keberagaman: Memaknai Bhinneka Tunggal Ika
          di Era Modern
        </Center>
      </Heading>
      <p className="flex flex-col space-y-2">
        Harmoni keberagaman masyarakat indonesia memiliki tiga macam dan masing
        masing penjelasannya yaitu :
      </p>
      <List ml={4} my={4}>
        <ListItem className='-ml-5'>
          <Meta>1. Harmoni dalam keberagaman sosial budaya:</Meta>
          <span>
            Keberagaman yang berasal dari masyarakatnya seperti perbedaan
            penghasilan, mata pencarian, Iklim, dan juga perbedaan warna kulit,
            contoh seperti di daerah pergunungan cenderung ke warna kuning
            langsat, di daerah pantai cenderung berwarna kulit gelap. Ini yang
            membuat perbedaan pada keberagaman sosial di indonesia.
          </span>
          <Meta>2. Harmoni dalam keberagaman ekonomi pada masyarakat :</Meta>
          <span>
            Keberagaman yang berasal dari kondisi perekonomian masyarakat di
            indonesia yang sesuai dengan penghasilan, pekerjaan, jabatan maupun
            latar belakang, maka dari itu keharmonisan harus dijaga.
          </span>
          <Meta>3. harmoni dalam keberagaman gender dalam masyarakat :</Meta>
          <span>
            Yaitu ada gender / jenis kelamin suatu sifat atau hal yang melekat
            pada laki laki atau perempuan.
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
