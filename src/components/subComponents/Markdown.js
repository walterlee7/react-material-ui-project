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
        console.log(posts.length);

        let postArray = [];


        for (let i = 0; i < posts.length; i++) {

            await fetch(posts[i]).then(
                (response) =>
                    // console.dir(response),
                    response.text()
            ).then((text) => {
                // console.log('text before push ' + text);

                postArray.push(text)

            })

        }

        // posts.map((post) =>
        //     // console.log(post)
        //     fetch(post).then(
        //         (response) =>
        //             // console.dir(response),
        //             response.text()
        //     ).then((text) => {
        //         // console.log('text before push ' + text);

        //         postArray.push(text)

        //     })
        // )

        // console.log(this.state.marked);

        this.setState({
            marked: postArray
        })
    }

    render() {
        console.log(
            Array.isArray(this.state.marked)
        );

        console.log(this.state.marked);


        return (
            <div className="content">
                {/* <ReactMarkdown source={this.state.marked} /> */}

                {this.state.marked.map((post, index) => <ReactMarkdown source={post} key={index} />)}
            </div>
        )
    }
}

export default Markdown;