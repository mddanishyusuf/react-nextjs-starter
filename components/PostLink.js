import Link from 'next/link'

const PostLink = (props) => (
		<Link as={`/post/${props.data.id}`} href={`/post?id=${props.data.id}`}>
			<a>{props.data.name}</a>
		</Link>
)

export default PostLink