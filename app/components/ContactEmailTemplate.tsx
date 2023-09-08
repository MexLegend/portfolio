import { Body, Container, Head, Heading, Hr, Html, Img, Section, Tailwind, Text } from '@react-email/components';
import { FC, ReactElement } from 'react'

interface ContactEmailTemplateProps {
  email: string;
  message: string;
  firstName: string;
  lastName: string;
}

const ContactEmailTemplate: FC<Readonly<ContactEmailTemplateProps>> = ({ email, message, firstName, lastName }): ReactElement => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#e5e5e5] my-auto mx-auto font-sans p-5 border-solid border-x-0 border-b-0 border-t-4 border-t-[#2e89ff]">
          <Container className="bg-white rounded my-[40px] mx-auto p-[30px] w-full max-w-[600px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://res.cloudinary.com/devmexsoft/image/upload/v1694205818/Portfolio/WhatsApp_Image_2023-09-04_at_10.36.13_AM_1_labdyv.png`}
                width="80"
                height="80"
                alt="Profile Avatar"
                className="my-0 mx-auto rounded-full overflow-hidden"
              />
            </Section>
            <Heading className="text-[#2e89ff] text-lg font-normal leading-normal text-center p-0 my-[30px] mx-0">
              Hello, Im {firstName} {lastName}:
            </Heading>
            <strong className='text-base'>Email:</strong>
            <Text className="text-black text-[15px] leading-normal font-normal">
              {email}
            </Text>
            <strong className='text-base'>Message:</strong>
            <Text className="text-black text-[15px] leading-normal font-normal">
              {message}.
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This message was sent from rodolfolara.vercel.app{" "}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactEmailTemplate;