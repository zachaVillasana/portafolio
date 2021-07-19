import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Calidad garantizada">
                        En nuestra agencia contamos con la mejor calidad de departamentos para que puedas
                        encontrar tu real relajo.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="payment"
                        title="Pagos"
                    >
                      Aceptamos todo tipo de pagos.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="work_outline"
                        title="Te ayudamos a encontrar vuelos"
                    >
                       En nuestra agencia estamos asociados con aerolineas que nos ayudan a encontrar promociones de vuelos.

                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Sobre Nosotros</H4>
                        <LeadText color="blueGray">
                           ACERCA DE NOSOTROS
                        </LeadText>
                        <LeadText color="blueGray">
                          ACERCA DE NOSOTROS
                        </LeadText>
                    
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Contamos con un equipo increíble</H6>
                                <Paragraph color="blueGray">
                                   Nuestro equipo esta compuesto con personas capacitadas para brindarte la mejor atención
                                   y poder solucionar todas tus dudas.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
