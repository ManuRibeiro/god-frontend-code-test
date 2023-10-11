import { Flex, Link, Row, Spacer, Text } from "vcc-ui"
import { Car } from "../Types/car.interface"
import Image from "next/image"
import styles from "../../public/css/CarCard.module.css"
interface CardProps{
    car : Car
}

export function CarCard({car} : CardProps){
    return(
        <div className={styles.carWrapper}>
            <Text subStyle={"inline-link"}>{car?.bodyType}</Text>
            <Text subStyle={"emphasis"}>{car?.modelName}&nbsp;
                <Text variant={"bates"} subStyle={'inline-link'}>{car?.modelType}</Text>
            </Text>
            <Spacer />
            <Image src={car.imageUrl} alt={car.modelName} width="250" height="200"/>
            <Spacer />
            <Flex extend={{
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Row>
                    <Link href="https://www.volvocars.com/" arrow="right">
                        LEARN
                    </Link>
                    <Spacer/>
                    <Link href="https://www.volvocars.com/" arrow="right">
                        SHOP
                    </Link>
                </Row>
            </Flex>
        </div>

    )
}

