import { Box } from '@chakra-ui/react'

const Banner: React.FC = () => {
    return (
        <Box fontFamily={'Poppins'} bg='#3772FF' w='inherit' h={36.48} lineHeight='0.4' fontWeight={600} fontStyle={'normal'} fontSize={14} p={4} color='#FFFFFF'>
            Lorem Ipsum is simply dummy text of the printing
        </Box>
    );
}

export default Banner;