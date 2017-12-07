import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Content = (postTitle) => (
	<div>
		<h1>{postTitle.show.name}</h1>
		<p>This is the blog post content.</p>
	</div>
)

const Post = (props) => (
	<div>
		<Layout>
			<h1>{props.show.name}</h1>
			<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
			<img src={props.show.image.medium}/>
		</Layout>
	</div>
)

Post.getInitialProps = async function(context) {
	const {id} = context.query
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const show = await res.json()

	console.log(`fetched show: ${show.name}`)

	return {show}
}

export default Post