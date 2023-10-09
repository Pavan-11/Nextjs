import { useRouter } from "next/router";

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];


const AboutUsPage = () => {
    const router = useRouter();
    const {id} = router.query;

    const getTeamMember = () => {
        const memberId = parseInt(id);

        const teamMember = details.find(member => member.id === memberId);
        return teamMember;
    };

    const teamMember = getTeamMember();

    return (
        <div>
            {teamMember ? (
                <div>
                    <h1>{teamMember.name}</h1>
                    <p>{teamMember.role}</p>
                </div>
            ) : (
                <p>Developer doesn't exist</p>
            )}
        </div>
    );
}


export default AboutUsPage;

