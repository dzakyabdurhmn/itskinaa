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
      <Title>Sustainable Development Goals</Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center className="text-center">
          Sustainable Development Goals (SGDs)
        </Center>
      </Heading>
      <p className="flex flex-col space-y-2">
        now i'll tell you something important so today let's talk about SDG or
        Sustainable Development Goals (SGDs) di tahun 2030. nah hal ini tuh di
        rancang oleh PBB untuk mengakhiri suatu kemiskinan, mengurangi
        kesenjangan dan juga melindungi lingkungan menggunakan 17 tujuan dan
        juga 169 target. nah dari 17 tujuan tersebut nih yaa hal ini tuh ngebuat
        PBB memiliki beberapa kefokusan sustainability mengenai suatu
        pariwisata, lingkungan dan juga keberlanjutan
      </p>
      <List ml={4} my={4}>
        <ListItem className="-ml-5">
          <Meta>and for the frist one</Meta>
          <span>
            itu harusnya kita menggunakan air bersih sanitasi yang layak energi
            bersih dan juga terjangkau so kita harus menggunakan itu semua
            dengan efisien untuk menghemat air dan juga energi yaa
          </span>
          <Meta>2.Kota dan juga permukiman yang berkelanjutan:</Meta>
          <span>
            nahh contohnya itu adalah mendukung penanaman pohon dan juga kelola
            sampah sesuai dengan golongannya yaa
          </span>
          <Meta>3. konsumsi dan juga produksi</Meta>
          <span>
            konsumsi dan juga produksi yang bertanggung jawab untuk memastikan
            tidak ada limbah dan juga zat kimia yang dapat mencemarkan suatu
            lingkungan
          </span>
          <Meta>4. penanganan dan perubahan iklim </Meta>
          <span>
            penanganan dan perubahan iklim ekosistem lautan serta daratan demi
            dapat menjaga keberadaan habitat alami dari bumi
          </span>
        </ListItem>
      </List>
      <p>so guys itu adalah info yang berkaitan dengan stg.</p>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
