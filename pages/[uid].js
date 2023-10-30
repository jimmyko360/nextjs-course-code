export default function UserIdPage(props) {
    return <h1>user ID: {props.uid}</h1>
}

export async function getServerSideProps(context) {
    const { params } = context;

    const uid = params.uid

    return {
        props: {
            uid: uid
        }
    }
}