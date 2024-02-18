import { Container, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Button from '../components/flower-button'
import dynamic from 'next/dynamic'

import { description, me } from '../lib/info'

const Kina = dynamic(() => import('../components/tiktok'), { ssr: false })

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {me}
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          i'ts me
        </Heading>
        <p>{description}</p>

        <div className="mt-7">
          <Heading className="ml-2" as="h3" variant="section-title">
            top posts
          </Heading>
          <div className="mt-6 p-2">
            <Card name={'hakkiii'} key={1} slug={'ga ada'} />
          </div>
        </div>

        <div className="mt-7">
          <Heading className="ml-2" as="h3" variant="section-title">
            tiktok profie
          </Heading>
          <Kina />
        </div>
      </Section>
      {/* fotter */}
      <a href="https://wa.me/6289618683070?text=Halo%20,%0A%0ASemoga%20pesan%20ini%20menemukan%20Anda%20dalam%20keadaan%20sehat%20dan%20bahagia.%0A%0ASaya%20%5BNama%20Anda%5D%20dari%20%5BNama%20Brand/Perusahaan%20Anda%5D.%20Kami%20%5Bdeskripsi%20singkat%20tentang%20brand/perusahaan%20Anda%5D.%0A%0AKami%20terkesan%20dengan%20konten%20dan%20engagement%20Anda%20di%20%5Bplatform%20media%20sosial">
        <Button w="w-full">business inquiries.</Button>
      </a>
    </Container>
  </Layout>
)

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Card({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/post/${slug}`}
        className="w-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3  py-4"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {/* <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense> */}
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
