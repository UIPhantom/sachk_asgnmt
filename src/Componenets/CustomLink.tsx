import { Button, Link } from "@chakra-ui/react";

const CustomLink: React.FC = () => {
    return (
        <Button id="linkbtn" borderRadius='10' h='36px' w='142.54px'>
        <Link id="link" ><span id="linkIcon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
        <path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
        </svg></span>Custom link</Link>
         </Button>
     );
}

export default CustomLink;