import Link from 'next/link'
import { Heading, Box, Image, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <div className="flex mb-10">
    <Link className="text-violet-400  " href="/works">
      post
    </Link>
    <span>
      <ChevronRightIcon />{' '}
    </span>
    <p display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </p>
  </div>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <div className="py-3 ">
    <p
      className="bg-[#34403A] text-[#9AE6B4] py-1 px-2 rounded-sm font-semibold text-sm "
      colorScheme="green"
      mr={2}
    >
      {children}
    </p>
  </div>
)
