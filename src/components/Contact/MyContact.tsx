import Title from "../Title"
import ContactInfo from "./Components/ContactInfo"
import MesssageInputField from "./Components/MesssageInputField"


const MyContact = () => {
    return (
        <div className=" max-w-5xl mx-auto">
            <Title title="Contact" subtitle="Have a project in mind or just want to say hello? Feel free to reach out!" />
            <div className="md:grid md:grid-cols-2 md:gap-10">
                <MesssageInputField />
                <ContactInfo />
            </div>
        </div>
    )
}

export default MyContact
