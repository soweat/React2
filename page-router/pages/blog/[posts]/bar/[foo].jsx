import { useRouter } from "next/router"

export default function Foo() {
    const router = useRouter()
    const { foo, id, name, posts } = router.query;
    console.log({ foo, id, name, posts})
    return (
        <>
            <h1>posts : {posts}</h1>
            <h1>foo : {foo}</h1>
            <h1>id : {id}</h1>
            <h1>name : {name}</h1>
        </>
    )
}