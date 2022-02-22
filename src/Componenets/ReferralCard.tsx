import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";


const ReferralCard: React.FC = () => {
    return (
            <Box>
                <div className="moneyIcon"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.2872" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_554)" />
                    <path d="M14.6318 10.2586H10.3784C9.5639 11.1896 8.10413 13.0769 8.10413 14.6595C8.10413 15.3742 8.42168 17.7064 12.5051 17.7064C16.5885 17.7064 16.906 15.3742 16.906 14.6595C16.906 13.0769 15.4463 11.1896 14.6318 10.2586Z" fill="white" />
                    <path d="M12.1668 9.58404V8.2299H12.8439V9.58404H14.4072L15.7614 6.87576H9.2493L10.6034 9.58404H12.1668Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_0_554" x1="-11.8473" y1="12.3044" x2="12.2872" y2="36.4389" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BBB5E2" />
                            <stop offset="1" stop-color="#9C92DF" />
                        </linearGradient>
                    </defs>
                </svg>
                </div>
                <Heading id="fee">12.5% of fee</Heading>
                <Text id="ref_title">Your Referral Link for xyz</Text>
                <Box className="copybox">
                    <Text id="reflink">https://unityexchange.design</Text>
                    <IconButton id="copybtn" aria-label="copy" bg={'none'} icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white" />
                        <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white" />
                    </svg>
                    } />
                </Box>
            </Box>
    );
}

export default ReferralCard;