import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box className="mt-10" align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} pp semangka. All Rights Reserved.
    </Box>
  )
}

export default Footer
