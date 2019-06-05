import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

class Markdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marked: [],
        }
    }

    async componentWillMount() {
        const posts = [post1, post2, post3];
        let postArray = [];

        for (let i = 0; i < posts.length; i++) {
            await fetch(posts[i]).then(
                (response) => response.text()
            ).then((text) => {
                postArray.push(text)
            })
        }

        this.setState({
            marked: postArray
        })
    }

    render() {
        return (
            <div className="content">
                {this.state.marked.map((post, index) => <ReactMarkdown source={post} key={index} />)}
            </div>
        )
    }
}

export default Markdown;