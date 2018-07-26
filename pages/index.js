import React, { Component } from 'react';
import request from 'superagent';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
          photos: [],
          slideCount: 0
        }
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    componentWillMount() {
        this.fetchPhotos();
    }

    fetchPhotos() {
        let access_token = '3437315836.709c521.fb10cbf083df485b85c08d5b9ecc86fb'
        request
            .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token)
            .then((res) => {
            this.setState({
                photos: res.body.data
            })
        })
    }
    nextImage() {
        this.setState({ slideCount: this.state.slideCount + 1 })
    }

    previousImage() {
        this.setState({ slideCount: this.state.slideCount - 1 })
    }

    render() {
        const BackArrow = (props) => (
            <div onClick={props.previousImage} style={{fontSize: '2em', marginRight: '12px', height:'40px', width:'40px', background:'black'}}>

            </div>
        )

        const NextArrow = (props) => (
            <div onClick={props.nextImage} style={{fontSize: '2em', marginRight: '12px', height:'40px', width:'40px', background:'black'}}>

            </div>
        )
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: '30px'}}>
                {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
                {this.state.photos.map((photo, key) => {
                    if (this.state.photos.indexOf(photo) === this.state.slideCount) {
                        return (
                            <div key={photo.id} style={{margin: '0 auto'}}>
                                <img src={photo.images.standard_resolution.url} alt={photo.caption} style={{height:'600px'}}/>
                                <div style={{width:'600px', margin: '24px auto', fontStyle: 'italic'}}>
                                    {photo.caption !== null ? photo.caption.text : ''}
                                </div>
                            </div>
                        )
                    }
                    return ''
                })}
                {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''}
                {console.log(this.state.photos)}
            </div>
        );


    }

}

export default Index