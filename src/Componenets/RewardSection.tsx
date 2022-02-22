import { Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CustomLink from "./CustomLink";


const RewardSection: React.FC = () => {
    const prop = {
        rewards: '$ 0.26231428',
        h: 25.08,
        w: 79.66
    }
    return (
        <div className="rewardMain">
            <Heading fontFamily='Poppins' className="rh" size={'sm'}>
                Your Rewards
            </Heading>
            <Text id="reward">{prop.rewards}</Text>
            <Wrap className="wrapper" spacing='7px'>
                <WrapItem>
                    <Center borderRadius={'11'} w={prop.w} h={prop.h} bg='#353945'>
                        $40 AVAX
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center borderRadius={'11'} w={prop.w} h={prop.h} bg='#353945'>
                        $10 BNB
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center borderRadius={'11'} w={prop.w} h={prop.h} bg='#353945'>
                        $210 BTC
                    </Center>
                </WrapItem>
            </Wrap>
            <CustomLink/>
        </div>
    );
}

export default RewardSection;