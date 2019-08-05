import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';


const content = [
	{
		title: 'Lancement des JFAC 2020',
    button: 'En savoir plus',
    link:'/jfac',
		image: 'https://media.graphcms.com/W3fj0j7QQQKJOe73EDYp?dl=true',
	},
	{
		title: 'Céremonie des JFAC 2019',
		button: 'En savoir plus',
    link:'/jfac',
    image: 'https://media.graphcms.com/W3fj0j7QQQKJOe73EDYp?dl=true',
  },

];

const AnimatedSlider = () =>{
  return(

		<Slider className="slider-wrapper mb-16">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<a href={item.link} className="p-4 bg-grefacc text-white font-bold">{item.button}</a>
					</div>
				</div>
			))}
		</Slider>
  )
}

export default AnimatedSlider;