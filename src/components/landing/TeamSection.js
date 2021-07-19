import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"
import Input from "@material-tailwind/react/Input";

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Departamentos">
                    Estos son los Departamentos que tenemos disponible:
                </Title>

            <div className="form-check">

            <Dropdown
            color="lightBlue"
            placement="bottom-start"
            buttonText="Región"
            buttonType="link"
            size="300px"
            rounded={true}
            block={false}
            ripple="dark"
        >
            
            <DropdownLink
                href="#"
                
                ripple="light"
                onClick={(e) => e.preventDefault()}
            >
               Coquimbo
            </DropdownLink>
            <DropdownItem color="lightBlue" ripple="light">
                Metropolitana de Santiago
            </DropdownItem>
            <DropdownItem color="lightBlue" ripple="light">
                Valparaíso
            </DropdownItem>
            <DropdownItem color="lightBlue" ripple="light">
               La Araucanía 
            </DropdownItem>

            <DropdownItem color="lightBlue" ripple="light">
                Los Lagos
            </DropdownItem>
        </Dropdown>  

<Dropdown
            color="lightBlue"
            placement="bottom-start"
            buttonText="Habitaciones"
            buttonType="link"
            size="300px"
            rounded={true}
            block={false}
            ripple="dark"
        >
            
            <DropdownLink
                href="#"
                
                ripple="light"
                onClick={(e) => e.preventDefault()}
            >
               1
            </DropdownLink>
            <DropdownItem color="lightBlue" ripple="light">
                2
            </DropdownItem>
            <DropdownItem color="lightBlue" ripple="light">
               3
            </DropdownItem>
           
        </Dropdown>  

        <Input
            type="date"
            color="lightBlue"
            size="s"
            outline={false}
            placeholder="Check In"
        />

        <Input
            type="date"
            color="lightBlue"
            size="s"
            outline={false}
            placeholder="Check Out"
        />

        

            </div>          
    
                <div className="flex flex-wrap">
               
                    <TeamCard
                        img={Image1}
                        name="Ryan Tompson"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
