import Layout from '../components/Layout'
import PostLink from '../components/PostLink'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
	<Layout>
		<p>My Blog Posts</p>
		<ul>
			{props.shows.map(({show}) => (
				<li key={show.id}>
					<PostLink data={show} />
				</li>
			))}
		</ul>
	    <style jsx>{`
	      h1, a {
	        font-family: "Arial";
	      }

	      ul {
	        padding: 0;
	      }

	      li {
	        list-style: none;
	        margin: 5px 0;
	      }

	      a {
	        text-decoration: none;
	        color: blue;
	      }

	      a:hover {
	        opacity: 0.6;
	      }
	    `}</style>
	</Layout>
)

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()
	console.log(`Show data fetched, Count: ${data.length}`)

	return {
		shows:data
	}
}

export default Index