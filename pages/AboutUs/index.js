import Link from 'next/link';

function AboutPage() {
    return (
        <>
            <ul>

                <li>
                    <Link href='AboutUs/1'>Yash</Link>
                </li>
                <li>

                    <Link href='AboutUs/2'>vaibhav</Link>
                </li>
                <li>
                    <Link href='AboutUs/3'>Suresh</Link>

                </li>
            </ul>
        </>
    )
}

export default AboutPage;