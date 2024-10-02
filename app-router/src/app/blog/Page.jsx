export default function Blog(props) {
    console.log(props)
    return (

        <>
            <h1>Blog Page</h1>
            <h1>blog : {props.params.blog}</h1>
        </>
    )
}