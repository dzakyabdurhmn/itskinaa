import Link from 'next/link'
import { Heading, Box, Image, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <div className="flex mb-10">
    <Link className="text-violet-400  " href="/works">
      Works
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
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
