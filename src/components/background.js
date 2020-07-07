import React, { Component } from "react"
import BackgroundImage from '../assets/img/background.jpg'
import BackgroundImageW from '../assets/img/background.webp'
import RBackgroundImage from '../assets/img/mobileBackground.png'
import RBackgroundImageW from '../assets/img/mobileBackground.webp'
class Background extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const phone = 425;
        const windowWidth = this.state.width;

        return (
            <picture className="backgroundImage">
                {
                    windowWidth <= phone && <>
                        <source srcset={RBackgroundImageW} type="image/webp" />
                        <source srcset={RBackgroundImage} type="image/jpeg" />
                        <img src={RBackgroundImage} alt="Alt Text!" />
                    </>
                }
                {
                    windowWidth >= phone && <>
                        <source srcset={BackgroundImageW} type="image/webp" />
                        <source srcset={BackgroundImage} type="image/jpeg" />
                        <img src={BackgroundImage} alt="Alt Text!" />
                    </>
                }

            </picture>
        );
    }
}

export default Background