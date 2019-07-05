import React, { Component } from 'react';
import myVideo from '../../../videos/forest.mp4'



//import Responsive from 'react-responsive';
// const Desktop = props => <Responsive {...props} minWidth={992} />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={480} />;
// const Default = props => <Responsive {...props} minWidth={768} />;
import {withGetScreen} from 'react-getscreen'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


//Assets
// if (this.props.isMobile) {
  import slider_img1 from '../../../images/sliders/slider_1.jpg'
  import slider_img2 from '../../../images/sliders/slider_2.jpg'
  import slider_img3 from '../../../images/sliders/slider_3.jpg'
// } else {
  import slider_img1_xs from '../../../images/sliders/slider_1xs.jpg'
  import slider_img2_xs from '../../../images/sliders/slider_2xs.jpg'
  import slider_img3_xs from '../../../images/sliders/slider_3xs.jpg'
// }




 var items = [
  {
    src: slider_img1,
    altText: 'Slide 1',
    caption: 'Discover with Lodostour...',
    content: ''
  },
  {
    src: slider_img2,
    altText: 'Slide 2',
    caption: 'Explore with Lodostour..',
    content: 'Place to explore new horizons'
  },
  {
    src: slider_img3,
    altText: 'Slide 3',
    caption: 'Love Lodostour!.',
    content: 'Way to love authentic horizons'
  }
];


var items_xs = [
{
  src: slider_img1_xs,
  altText: 'Slide 1',
  caption: 'Discover Lodostour',
  content: 'Site to discover small horizons'
},
{
  src: slider_img2_xs,
  altText: 'Slide 2',
  caption: 'Explore Lodostour ',
  content: 'Place to explore new horizons'
},
{
  src: slider_img3_xs,
  altText: 'Slide 3',
  caption: 'Love Lodostour',
  content: 'Way to love authentic horizons'
}
];


class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    
    if(this.props.isMobile()){
        items = items_xs;
    }

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (


        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
         
          <div >
            <CarouselCaption className="left"  captionText={item.content}  captionHeader={item.caption} />
            <img src={item.src} alt={item.altText} className="img-responsive rounded-circle" />
            {/* <video className="rounded-circle" id="background-video" loop autoPlay muted>
                            <source src={myVideo} type="video/mp4" />
                            <source src={myVideo} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>  */}
          </div>

        </CarouselItem>

      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


// export default MyCarousel;
export default withGetScreen(MyCarousel);