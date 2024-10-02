export default function fooId(props) {
    console.log(props)
    return(
        <h1>
            Foo {props.params.fooId} / {props.searchParams.country}
        </h1>
    )
}