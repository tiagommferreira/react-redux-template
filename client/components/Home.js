import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions';


class Home extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        const { posts } = this.props;

        if(!posts.length) {
            return(
                <div>
                    Home Page
                </div>
            );
        }
        else {
            const mappedPosts = posts.map(post => <div key={post._id}><h2>{post.title}</h2><h3>{post.content}</h3></div>);
            return(
                <div>
                    {mappedPosts}
                </div>
            );
        }        
    }

};

function mapStateToProps(store) {
    return { 
        posts: store.posts.posts 
    };
}

export default connect(mapStateToProps)(Home)
